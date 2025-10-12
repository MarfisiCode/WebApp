import React, { useState } from "react";
import RecipeForm from "../components/RecipeForm";
import RecipeTable from "../components/RecipeTable";

function RecipesPage({ ingredients, recipes, setRecipes }) {
  const [showForm, setShowForm] = useState(false);
  const [editRecipeIndex, setEditRecipeIndex] = useState(null);

  const handleSaveRecipe = (recipe) => {
    if (editRecipeIndex !== null) {
      const updated = [...recipes];
      updated[editRecipeIndex] = recipe;
      setRecipes(updated);
      setEditRecipeIndex(null);
    } else {
      setRecipes([...recipes, recipe]);
    }
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setEditRecipeIndex(index);
    setShowForm(true);
  };

  return (
    <div>
      <button onClick={() => setShowForm(true)}>Nueva receta</button>
      {showForm && (
        <RecipeForm
          ingredients={ingredients}
          onSubmit={handleSaveRecipe}
          onClose={() => {
            setShowForm(false);
            setEditRecipeIndex(null);
          }}
          initialData={editRecipeIndex !== null ? recipes[editRecipeIndex] : null}
        />
      )}
      <RecipeTable recipes={recipes} onEdit={handleEdit} />
    </div>
  );
}

export default RecipesPage;