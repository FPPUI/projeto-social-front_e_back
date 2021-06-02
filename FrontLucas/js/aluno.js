async function alunoshowall(){
    try {
        const response = await fetch(`http://${ip_back}:3000/aluno/showall`)
        const data = await response.json()

        document.querySelector('.titulo_pag').innerHTML = "Consulta de Alunos"
        document.querySelector('.matricula').placeholder = "Matrícula"

        tipo_input = 1
        document.querySelector('.input').value = ""
        document.querySelector('.matricula').value = ""

        aluno_mostrar(data.student)

    } catch (error) {
        console.log(error)
    }
}

function aluno_mostrar(users){

    let linhas1 = ''
    let linhas2 = ''
    let linhas3 = ''
    for(let user of users){
        linhas1 += `
        <tr>
            <form action="/aluno/edit/${user.id}" method="POST">
                <td><input type="text" name="matricula" value="${user.matricula}"></td>
                <td><input type="text" name="nome" value="${user.nome}"></td>
                <td><input type="text" name="endereco" value="${user.endereco}"></td>
                <td><input type="text" name="nacionalidade" value="${user.nacionalidade}"></td>
                <td><input type="text" name="estado" value="${user.estado}"></td>
                <td><input type="text" name="cidade" value="${user.cidade}"></td>
                <td><input type="date" name="nascimento" value="${user.nascimento}"></td>
                <td><input type="text" name="sexo" value="${user.sexo}"></td>
                <td><input type="text" name="obs" value="${user.obs}"></td>
                <td><input type="submit" name="" value="Atualizar"></td>
            </form>

            <form action="/action_page.php" method="POST">
                <td><input type="submit" name="" value="Deletar"></td>
            </form>
        </tr>
        `
    }

    let colunas = `
        <tr>
            <th>Matricula</th>
            <th>Nome Completo</th> 
            <th>Endereço</th>
            <th>Nacionalidade</th>
            <th>Estado</th>
            <th>Cidade</th>
            <th>Nascimento</th>
            <th>Gênero</th>
            <th>Observações</th>
            <th>ATUALIZAR</th>
            <th>DELETAR</th>
        </tr>
    `
    
    // nis, nº cartão da vacina(se tem ou não o cartão), bolsa familia, telefone do responsável, Estado + cidade , cadastro de ...(cnis?)
    document.querySelector('.tabela').innerHTML = colunas + linhas1
}


async function aluno_atualizar(){
    
}