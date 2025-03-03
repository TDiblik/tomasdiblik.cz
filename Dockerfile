## Build ##
FROM ruby:3.4-slim AS builder
RUN apt update -y && \
    apt upgrade -y
RUN apt install -y build-essential \
                    dos2unix \
                    libimage-exiftool-perl \
                    webp \
                    tidy \
                    ffmpeg \
                    libpng-dev libjpeg-dev libtiff-dev imagemagick
RUN rm -rf /var/lib/apt/lists/*

WORKDIR /build/src
COPY ./src/Gemfile .
RUN bundle install
COPY ./src/ .

WORKDIR /build
COPY ./publish.sh .
COPY ./LICENSE .
RUN dos2unix publish.sh && chmod +x publish.sh
RUN ./publish.sh

## Production image ##
FROM nginx:alpine
RUN apk update --no-cache && apk upgrade --no-cache && rm -rf /var/cache/apk/*
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx-config /etc/nginx/conf.d/tomasdiblik.conf
COPY --from=builder /build/out /app/tomasdiblik.cz/
EXPOSE 20342

CMD ["nginx", "-g", "daemon off;"]