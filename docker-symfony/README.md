# Phantom Dungeon on your local server

This requires Docker et Docker Compose

    https://www.docker.com/
    https://www.docker.com/get-started
    https://docs.docker.com/compose/

Just launch the following commands :

    $ docker-compose build
    $ docker-compose up -d
    
Add the following line to your hosts file
    
    172.17.0.1	phantomdungeon.local
    
Access the game with a browser

     http://phantomdungeon.local:81/
