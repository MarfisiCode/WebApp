import React, { useState } from "react";

function RecipeForm({ ingredients, onSubmit, onClose, initialData }) {
  const [nombre, setNombre] = useState(initialData?.nombre || "");
  const [selectedIngredients, setSelectedIngredients] = useState(
    initialData?.ingredientes || []
  );

  const handleSelect = (idx) => {
    if (selectedIngredients.some(i => i.idx === idx)) return;
    setSelectedIngredients([...selectedIngredients, { idx, cantidad: 0 }]);
  };

  const handleCantidad = (i, cantidad) => {
    const updated = selectedIngredients.map((item, idx) =>
      idx === i ? { ...item, cantidad: parseFloat(cantidad) } : item
    );
    setSelectedIngredients(updated);
  };

  const getCosto = (item) => {
    const ing = ingredients[item.idx];
    if (!ing) return 0;
    return ((ing.precio / ing.cantidad) * item.cantidad) || 0;
  };

  const total = selectedIngredients.reduce(
    (sum, item) => sum + getCosto(item),
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || selectedIngredients.length === 0) return;
    onSubmit({
      nombre,
      ingredientes: selectedIngredients,
      total,
    });
  };

  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <label>Nombre de producto:</label>
        <input value={nombre} onChange={e => setNombre(e.target.value)} />
        <div>
          <h4>Ingredientes:</h4>
          {ingredients.map((ing, idx) => (
            <div key={idx}>
              {!selectedIngredients.some(i => i.idx === idx) ? (
                <button type="button" onClick={() => handleSelect(idx)}>
                  {ing.nombre}
                </button>
              ) : null}
            </div>
          ))}
          {selectedIngredients.map((item, i) => (
            <div key={i}>
              <span>{ingredients[item.idx].nombre}</span>
              <input
                type="number"
                min="0"
                value={item.cantidad}
                onChange={e => handleCantidad(i, e.target.value)}
                placeholder="Cantidad"
              />
              <span>
                Costo: {getCosto(item).toFixed(2)} VES
              </span>
            </div>
          ))}
        </div>
        <div>
          <h4>Total: {total.toFixed(2)} VES</h4>
        </div>
        <button type="submit">Guardar</button>
        <button type="button" onClick={onClose}>Cancelar</button>
      </form>
    </div>
  );
}

export default RecipeForm;