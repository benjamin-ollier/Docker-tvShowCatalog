FROM php:8.3-fpm

# Copiez les fichiers nécessaires dans le conteneur
COPY . .

RUN apt-get -y update \
&& apt-get install -y libicu-dev \
&& docker-php-ext-configure intl \
&& docker-php-ext-install intl

# Installer Composer globalement
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer


RUN find / -type f -name symfony -exec mv {} /usr/local/bin/symfony \; || true

WORKDIR /var/www/html

COPY . .

ENV COMPOSER_ALLOW_SUPERUSER=1

RUN composer install --no-dev --optimize-autoloader

RUN php bin/console asset-map:compile

COPY --chown=www-data:www-data . .

USER www-data
# Commande pour démarrer PHP-FPM
CMD ["php-fpm"]