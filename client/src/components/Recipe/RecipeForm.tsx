import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./Recipe.css";

interface RecipeFormProps {
  onAdd: () => void;
}

export const RecipeForm: React.FC<RecipeFormProps> = ({ onAdd }) => {
  const [recipeName, setRecipeName] = useState("");
  const [recipeDesc, setRecipeDesc] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipeName || !recipeDesc) {
      toast.error("Por favor, completa todos los campos 📝", {
        position: "top-right",
      });
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/recipes", {
        recipeName, // <- CORREGIDO
        recipeDesc, // <- CORREGIDO
      });

      toast.success("Receta guardada con éxito 🍝✨");
      setRecipeName("");
      setRecipeDesc("");
      onAdd();
    } catch (error) {
      toast.error("Hubo un error al guardar la receta 😥");
      console.error(error);
    }
  };

  return (
    <div className="card-form card p-4 mb-4 shadow-sm rounded-4">
      <h4 className="mb-3">Agregar Receta 🍽️</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="recipeName" className="form-label fw-semibold">
            Nombre de la Receta
          </label>
          <input
            type="text"
            className="form-control"
            id="recipeName"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            placeholder="Ej. Spaghetti Carbonara"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="recipeDesc" className="form-label fw-semibold">
            Descripción
          </label>
          <textarea
            className="form-control"
            id="recipeDesc"
            rows={3}
            value={recipeDesc}
            onChange={(e) => setRecipeDesc(e.target.value)}
            placeholder="Describe la receta o sus ingredientes..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="boton-form fw-semibold px-4"
        >
          Guardar Receta 🍝
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
