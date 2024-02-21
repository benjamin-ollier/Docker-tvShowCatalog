FROM php:8.3-fpm


WORKDIR /var/www/html

# Copiez les fichiers nécessaires dans le conteneur
COPY . .

RUN apt-get -y update \
&& apt-get install -y libicu-dev \
&& docker-php-ext-configure intl \
&& docker-php-ext-install intl

# Installer Composer globalement
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Installer Symfony CLI
RUN curl -sS https://get.symfony.com/cli/installer | bash

RUN find / -type f -name symfony -exec mv {} /usr/local/bin/symfony \; || true

# Installer l'extension intl
RUN chown -R www-data:www-data /var/www
USER www-data

# Installer les dépendances via Composer sans les packages de développement
RUN composer install --no-dev --optimize-autoloader

USER root

# Compiler le JS et le CSS
RUN php bin/console asset-map:compile

# Nettoyer le cache
RUN php bin/console cache:clear --env=prod

# Exposer le port 9000 (par défaut pour PHP-FPM)
EXPOSE 8000

# Commande pour démarrer PHP-FPM
CMD ["symfony", "server:start", "--port=8000", "--allow-http", "--no-tls", "--dir=/var/www/html"]