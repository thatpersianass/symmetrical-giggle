const express = require('express');
const cors = require('cors');
const app = express();
const questions = require('./questions.json');

app.use(express.json());

app.get('/api/questions', (req, res) => {
    res.json(questions);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));