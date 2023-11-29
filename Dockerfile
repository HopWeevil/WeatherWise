FROM php:8.0-apache
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
RUN apt-get update && apt-get upgrade -y


FROM httpd:2.4.33-alpine

RUN apk update; \
    apk upgrade;

COPY apache_php.conf /usr/local/apache2/conf/apache_php.conf
RUN echo "Include /usr/local/apache2/conf/apache_php.conf" \
    >> /usr/local/apache2/conf/httpd.conf