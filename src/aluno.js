import conexao from "./banco.js";


// CRUD

// Ler/exibir todos os alunos
function ler(res) {
    const sql = "SELECT * FROM alunos ORDER BY nome";

    conexao.query(sql, (erro, resultados) => {
        // Verificação para ver se há conteúdo
        if (resultados.length === 0) {
            res.status(204).end(); // É importante trabalhar com os status http. 204 = Sem contúdo. .end() encerra a execução
            return;
        }


        if (erro) {
            res.status(400).json(erro.code); // 400 = BAD Request
        } else {
            res.status(200).json(resultados);
        }
    });
}

export {ler};