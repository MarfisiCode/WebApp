import React from "react";

function RecipeTable({ recipes, onEdit }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Total (VES)</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map((receta, idx) => (
          <tr key={idx}>
            <td>{receta.nombre}</td>
            <td>{receta.total.toFixed(2)}</td>
            <td>
              <button onClick={() => onEdit(idx)}>Editar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RecipeTable;