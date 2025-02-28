const express = require('express');
const cors = require('cors');
const connection = require('./db_config');
const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

app.listen(port, () => console.log(`Server rodando na porta ${port}`))

app.post('/cadastro', (req, res) => {
    const { name, email, password } = req.body;

    const query = 'INSERT INTO owner (name, email, password) VALUES (?, ?, ?)'
    connection.query(query, [name, email, password], (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Erro no servidor'})
        }
        res.status(201).json({success: true, message: 'Sucesso no cadastro!'})
    })
}) 