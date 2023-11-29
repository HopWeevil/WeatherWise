FROM php:7.4-apache

RUN a2enmod rewrite
RUN a2enmod headers

WORKDIR /var/www/html
COPY ./src/Server /var/www/html
COPY ./src/Client /var/www/html
EXPOSE 8000
CMD ["apache2-foreground"]