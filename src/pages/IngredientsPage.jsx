import React, { useState } from "react";
import IngredientForm from "../components/IngredientForm";
import IngredientList from "../components/IngredientList";

function IngredientsPage({ ingredients, setIngredients }) {
  const [showForm, setShowForm] = useState(false);

  const handleAddIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={() => setShowForm(true)}>Añadir ingrediente</button>
      {showForm && (
        <IngredientForm
          onSubmit={handleAddIngredient}
          onClose={() => setShowForm(false)}
        />
      )}
      <IngredientList ingredients={ingredients} />
    </div>
  );
}

export default IngredientsPage;