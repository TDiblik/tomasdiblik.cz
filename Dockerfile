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

# Set working directory
WORKDIR /app/src
COPY ./src/Gemfile .
RUN bundle install
COPY ./src/ .
WORKDIR /app
COPY ./publish.sh .
RUN dos2unix publish.sh && chmod +x publish.sh
RUN ./publish.sh

## Production image ##
FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx-config /etc/nginx/conf.d/tomasdiblik.conf
COPY --from=builder /app/out /app/tomasdiblik.cz/
EXPOSE 20342

CMD ["nginx", "-g", "daemon off;"]