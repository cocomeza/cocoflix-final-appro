import React from "react";
import PeliculaItem from "./PeliculaItem";

// Componente donde muestro la lista de películas
// Recibe por props: array de películas, función para eliminar, función para marcar como vista
function ListaPeliculas({ peliculas, onEliminar, onMarcarVista }) {
  // Renderizado condicional: si no hay películas, muestra un mensaje
  if (peliculas.length === 0) {
    return <p>No hay películas en la lista.</p>;
  }

  return (
    <div>
      <h2>Lista de películas</h2>
      {/* Lista sin viñetas para mostrar las películas */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {/* Recorre el array de películas usando .map() */}
        {/* Para cada película, renderiza un componente PeliculaItem */}
        {/* key={index} es necesario para que React pueda identificar cada elemento */}
        {peliculas.map((pelicula, index) => (
          <li key={index}>
            <PeliculaItem
              pelicula={pelicula}
              onEliminar={() => onEliminar(index)} // Pasa el índice para saber cuál eliminar
              onMarcarVista={() => onMarcarVista(index)} // Pasa el índice para saber cuál marcar
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaPeliculas;
