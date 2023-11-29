FROM php:8.0-apache
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
RUN apt-get update && apt-get upgrade -y

COPY apache_php.conf /usr/local/apache2/conf/apache_php.conf
RUN echo "ServerName localhost" >> ./apache/apache_php.conf