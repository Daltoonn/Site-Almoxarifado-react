const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');

// Rota para buscar todas as categorias
router.get('/', categoriesController.getAll);

// Rota para criar uma nova categoria
router.post('/', categoriesController.create);

module.exports = router;
