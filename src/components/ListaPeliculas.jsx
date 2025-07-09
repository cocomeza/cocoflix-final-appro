import React from "react";
import PeliculaItem from "./PeliculaItem";

// Componente donde muestro la lista de películas
// Recibe por props: array de películas, función para eliminar, función para marcar como vista
function ListaPeliculas({ peliculas, onEliminar, onMarcarVista }) {
  // Si no hay ninguna película en el array (length === 0), se muestra un mensaje en pantalla diciendo:
  // "No hay películas en la lista."
  // Con esto evito mostrar una lista vacía.

  if (peliculas.length === 0) {
    return <p>No hay películas en la lista.</p>;
  }

  return (
    <div>
      <h2>Lista de películas</h2>
      {/* Lista sin viñetas para mostrar las películas */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {/* Recorro el array de películas usando .map() */}
        {/* Para cada película, renderiza un componente PeliculaItem */}
      
        {peliculas.map((pelicula, index) => (
          <li key={index}>
            <PeliculaItem
              pelicula={pelicula}
              onEliminar={() => onEliminar(index)} // Paso el índice para saber cuál eliminar
              onMarcarVista={() => onMarcarVista(index)} // Paso el índice para saber cuál marcar
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaPeliculas;
