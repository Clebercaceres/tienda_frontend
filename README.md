# 🛒 Tienda de Tecnología - Frontend

Este es el frontend de la tienda online de tecnología, desarrollado con **React + Vite**.

## 🚀 Tecnologías utilizadas
- React 18
- Vite
- Axios
- TailwindCSS (opcional para estilos)

## 📂 Estructura básica
```
frontend/
│── src/
│   ├── App.jsx
│   └── ...
│── index.html
│── package.json
│── vite.config.js
```

## ▶️ Cómo ejecutar
1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   ```
3. Construir para producción:
   ```bash
   npm run build
   ```

## 🔗 Conexión con backend
El frontend se conecta al backend configurado en la variable de entorno:
```js
const API_URL = import.meta.env.VITE_API_URL;
```
Crea un archivo `.env` en el frontend:
```
VITE_API_URL=http://localhost:5000/api
```
