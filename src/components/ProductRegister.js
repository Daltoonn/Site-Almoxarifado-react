import React, { useState } from 'react';
import { Card, CardContent, Button, TextField } from '@mui/material';
import axios from 'axios';

function ProductRegister(props) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async () => {
    await axios.post('http://localhost:3001/api/products', {
      name,
      price,
      category
    });
    alert('Produto salvo com sucesso!');
  };

  return (
    <Card>
      <CardContent>
        <div style={{ fontSize: '20px' }}>{props.texto}</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <TextField fullWidth label="Nome" value={name} onChange={(e) => setName(e.target.value)} />
          <TextField fullWidth label="Preço" value={price} onChange={(e) => setPrice(e.target.value)} style={{ marginTop: '14px' }} />
          <TextField fullWidth label="Categoria" value={category} onChange={(e) => setCategory(e.target.value)} style={{ marginTop: '14px' }} />
          <Button variant="contained" onClick={handleSubmit} style={{ marginTop: '14px', width: '60%' }}>
            Salvar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductRegister;
