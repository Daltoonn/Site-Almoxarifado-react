const db = require('../db');

// Buscar todas as categorias
exports.getAll = (req, res) => {
  const query = 'SELECT * FROM categories';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
};

// Criar uma nova categoria
exports.create = (req, res) => {
  const { name } = req.body;
  const query = 'INSERT INTO categories (name) VALUES (?)';
  db.query(query, [name], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ id: result.insertId, name });
  });
};
