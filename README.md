# Cocoflix 🎬

¡Bienvenido a Cocoflix! Esta es una aplicación web hecha en React para gestionar tu lista de películas por ver y vistas, y ver los estrenos 2026 en una galería visual.

---

## ¿Qué vas a encontrar en este proyecto?
- **Componentes reutilizables** (Header, Nav, Footer, Home, Estrenos2026, etc.)
- **Props** para pasar datos entre componentes
- **useState** y **useEffect** para manejar estado y persistencia
- **Eventos** como onClick y onChange
- **Renderizado de listas** con `.map()`
- **Filtrado** con `.filter()`
- **Persistencia de datos** con localStorage
- **Formulario controlado** para agregar películas
- **Función para eliminar o marcar como "vista"**
- **Diseño responsivo y moderno**
- **Galería de estrenos 2026** con imágenes locales o externas
- **Navegación por estado (SPA sin React Router)**

---

## Estructura del proyecto

```
cocoflix/
├── public/
│   └── img/
│       ├── mi-pelicula.jpg
│       └── avengers-doomsday.webp
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Nav.jsx
│   │   ├── Nav.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── Home.jsx
│   │   ├── Estrenos2026.jsx
│   │   ├── PeliculaForm.jsx
│   │   ├── ListaPeliculas.jsx
│   │   ├── PeliculaItem.jsx
│   │   └── FiltroPeliculas.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
```

---

## ¿Cómo instalar y correr el proyecto?

1. **Clona el repositorio o descarga los archivos.**
2. Abre una terminal en la carpeta del proyecto.
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia la app en modo desarrollo:
   ```bash
   npm run dev
   ```
5. Abre tu navegador y entra a [http://localhost:5173](http://localhost:5173)

---

## ¿Cómo está organizada la app?

### Navegación
La navegación entre "Inicio" y "Estrenos 2026" se realiza mediante estado local en React, sin React Router. Al hacer clic en el Nav, solo se muestra la sección correspondiente.

### Componentes principales
- **Header.jsx**: Muestra el título de la app.
- **Nav.jsx**: Barra de navegación con botones para cambiar de sección.
- **Footer.jsx**: Pie de página.
- **Home.jsx**: Página principal con formulario, filtros y lista de películas.
- **Estrenos2026.jsx**: Galería visual de estrenos 2026.

### Galería de estrenos 2026
Puedes agregar imágenes de dos formas:
- **Imágenes locales**: Guarda tus imágenes en `public/img/` y luego usa la ruta directa en `Estrenos2026.jsx`:
  ```js
  const estrenos2026 = [
    { titulo: "Los Vengadores: Doomsday", imagen: "/img/avengers-doomsday.webp" }
  ];
  ```
- **Imágenes externas**: Usa la URL directamente:
  ```js
  {
    titulo: "El Señor de los Anillos: La Caza de Gollum",
    imagen: "https://via.placeholder.com/180x260?text=Poster+1"
  }
  ```
Puedes mezclar ambos métodos en el array de estrenos.

### Ejemplo de array combinado:
```js
const estrenos2026 = [
  {
    titulo: "Los Vengadores: Doomsday",
    imagen: "/img/avengers-doomsday.webp" // imagen local desde public
  },
  {
    titulo: "El Señor de los Anillos: La Caza de Gollum",
    imagen: "https://via.placeholder.com/180x260?text=Poster+1" // imagen por URL
  }
];
```

---

## Fundamentos de React aplicados
- **Componentes**: Cada parte de la app es un componente reutilizable.
- **Props**: Se usan para pasar funciones y datos entre componentes.
- **useState**: Para manejar el estado de los formularios, filtros y la lista de películas.
- **useEffect**: Para sincronizar el estado con localStorage.
- **Eventos**: onClick, onChange, onSubmit para manejar interacciones del usuario.
- **Renderizado de listas**: `.map()` para mostrar películas.
- **Filtrado**: `.filter()` para buscar y filtrar por estado.
- **Formulario controlado**: Los inputs del formulario usan el estado de React.
- **Persistencia**: Los datos se guardan en localStorage para no perder la lista al recargar.
- **Galería visual**: Uso de grid CSS para mostrar estrenos de forma atractiva y responsiva.

---

