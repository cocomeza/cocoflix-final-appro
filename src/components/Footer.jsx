import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-cocoflix">
      <p>&copy; {new Date().getFullYear()} Cocoflix. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer; 