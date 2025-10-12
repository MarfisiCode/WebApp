import React, { useState } from "react";

function IngredientForm({ onSubmit, onClose }) {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !precio || !cantidad) return;
    onSubmit({
      nombre,
      precio: parseFloat(precio),
      cantidad: parseFloat(cantidad),
    });
    setNombre("");
    setPrecio("");
    setCantidad("");
  };

  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input value={nombre} onChange={e => setNombre(e.target.value)} />
        <label>Precio (VES):</label>
        <input type="number" value={precio} onChange={e => setPrecio(e.target.value)} />
        <label>Cantidad:</label>
        <input type="number" value={cantidad} onChange={e => setCantidad(e.target.value)} />
        <button type="submit">Agregar</button>
        <button type="button" onClick={onClose}>Cancelar</button>
      </form>
    </div>
  );
}

export default IngredientForm;