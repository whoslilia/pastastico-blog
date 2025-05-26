import { useState } from "react";
import { RecipeForm, RecipeList } from ".";

const RecipeRender: React.FC = () => {
  const [refresh, setRefresh] = useState(false);

  const handleAdd = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="container mt-4">
      <h2>Gestión de Recetas 🍝✨</h2>
      <RecipeForm onAdd={handleAdd} />
      <RecipeList key={refresh.toString()} />
    </div>
  );
};

export default RecipeRender;
