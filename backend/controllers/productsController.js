const db = require('../db');

// Buscar todos os produtos
exports.getAll = (req, res) => {
  const query = 'SELECT * FROM products';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
};

// Criar novo produto
exports.create = (req, res) => {
  const { name, price, category } = req.body;
  const query = 'INSERT INTO products (name, price, category) VALUES (?, ?, ?)';
  db.query(query, [name, price, category], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ id: result.insertId, name, price, category });
  });
};
