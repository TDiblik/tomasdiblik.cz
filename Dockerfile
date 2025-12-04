# ==========================================
# Stage 1: Builder
# ==========================================
FROM ruby:slim AS builder

RUN apt-get update && \
    apt-get install -y \
        build-essential \
        libimage-exiftool-perl \
        webp \
        tidy \
        ffmpeg \
        libpng-dev \
        libjpeg-dev \
        libtiff-dev \
        imagemagick \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /build

COPY ./src/Gemfile ./
RUN bundle install
COPY ./src ./src

WORKDIR /build/src
ENV JEKYLL_ENV=production
RUN bundle exec jekyll build

COPY ./LICENSE ./src/_site/LICENSE
RUN find ./_site/pages/blog/ -type f \( -name "*.jpg" -o -name "*.png" -o -name "*.webp" -o -name "*.jpeg" -o -name "*.ico" \) -exec sh -c ' \
    echo "Optimizing $1"; \
    exiftool -all= "$1"; \
    convert -strip -interlace Plane -quality 80% "$1" "$1"; \
    rm -f "${1}_original"; \
    ' _ {} \;

RUN find ./_site/ -type f -name "*.webm" -exec sh -c ' \
    echo "Generating preview for $1"; \
    ffmpeg -i "$1" -vf "select=eq(n\,49)" -vframes 1 "$(dirname "$1")/$(basename "$1")-video-preview-thumbnail.png"; \
    ' _ {} \;

RUN find ./_site/ -type f -name "*.html" -exec tidy -i -m -ashtml -utf8 -w 160 --drop-empty-elements no --drop-empty-paras no --drop-proprietary-attributes no --merge-divs no --merge-spans no {} \; || true

# ==========================================
# Stage 2: Production (Nginx)
# ==========================================
FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx-config /etc/nginx/conf.d/tomasdiblik.conf
COPY --from=builder /build/src/_site /app/tomasdiblik.cz/
EXPOSE 20342

CMD ["nginx", "-g", "daemon off;"]