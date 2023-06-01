const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurações de conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost', // Endereço do servidor MySQL
  user: 'seu_usuario', // Usuário do banco de dados
  password: 'sua_senha', // Senha do banco de dados
  database: 'nome_do_banco' // Nome do banco de dados
});

// Função para salvar as informações do formulário no banco de dados
function salvarFormulario(formulario) {
  const sql = 'INSERT INTO formulario_veiculo SET ?';

  connection.query(sql, formulario, (err, results) => {
    if (err) {
      console.error('Erro ao salvar no banco de dados:', err);
    } else {
      console.log('Formulário salvo com sucesso!');
    }
  });
}

// Rota para receber os dados do formulário
app.post('/formulario', (req, res) => {
  const formulario = {
    foto: req.body.foto,
    marca: req.body.marca,
    modelo: req.body.modelo,
    ano: req.body.ano,
    anoMod: req.body.anoMod,
    km: req.body.km,
    combustivel: req.body.combustivel,
    status_pneu: req.body.status_pneu,
    placa: req.body.placa,
    avaliacao_superficial: req.body.avaliacao_superficial,
    tipo_cambio: req.body.tipo_cambio,
    ipva: req.body.ipva,
    opcionais: req.body.opcionais,
    observacoes: req.body.observacoes,
    valor_fipe: req.body.valor_fipe,
    custo_investimento: req.body.custo_investimento,
    tem_valor_mercado: req.body.tem_valor_mercado,
    valor_mercado: req.body.valor_mercado,
    link_fotos: req.body.link_fotos
  };

  salvarFormulario(formulario);

  res.sendStatus(200);
});

// Inicie o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});