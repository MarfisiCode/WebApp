import React, { useState } from "react";
import Menu from "./components/Menu";
import IngredientsPage from "./pages/IngredientsPage";
import RecipesPage from "./pages/RecipesPage";

function App() {
  const [screen, setScreen] = useState(0); // 0:Ingredientes, 1:Recetas, etc.
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

  return (
    <div>
      <Menu setScreen={setScreen} />
      {screen === 0 && (
        <IngredientsPage
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
      )}
      {screen === 1 && (
        <RecipesPage
          ingredients={ingredients}
          recipes={recipes}
          setRecipes={setRecipes}
        />
      )}
      {/* Aquí pondremos las pantallas 3 y 4 más adelante */}
    </div>
  );
}

export default App;