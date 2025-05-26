import { useEffect, useState } from "react";
import axios from "axios";

interface Recipe {
  id: number;
  recipeName: string;
  recipeDesc: string;
}

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const fetchRecipes = async () => {
    const res = await axios.get("http://localhost:5000/api/recipes");
    setRecipes(res.data);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div>
      <h3 className="mt-4">Recetas guardadas:</h3>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card-form mb-3">
          <div className="card-body">
            <h5 className="card-title">{recipe.recipeName}</h5>
            <p className="card-text">{recipe.recipeDesc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
