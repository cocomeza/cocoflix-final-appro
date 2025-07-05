import React, { useState } from "react";

// Componente formulario para agregar nuevas películas
// Recibe una función por props que se ejecuta cuando se envía el formulario
function PeliculaForm({ onAgregarPelicula }) {
  // Estado para cada campo del formulario (formulario controlado)
  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("");
  const [anio, setAnio] = useState("");
  const [estado, setEstado] = useState("por ver"); // Valor por defecto "por ver"
  const [error, setError] = useState(""); // Para mostrar mensajes de error

  // Función que se ejecuta al enviar el formulario (evento onSubmit)
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Validaciones básicas antes de agregar la película
    if (!titulo.trim() || !genero.trim() || !anio.trim()) {
      setError("Por favor, completa todos los campos.");
      return; // Sale de la función si hay errores
    }
    
    // Validación del año: debe ser un número entre 1900 y el año actual
    if (isNaN(anio) || anio < 1900 || anio > new Date().getFullYear()) {
      setError("Ingresa un año válido.");
      return;
    }

    // Si pasa todas las validaciones, llama a la función que viene por props
    // para agregar la película a la lista principal
    onAgregarPelicula({
      titulo,
      genero,
      anio,
      estado,
    });

    // Limpia el formulario después de agregar la película
    setTitulo("");
    setGenero("");
    setAnio("");
    setEstado("por ver");
    setError(""); // Limpia cualquier mensaje de error
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar nueva película</h2>
      
      {/* Muestra mensaje de error si existe */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      {/* Campo para el título de la película */}
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Ej: Coco"
        />
      </div>
      
      {/* Campo para el género de la película */}
      <div>
        <label>Género:</label>
        <input
          type="text"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          placeholder="Ej: Animación"
        />
      </div>
      
      {/* Campo para el año de la película */}
      <div>
        <label>Año:</label>
        <input
          type="number"
          value={anio}
          onChange={(e) => setAnio(e.target.value)}
          placeholder="Ej: 2017"
        />
      </div>
      
      {/* Selector para el estado de la película */}
      <div>
        <label>Estado:</label>
        <select value={estado} onChange={(e) => setEstado(e.target.value)}>
          <option value="por ver">Por ver</option>
          <option value="vista">Vista</option>
        </select>
      </div>
      
      {/* Botón para enviar el formulario */}
      <button type="submit">Agregar película</button>
    </form>
  );
}

export default PeliculaForm;
