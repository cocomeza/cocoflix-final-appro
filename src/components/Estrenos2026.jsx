import React from "react";
import "../App.css";
import avengersDoomsday from "../../public/img/avengers-doomsday.webp";
import Gollum from "../../public/img/El Señor de los Anillos La Caza de Gollum.jpg";
import mandalorian from "../../public/img/mandalorian_.jpg";
import Dune from "../../public/img/dune-messiah.jpg";
import batman from "../../public/img/THE-BATMAN-CONCEPT-3-save-jpeg.jpg";
import spiderman from "../../public/img/Spidermanbrandnewdayposter.webp";

// Componente que renderiza la galería de estrenos
// Recibe un array de películas con título e imagen
function GaleriaEstrenos({ estrenos }) {
  return (
    <div className="galeria-estrenos">
      {/* Recorro el array de estrenos y renderizo cada uno */}
      {estrenos.map((pelicula, idx) => (
        <div className="estreno-item" key={idx}>
          {/* Imagen del poster de la película */}
          <img src={pelicula.imagen} alt={pelicula.titulo} />
          {/* Título de la película */}
          <p>{pelicula.titulo}</p>
        </div>
      ))}
    </div>
  );
}

// Componente principal de la página de estrenos 2026
function Estrenos2026() {

  const estrenos2026 = [
    {
      titulo: "Los Vengadores: Doomsday",
      imagen: avengersDoomsday
    },
    {
      titulo: "El Señor de los Anillos: La Caza de Gollum",
      imagen: Gollum
    },
    {
      titulo: "Star Wars: The Mandalorian y Grogu",
      imagen: mandalorian
    },
    {
      titulo: "Dune: Messiah",
      imagen: Dune
    },
    {
      titulo: "The Batman 2",
      imagen: batman
    },
    {
      titulo: "Spider-Man: Brand New Day",
      imagen: spiderman
    },
  ];

  return (
    <section id="estrenos2026" style={{width: "100%", margin: "32px 0"}}>
     
      <h2 style={{textAlign: "center", marginBottom: 24, color: "#e50914"}}>Estrenos 2026</h2>
      
      <GaleriaEstrenos estrenos={estrenos2026} />
    </section>
  );
}

export default Estrenos2026; 