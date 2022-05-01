# Pagina web para lecciones

Este es el proyecto por medio del cual estamos practicando los conceptos aprendidos sobre HTML, CSS, y JavaScript.

## Como ejecutar el proyecto

Para que el navegador pueda leer el sitio web es necesario utilizar un servidor local.
Debido a que hicimos cambios en la aplicacion para hacerla una SPA es necesario que el servidor local sea capaz de redireccionar las rutas del sitio hacia el index.html.

Actualmente el repositorio tiene la configuracion utilizando Nginx.
Para utilizar el servidor es necesario acceder a la carpeta de nginx-1.20.2 y utilizar el comando `start nginx`

Esto levantara el servidor, el cual es una aplicacion de consola. Luego de esto se puede acceder al sitio en la ruta 127.0.0.1.
Nginx no esta configurado para hacer hotreload, por lo que se recomienda refrescar el navegador con un "hard reload" para borrar el cache del estado en el que se encuentra.
En algunos casos tambien será necesario refrescar el servidor, esto se puede hacer utilizando `nginx -s reload` desde la carpeta principal.

Al terminar de usar la aplicación se debe utilizar el comando `nginx -s stop` para detener el servidor y liberar el puerto.

## Versiones (Semantic Version)

Este proyecto no usa Semantic Version. En lugar de esto, las versiones de los tags corresponden a la fecha en la cual se realizo la transmision en vivo en Twitch.

[DarkDreizer](www.twitch.com/darkdreizer)
