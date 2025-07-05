# Interacción con Servidores y Consumo de APIs

Este proyecto implementa una API REST para la gestión de productos utilizando JSON Server como backend. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una colección de productos.

## Tecnologías Utilizadas

- **Node.js**
- **JSON Server**: Para simular una API REST
- **Axios**: Para realizar peticiones HTTP
- **nanoid**: Para generar IDs únicos

## Estructura del Proyecto

El proyecto consta de los siguientes archivos principales:

- `gestion_api.js`: Contiene la lógica para interactuar con la API
- `initDb.js`: Script para inicializar la base de datos con datos de prueba
- `db.json`: Archivo que actúa como base de datos

## Funcionalidades

### Inicialización de la Base de Datos
El script `initDb.js` crea una base de datos inicial con productos de prueba:
- Laptop
- Mouse
- Teclado

### Operaciones Disponibles

1. **Obtener Productos**
   ```javascript
   getProducts()
   ```
   Recupera y muestra todos los productos disponibles.

2. **Obtener Producto por ID**
   ```javascript
   getProductById(id)
   ```
   Busca y muestra un producto específico por su ID.

3. **Crear Producto**
   ```javascript
   createProduct()
   ```
   Añade un nuevo producto a la base de datos con validación de datos.

4. **Actualizar Producto**
   ```javascript
   updateProduct(id)
   ```
   Modifica un producto existente con validación de datos.

5. **Eliminar Producto**
   ```javascript
   deleteProduct(id)
   ```
   Elimina un producto existente de la base de datos.

### Validaciones
Se implementa una validación de productos que verifica:
- Nombre del producto (requerido)
- Precio (debe ser un número)

## Cómo Usar

1. **Instalar Dependencias**
   ```bash
   npm install
   ```

2. **Inicializar la Base de Datos**
   ```bash
   npm run init-db
   ```

3. **Iniciar el Servidor**
   ```bash
   npm run server
   ```
   El servidor se iniciará en `http://localhost:3000`

4. **Desarrollo**
   ```bash
   npm run dev
   ```

## Estructura de los Datos

Cada producto tiene la siguiente estructura:
```json
{
    "id": "string",
    "name": "string",
    "price": "number"
}
```

## Endpoints de la API

- GET `/products`: Obtiene todos los productos
- GET `/products/:id`: Obtiene un producto específico
- POST `/products`: Crea un nuevo producto
- PATCH `/products/:id`: Actualiza un producto existente
- DELETE `/products/:id`: Elimina un producto existente

## Notas
- El servidor se ejecuta en el puerto 3000 por defecto
- Los IDs se generan automáticamente usando nanoid
- Todos los datos se almacenan en `db.json`