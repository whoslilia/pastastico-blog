import express from "express";
import connection from "../database.js";

const router = express.Router();

// Obtener todas las recetas
router.get("/", (req, res) => {
  connection.query("SELECT * FROM recipes", (err, results) => {
    if (err) {
      console.error("❌ Error al obtener recetas:", err);
      res.status(500).json({ error: "Error al obtener recetas" });
    } else {
      res.json(results);
    }
  });
});

// Agregar nueva receta
router.post("/", (req, res) => {
  const { recipeName, recipeDesc } = req.body;

  if (!recipeName || !recipeDesc) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  connection.query(
    "INSERT INTO recipes (recipeName, recipeDesc) VALUES (?, ?)",
    [recipeName, recipeDesc],
    (err, result) => {
      if (err) {
        console.error("❌ Error al insertar receta:", err);
        res.status(500).json({ error: "Error al insertar receta" });
      } else {
        res.status(201).json({
          message: "Receta agregada con éxito 🍝✨",
          id: result.insertId,
        });
      }
    }
  );
});

export default router;
