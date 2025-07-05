import React from "react";

// Componente para filtrar películas por texto y estado
// Recibe por props: valores de los filtros y funciones para cambiarlos
function FiltroPeliculas({ filtroTexto, setFiltroTexto, filtroEstado, setFiltroEstado }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <h3>Filtrar películas</h3>
      
      {/* Filtro de búsqueda por texto */}
      <div>
        <label>Buscar por título o género: </label>
        <input
          type="text"
          value={filtroTexto}
          onChange={(e) => setFiltroTexto(e.target.value)}
          placeholder="Ej: Coco, Animación..."
        />
      </div>
      
      {/* Filtro por estado de la película */}
      <div style={{ marginTop: "0.5rem" }}>
        <label>Estado: </label>
        <select value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)}>
          <option value="todos">Todos</option>
          <option value="por ver">Por ver</option>
          <option value="vista">Vista</option>
        </select>
      </div>
    </div>
  );
}

export default FiltroPeliculas;
