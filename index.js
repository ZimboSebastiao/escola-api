import express from "express";

const app = express();

// Criando as rotas
// raiz da aplicação
app.get('/', (req, res) => {
    res.send(`Raiz da API NodeJS + EXPRESS + MySQL`);
});

// Exibindo dados de um aluno
app.get('/:id', (req, res) => {
    res.send(`Exibindo dados de um aluno`);
});

// Exibindo dados de Todos os alunos
app.get('/alunos', (req, res) => {
    res.send(`Exibindo dados de todos os alunos`);
});

// Adicionando um aluno
app.post('/alunos', (req, res) => {
    res.send(`Adicionando um aluno`);
});

// Atualizando dados de um aluo
app.patch('/alunos/:id', (req, res) => {
    res.send(`Atualizando um aluno`);
});

// Atualizando dados de um aluo
app.delete('/alunos/:id', (req, res) => {
    res.send(`Excluindo alunos`);
});

// Executando o servidor 

const porta = 8080;
app.listen(porta, () => {
    console.log(`Servidor NodeJS rodando na porta ${porta}`);
})