import React, { useState, useEffect } from "react";
import PeliculaForm from "./PeliculaForm";
import ListaPeliculas from "./ListaPeliculas";
import FiltroPeliculas from "./FiltroPeliculas";
import "../App.css";

function Home() {
  // Estado para almacenar la lista de películas
  // Cada película tiene: titulo, genero, anio, estado
  const [peliculas, setPeliculas] = useState([]);

  // Estado para el filtro de búsqueda por texto (título o género)
  const [filtroTexto, setFiltroTexto] = useState("");

  // Estado para el filtro por estado de la película (todos, por ver, vista)
  const [filtroEstado, setFiltroEstado] = useState("todos");

  // useEffect para cargar películas desde localStorage al iniciar la app
  // Si hay datos guardados en localStorage, los carga
  useEffect(() => {
    const peliculasGuardadas = localStorage.getItem("peliculas");
    if (peliculasGuardadas) {
      // Convierte el JSON string de vuelta a un array de objetos
      setPeliculas(JSON.parse(peliculasGuardadas));
    }
  }, []);

  // Se ejecuta cada vez que cambia la lista de películas.
  // Guarda los datos actualizados en localStorage
  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, [peliculas]);

  // Función para agregar una nueva película a la lista
  const agregarPelicula = (pelicula) => {
    setPeliculas([...peliculas, pelicula]);
  };

  // Función para eliminar una película por su índice en la lista
  const eliminarPelicula = (index) => {
    const nuevasPeliculas = peliculas.filter((_, i) => i !== index);
    setPeliculas(nuevasPeliculas);
  };

  // Función para cambiar el estado de una película (vista ↔ por ver)
  const marcarVista = (index) => {
    const nuevasPeliculas = peliculas.map((pelicula, i) => {
      if (i === index) {
        return {
          ...pelicula,
          estado: pelicula.estado === "vista" ? "por ver" : "vista",
        };
      }
      return pelicula;
    });
    setPeliculas(nuevasPeliculas);
  };

  // Filtrado de películas según texto y estado
  const peliculasFiltradas = peliculas.filter((pelicula) => {
    const coincideTexto =
      pelicula.titulo.toLowerCase().includes(filtroTexto.toLowerCase()) ||
      pelicula.genero.toLowerCase().includes(filtroTexto.toLowerCase());

    const coincideEstado =
      filtroEstado === "todos" || pelicula.estado === filtroEstado;

    return coincideTexto && coincideEstado;
  });

  return (
    <div className="app-layout" id="inicio">
      {/* Columna izquierda: Formulario para agregar películas */}
      <div className="col-form">
        <div className="formContainer">
          {/* Agrega una nueva película usando el componente PeliculaForm */}
          <PeliculaForm onAgregarPelicula={agregarPelicula} />
        </div>
      </div>

      {/* Columna derecha: Filtros y lista de películas */}
      <div className="col-lista">
        {/* Filtros que se mantienen visibles al hacer scroll */}
        <div className="filtro-sticky">
          <FiltroPeliculas
            filtroTexto={filtroTexto}
            setFiltroTexto={setFiltroTexto}
            filtroEstado={filtroEstado}
            setFiltroEstado={setFiltroEstado}
          />
        </div>

        {/* Sección de películas "Por ver" */}
        <h2 id="porver" style={{ marginTop: 32, marginBottom: 8 }}>
          Por ver
        </h2>
        <ListaPeliculas
          peliculas={peliculasFiltradas.filter((p) => p.estado === "por ver")}
          onEliminar={eliminarPelicula}
          onMarcarVista={marcarVista}
        />

        {/* Sección de películas "Vistas" */}
        <h2 id="vistas" style={{ marginTop: 32, marginBottom: 8 }}>
          Vistas
        </h2>
        <ListaPeliculas
          peliculas={peliculasFiltradas.filter((p) => p.estado === "vista")}
          onEliminar={eliminarPelicula}
          onMarcarVista={marcarVista}
        />
      </div>
    </div>
  );
}

export default Home;
