# REST API Inmuebles

## Hecho por Germán Zittermann

### Descripcion

Este proyecto comprende una aplicacion tipo foro REST hecho en ExpressJS y el uso de MongoDB como base de datos.

### Endpoints

#### User
##### Mostrar todos los usuarios
```http
GET /api/users
```
Posibles respuestas

- `200 OK`

```json
[
	{
		"id": 1,
		"username": "Example",
		"password": "examplePassword"
	},
	{
		"id": 2,
		"username": "Example",
		"password": "examplePassword"
	}
]
```

##### Mostrar usuario

```http
GET /api/users/:id
```
Posibles respuestas

- `200 OK`

```json
{
	"id": 1,
	"username": "Example",
	"password": "examplePassword"
}
```

- `404 Not Found`
```json
{
	"message": "User does not exists"
}
```

##### Mostrar todos los inmuebles de un usuario
```http
GET /api/users/states/:id
```
Posibles respuestas

- `200 OK`

```json
[
	{
        "id": 1,
        "address": "Address example",
        "jurisdiction": "Jurisdiction example",
        "owner": {
            "id": 1,
            "username": "Example",
            "password": "Example password"
        }
    },
	{
        "id": 2,
        "address": "Address example",
        "jurisdiction": "Jurisdiction example",
        "owner": {
            "id": 1,
            "username": "Example",
            "password": "Example password"
        }
    },
	
]
```

##### Crear usuario

```http
POST /api/users

{
  "username": "Example",
  "password": "examplePassword"
}

```
Posibles respuestas

- `200 OK `
```json
{
	"id": 1,
	"username": "Example",
	"password": "examplePassword"
}
```

- `400 Bad Request `
```json
{
	"message": "User must not content an ID"
}
```

##### Editar usuario

```http
PUT /api/users/:id

{
	"username": "Example",
	"password": "examplePassword"
}

```
Posibles respuestas

- `200 OK `
```json
{	
	"id": 1,
	"username": "Example",
	"password": "examplePassword"
}
```

- `400 Bad Request `
```json
{	
	"message": "Owner ID must be provided"
}
```

##### Eliminar usuario

```http
DELETE /api/user/:id
```
Posibles respuestas

- `200 OK`
```json
{
  "message": "Estate delete correctly"
}
```

- `404 Not Found`
```json
{
  "message": "Estate does not exits"
}
```


#### Estate
##### Mostrar todos los inmuebles
```http
GET /api/estates
```
Posibles respuestas

- `200 OK`

```json
[
    {
        "id": 1,
        "address": "Address example",
        "jurisdiction": "Jurisdiction example",
        "owner": {
            "id": 1,
            "username": "Example",
            "password": "Example password"
        }
    },
	{
        "id": 2,
        "address": "Address example",
        "jurisdiction": "Jurisdiction example",
        "owner": {
            "id": 2,
            "username": "Example",
            "password": "Example password"
        }
    }
]
```

##### Mostrar inmueble

```http
GET /api/estates/:id
```
Posibles respuestas

- `200 OK`

```json
{
	"id": 1,
	"address": "Address example",
	"jurisdiction": "Jurisdiction example",
	"owner": {
		"id": 1,
		"username": "Example",
		"password": "Example password"
	}
}
```

- `404 Not Found`
```json
{
	"message": "Estate does not exists"
}
```

##### Crear inmueble

```http
POST /api/estates

{
    "address": "Address example",
    "jurisdiction": "Jurisdiction example",
    "ownerId": 1
}

```
Posibles respuestas

- `200 OK `
```json
{
	"id": 1,
	"address": "Address example",
	"jurisdiction": "Jurisdiction example",
	"owner": {
		"id": 1,
		"username": "Example",
		"password": "Example password"
	}
}
```

- `400 Bad Request `
```json
{
	"message": "Owner ID must be provided"
}
```

##### Editar inmueble

```http
PUT /api/estates/:id

{
    "address": "Address example",
    "jurisdiction": "Jurisdiction example",
    "ownerId": 1
}

```
Posibles respuestas

- `200 OK `
```json
{
	"id": 1,
	"address": "Address example",
	"jurisdiction": "Jurisdiction example",
	"owner": {
		"id": 1,
		"username": "Example",
		"password": "Example password"
	}
}
```

- `400 Bad Request `
```json
{	
	"message": "Owner ID must be provided"
}
```

##### Eliminar usuario

```http
DELETE /api/estates/:id
```
Posibles respuestas

- `200 OK`
```json
{
  "message": "Estate delete correctly"
}
```

- `404 Not Found`
```json
{
  "message": "Estate does not exits"
}
```

