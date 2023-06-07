# TEST-API

Este proyecto es una API desarrollada con Node.js y el framework Express.js. Proporciona diferentes rutas para gestionar posts, incluyendo la capacidad de listar, encontrar por ID, crear, editar y eliminar posts. Además, se ha implementado un mecanismo de autenticación para proteger las rutas relacionadas con posts.

La documentación de la API se generó Automaticamente utilizando Swagger y está disponible en `http://localhost:{puerto}/docs`, donde `{puerto}` es el número de puerto en el que se ejecuta la API.

## Instalación

-   Clona el repositorio en tu máquina local:

```
git clone https://github.com/Kypac-Max/TEST-API
```

-   Ve al directorio del proyecto:

```
cd TEST-API
```

-   Instala las dependencias:

```
npm install
```

## Configuración

Antes de ejecutar la API, asegúrate de configurar las variables de entorno necesarias. Renombra el archivo .env copy a .env y define las siguientes variables:

-   PORT
-   URL_BASE
-   KEY_SECRET
-   LOCAL_HOST

## Uso

Para ejecutar la API, utiliza el siguiente comando:

```
npm start
```

## Endpoints

A continuación se detallan los endpoints disponibles:

### Rutas de Posts

Todas las rutas relacionadas con posts están protegidas y requieren autenticación con un token JWT válido.

-   **GET /getAll** : Obtiene la lista de todos los posts.
-   **GET /getOne**: Obtiene un post por su ID.
-   **POST /addPost**: Crea un nuevo post.
-   **PUT /updatePost**: Actualiza un post existente por su ID.
-   **DELETE /deletePost**: Elimina un post existente por su ID.

## Documentación

La documentación completa de la API se encuentra disponible en `http://localhost:{puerto}/docs`. Puedes acceder a esta URL en tu navegador para explorar los endpoints, ver los esquemas de datos y probar los diferentes métodos de la API.

## Contribución

Si deseas contribuir a este proyecto, siéntete libre de hacerlo. Puedes enviar pull requests para sugerir mejoras, correcciones de errores o nuevas características.
