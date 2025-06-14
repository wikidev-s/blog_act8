## Recuperar todos los autores

Method: GET
URL: /api/autores
Headers: XXXX
Body: XXXX

Response: Un array con todos los autores

## Crear un nuevo autor

Method: POST
Url: /api/autores
Headers: XXXX
Body: nombre, email, imagen

Response: El objeto que representa el nuevo autor creado

## Recuperar todos los posts

Method: GET
URL: /api/posts
Headers: XXXX
Body: XXXX

Response: Un array con todos los posts

## Crear un nuevo post

Method: POST
Url: /api/posts
Headers: XXXX
Body: titulo, descripcion, categoria, autor_id

Response: El objeto que representa el nuevo post creado

## Recuperar todos los posts de un autor

Method: GET
URL: /api/posts/autor/:autorId
Headers: XXXX
Body: XXXX

Response: Un array con todos los posts del autor seleccionado
