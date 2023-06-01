const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint GET /api/veiculos
app.get('/api/veiculos', (req, res) => {
  // Lógica para recuperar os veículos do banco de dados
  const veiculos = [
    { id: 1, marca: 'BMW', modelo: 'Série 3' },
    { id: 2, marca: 'Audi', modelo: 'A4' },
    { id: 3, marca: 'Mercedes-Benz', modelo: 'Classe C' }
  ];

  res.json(veiculos);
});

// Endpoint GET /api/veiculos/:id
app.get('/api/veiculos/:id', (req, res) => {
  const id = req.params.id;

  // Lógica para recuperar um veículo específico do banco de dados pelo ID
  const veiculo = { id: id, marca: 'BMW', modelo: 'Série 3' };

  res.json(veiculo);
});

// Endpoint POST /api/veiculos
app.post('/api/veiculos', (req, res) => {
  const veiculo = req.body;

  // Lógica para salvar o veículo no banco de dados
  // ...

  res.status(201).json(veiculo);
});

// Endpoint PUT /api/veiculos/:id
app.put('/api/veiculos/:id', (req, res) => {
  const id = req.params.id;
  const veiculo = req.body;

  // Lógica para atualizar o veículo no banco de dados pelo ID
  // ...

  res.json(veiculo);
});

// Endpoint DELETE /api/veiculos/:id
app.delete('/api/veiculos/:id', (req, res) => {
  const id = req.params.id;

  // Lógica para excluir o veículo do banco de dados pelo ID
  // ...

  res.sendStatus(204);
});

// Inicie o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
