FROM debian:jessie

MAINTAINER Maxence POUTORD <maxence.poutord@gmail.com>

RUN apt-get update && apt-get install -y \
    nginx

ADD nginx.conf /etc/nginx/
ADD phantomdungeon.local.conf /etc/nginx/sites-available/

RUN ln -s /etc/nginx/sites-available/phantomdungeon.local.conf /etc/nginx/sites-enabled/
RUN rm /etc/nginx/sites-enabled/default

RUN usermod -u 1000 www-data

CMD ["nginx"]

EXPOSE 80
