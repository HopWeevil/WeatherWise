FROM php:7.4-fpm

RUN apt-get update && \
    apt-get install -y nginx && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/html
COPY ./src/Server /var/www/html
COPY ./src/Client /var/www/html

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]
