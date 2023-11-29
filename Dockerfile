FROM ubuntu:latest 
RUN apt-get install -y  apache2  

FROM php:8.0-apache
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli



COPY ./src/Server /var/www/html
COPY ./src/Client /var/www/html


EXPOSE 80
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

CMD ["apache2-foreground"]