const express = require("express");
const cors = require("cors");
const QUESTIONS = require("./questions.json");
const app = express();
const port = process.env.PORT || 3000;
// Permite solicitudes desde cualquier dominio (CORS)
app.use(cors());
// Ruta para obtener todas las preguntas
app.get("/api/questions", (req, res) => {
    res.json(QUESTIONS);
});
// Iniciar servidor
app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});
