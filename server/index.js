import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import recipesRoutes from "./routes/recipes.js";
import "./database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/recipes", recipesRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT} 🍝✨`);
});
