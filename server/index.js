import express from "express";
import cors from "cors";
import connection from "./database.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

connection.query("SELECT 1 + 1 AS result", (err, results) => {
  if (err) {
    console.error("Error ejecutando consulta de prueba:", err);
    return;
  }
  console.log("Resultado de prueba:", results[0].result);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT} 🍝✨`);
});
