import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-cocoflix">
      <p>&copy; {new Date().getFullYear()} Cocoflix. Todos los derechos reservados.</p>
      {/* Con esto obtengo automáticamente el año actual desde JavaScript */}
    </footer>
  );
}

export default Footer; 