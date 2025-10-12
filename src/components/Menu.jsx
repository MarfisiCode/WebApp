import React from "react";

function Menu({ setScreen }) {
  return (
    <nav>
      <button onClick={() => setScreen(0)}>Ingredientes</button>
      <button onClick={() => setScreen(1)}>Recetas</button>
      {/* Pantallas 3 y 4 más adelante */}
    </nav>
  );
}

export default Menu;