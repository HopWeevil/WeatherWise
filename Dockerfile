FROM php:7.4-apache

RUN a2enmod rewrite
RUN a2enmod headers

# Set the ServerName to suppress the warnings
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

WORKDIR /var/www/html
COPY ./src/Server /var/www/html
COPY ./src/Client /var/www/html
EXPOSE 8000
CMD ["apache2-foreground"]