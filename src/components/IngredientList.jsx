import React from "react";

function IngredientList({ ingredients }) {
  const sorted = [...ingredients].sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
  );
  return (
    <ul>
      {sorted.map((ing, idx) => (
        <li key={idx}>
          {ing.nombre} - {ing.precio} VES - {ing.cantidad}
        </li>
      ))}
    </ul>
  );
}

export default IngredientList;