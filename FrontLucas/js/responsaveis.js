async function respshowall(){
    try {
        
        const response = await fetch(`http://${ip_back}:3000/responsavel/showall`)        
        const response_aluno = await fetch(`http://${ip_back}:3000/aluno/showall`)

        const data = await response.json()
        const data_aluno = await response_aluno.json()
        
        document.querySelector('.matricula').placeholder = "Matrícula"
        document.querySelector('.titulo_pag').innerHTML = "Consulta de Responsáveis dos Alunos"
        
        tipo_input = 4
        document.querySelector('.input').value = ""
        document.querySelector('.matricula').value = ""
        
        carregar_popup(4)

        responsavel_mostrar(data.sponsor, data_aluno.student)

    } catch (error) {
        console.log(error)
    }
}

function responsavel_mostrar(sponsors, students){
    
    let linhas = ''
    for(let sponsor of sponsors){
        let matricula = ''
        for(let student of students){
            if(sponsor.aluno_id == student.id){
                matricula = student.matricula
            }
        }
        if (matricula != ""){
            linhas += `
            <tr>
                <td>${matricula}</td>
                <td>${sponsor.nome}</td>
                <td>${sponsor.endereco}</td>
                <td>${sponsor.telefone}</td>
                <td>${sponsor.nacionalidade}</td>
                <td>${sponsor.estado}</td>
                <td>${sponsor.cidade}</td>
                <td><input type="date" class="input_dados" id="sponsor_nascimento_${sponsor.aluno_id}" value="${sponsor.nascimento}"></td>
                <td>${sponsor.trabalho_local}</td>
            </tr>
            `
        } else {
            linhas += `
            <tr>
                <td>Sem aluno vinculado</td>
                <td>${sponsor.nome}</td>
                <td>${sponsor.endereco}</td>
                <td>${sponsor.telefone}</td>
                <td>${sponsor.nacionalidade}</td>
                <td>${sponsor.estado}</td>
                <td>${sponsor.cidade}</td>
                <td><input type="date" class="input_dados" id="sponsor_nascimento_${sponsor.aluno_id}" value="${sponsor.nascimento}"></td>
                <td>${sponsor.trabalho_local}</td>
            </tr>
            `
        }
    }
    
    let colunas = `
        <tr>
            <th>Matricula do Aluno</th>
            <th>Nome</th> 
            <th>Endereço</th>
            <th>Telefone</th>
            <th>Nacionalidade</th>
            <th>Estado</th>
            <th>Cidade</th>
            <th>Nascimento</th>
            <th>Local de Trabalho</th>
        </tr>
    `
    document.querySelector('.tabela').innerHTML = colunas + linhas
}