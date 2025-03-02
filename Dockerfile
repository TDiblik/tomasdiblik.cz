## Build ##
FROM ruby:3.4-slim AS builder
RUN apt-get update -y && \
    apt-get upgrade -y && \
    apt-get install -y build-essential dos2unix libimage-exiftool-perl webp tidy ffmpeg && \
    rm -rf /var/lib/apt/lists/*

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
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]