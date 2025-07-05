import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Estrenos2026 from "./components/Estrenos2026";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Estado para controlar qué página se muestra actualmente
  const [paginaActual, setPaginaActual] = useState("home");

  return (
    <>
      {}
      <Header />
      
      {}
      <Nav setPaginaActual={setPaginaActual} paginaActual={paginaActual} />
      
      {/* Renderizado condicional: muestra Estrenos2026 o Home según el estado */}
      {paginaActual === "estrenos" ? <Estrenos2026 /> : <Home />}
      
      {}
      <Footer />
    </>
  );
}

export default App;
