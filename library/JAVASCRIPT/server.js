const express = require('express');
const app = express();
const port = 3000; // Ou qualquer porta que deseje usar

// Middleware para lidar com o corpo da solicitação JSON
app.use(express.json());

// Rota para incluir uma nova pergunta no banco de dados
app.post('/incluirPergunta', (req, res) => {
    // Aqui você deve incluir o código para inserir a nova pergunta no banco de dados
    // Exemplo de como obter os dados da solicitação:
    const novaPergunta = req.body; // Supondo que os dados da pergunta sejam enviados no corpo da solicitação
    // Código para inserir nova pergunta no banco de dados
    res.send('Pergunta incluída com sucesso!');
});

// Rota para excluir uma pergunta do banco de dados
app.delete('/excluirPergunta/:id', (req, res) => {
    const idPergunta = req.params.id; // Obter o ID da pergunta a ser excluída dos parâmetros da URL
    // Código para excluir a pergunta do banco de dados com base no ID
    res.send(`Pergunta com o ID ${idPergunta} excluída com sucesso!`);
});

// Rota para atualizar uma pergunta no banco de dados
app.put('/atualizarPergunta/:id', (req, res) => {
    const idPergunta = req.params.id; // Obter o ID da pergunta a ser atualizada dos parâmetros da URL
    // Aqui você deve incluir o código para atualizar a pergunta no banco de dados com base no ID
    // Exemplo de como obter os dados da solicitação:
    const dadosAtualizados = req.body; // Supondo que os dados atualizados sejam enviados no corpo da solicitação
    // Código para atualizar a pergunta no banco de dados com base no ID
    res.send(`Pergunta com o ID ${idPergunta} atualizada com sucesso!`);
});

// Rota para consultar uma pergunta no banco de dados
app.get('/consultarPergunta/:id', (req, res) => {
    const idPergunta = req.params.id; // Obter o ID da pergunta a ser consultada dos parâmetros da URL
    // Aqui você deve incluir o código para consultar a pergunta no banco de dados com base no ID
    // Código para consultar a pergunta no banco de dados com base no ID e enviar como resposta
    res.json({ pergunta: 'Qual é a capital da França?', resposta: 'Paris', alternativas: ['Londres', 'Berlim', 'Madrid'] });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
