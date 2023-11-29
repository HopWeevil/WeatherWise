FROM ubuntu:14.04  
RUN apt-get install -y  apache2  
EXPOSE 8000 
CMD ["apache2ctl", "-D", "FOREGROUND"]

FROM php:8.0-apache
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

COPY ./src/Server /var/www/html
COPY ./src/Client /var/www/html
