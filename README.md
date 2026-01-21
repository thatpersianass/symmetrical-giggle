# Mi API Pública de Preguntas
Esta API permite obtener un listado de preguntas en formato JSON.

## Endpoint
`GET /api/questions`

## Ejemplo de consumo (Fetch)
```javascript
fetch('[https://tu-api.vercel.app/api/questions](https://tu-api.vercel.app/api/questions)')
  .then(res => res.json())
  .then(data => console.log(data));