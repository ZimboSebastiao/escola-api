import express from "express";
import {ler} from "./src/aluno.js";

const app = express();
const porta = 8080;

// Adicionando suporte para o formato Json
app.use(express.json());

// Adicionando suporte a dados vindo de formulário
app.use(express.urlencoded({extended : true}));

// Criando as rotas
// raiz da aplicação
app.get('/', (req, res) => {
    res.send(`Raiz da API NodeJS + EXPRESS + MySQL`);
});

// Exibindo dados de um aluno
app.get('/alunos/:id', (req, res) => {
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
    res.send(`Excluindo um aluno`);
});

// Executando o servidor 


app.listen(porta, () => {
    console.log(`Servidor NodeJS rodando na porta ${porta}`);
})