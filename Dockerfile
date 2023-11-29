FROM php:8.0-apache
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
RUN apt-get update && apt-get upgrade -y

COPY ./src/Server /var/www/html
COPY ./src/Client /var/www/html
EXPOSE 8000