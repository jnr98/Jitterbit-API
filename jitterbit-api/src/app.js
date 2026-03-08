const express = require('express');
const connectDB = require('./config/database'); // Importa a pasta config
const orderRoutes = require('./routes/orderRoutes');

const app = express();

// Conecta ao banco de dados
connectDB();

// Middlewares
app.use(express.json());

// Rotas
app.use(orderRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});