import React from "react";

// Componente para mostrar una película individual
// Recibe por props: objeto película, función para eliminar, función para marcar como vista
function PeliculaItem({ pelicula, onEliminar, onMarcarVista }) {
  // Desestructuración: extrae las propiedades del objeto película
  const { titulo, genero, anio, estado } = pelicula;

  // Estilo condicional: cambia la apariencia según el estado de la película
  // Si está marcada como "vista", se muestra tachada y en gris
  const estiloVista = {
    textDecoration: estado === "vista" ? "line-through" : "none", // Tachado si está vista
    color: estado === "vista" ? "gray" : "black", // Color gris si está vista
  };

  return (
    <div style={{ marginBottom: "1rem", ...estiloVista }}>
      {/* Información de la película: título, año y género */}
      <strong>{titulo}</strong> ({anio}) - {genero} <br />
      
      {/* Muestra el estado actual de la película */}
      Estado: <span>{estado === "vista" ? "Vista" : "Por ver"}</span>
      <br />
      
      {/* Botón para cambiar el estado de la película */}
      {/* El texto del botón cambia según el estado actual */}
      <button onClick={onMarcarVista}>
        {estado === "vista" ? "Marcar como por ver" : "Marcar como vista"}
      </button>
      
      {/* Botón para eliminar la película de la lista */}
      {/* Estilo en rojo para indicar que es una acción destructiva */}
      <button onClick={onEliminar} style={{ marginLeft: "0.5rem", color: "red" }}>
        Eliminar
      </button>
    </div>
  );
}

export default PeliculaItem;
