const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories'); // Importando as rotas de categorias

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes); // Usando as rotas de categorias

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
