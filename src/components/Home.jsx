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
  // lo ejecuto solo una vez cuando el componente se monta (array vacío [])
  useEffect(() => {
    const peliculasGuardadas = localStorage.getItem("peliculas");
    if (peliculasGuardadas) {
      // para convertir el JSON string de vuelta a un array de objetos
      setPeliculas(JSON.parse(peliculasGuardadas));
    }
  }, []);

  // useEffect para guardar películas en localStorage cada vez que cambian
  // Se ejecuta cada vez que el estado 'peliculas' cambia
  useEffect(() => {
    // Convierte el array de películas a JSON string para guardarlo
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, [peliculas]);

  // Función para agregar una nueva película a la lista
  // Recibe un objeto película y lo agrega al final del array
  const agregarPelicula = (pelicula) => {
    setPeliculas([...peliculas, pelicula]);
  };

  // Función para eliminar una película por su índice en la lista
  // Filtra el array excluyendo la película en la posición especificada
  const eliminarPelicula = (index) => {
    const nuevasPeliculas = peliculas.filter((_, i) => i !== index);
    setPeliculas(nuevasPeliculas);
  };

  // Función para cambiar el estado de una película (vista ↔ por ver)
  // Mapea el array y cambia solo la película en el índice especificado
  const marcarVista = (index) => {
    const nuevasPeliculas = peliculas.map((pelicula, i) => {
      if (i === index) {
        return {
          ...pelicula, // Mantiene todas las propiedades existentes
          estado: pelicula.estado === "vista" ? "por ver" : "vista", // Cambia el estado
        };
      }
      return pelicula; // Retorna la película sin cambios si no es la buscada
    });
    setPeliculas(nuevasPeliculas);
  };

  // Filtrado de películas según texto y estado
  // Aplica ambos filtros: búsqueda por texto Y filtro por estado
  const peliculasFiltradas = peliculas.filter((pelicula) => {
    // Filtro por texto: busca en título o género (ignorando mayúsculas/minúsculas)
    const coincideTexto =
      pelicula.titulo.toLowerCase().includes(filtroTexto.toLowerCase()) ||
      pelicula.genero.toLowerCase().includes(filtroTexto.toLowerCase());
    
    // Filtro por estado: muestra todas si es "todos", o solo las que coinciden
    const coincideEstado =
      filtroEstado === "todos" || pelicula.estado === filtroEstado;
    
    // La película se incluye solo si pasa ambos filtros
    return coincideTexto && coincideEstado;
  });

  return (
    <div className="app-layout" id="inicio">
      {/* Columna izquierda: Formulario para agregar películas */}
      <div className="col-form">
        <div className="formContainer">
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
        <h2 id="porver" style={{marginTop: 32, marginBottom: 8}}>Por ver</h2>
        <ListaPeliculas
          peliculas={peliculasFiltradas.filter(p => p.estado === "por ver")}
          onEliminar={eliminarPelicula}
          onMarcarVista={marcarVista}
        />
        
        {/* Sección de películas "Vistas" */}
        <h2 id="vistas" style={{marginTop: 32, marginBottom: 8}}>Vistas</h2>
        <ListaPeliculas
          peliculas={peliculasFiltradas.filter(p => p.estado === "vista")}
          onEliminar={eliminarPelicula}
          onMarcarVista={marcarVista}
        />
      </div>
    </div>
  );
}

export default Home; 