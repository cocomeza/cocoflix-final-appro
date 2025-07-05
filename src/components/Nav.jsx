import React from "react";
import "./Nav.css";

// Recibe por props: función para cambiar página y página actual
function Nav({ setPaginaActual, paginaActual }) {
  return (
    <nav className="nav-cocoflix">
      <ul>
        {/* Botón para ir a la página de inicio */}
        <li>
          <button
            className={paginaActual === "home" ? "nav-activo" : ""}
            onClick={() => setPaginaActual("home")}
          >
            Inicio
          </button>
        </li>
        
        {/* Botón para ir a la página de estrenos */}
        <li>
          <button
            className={paginaActual === "estrenos" ? "nav-activo" : ""}
            onClick={() => setPaginaActual("estrenos")}
          >
            Estrenos 2026
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav; 