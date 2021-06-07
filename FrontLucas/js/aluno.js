var ip_back = "localhost"
async function alunoshowall(){
    try {
        var ip_back = "localhost"
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
            <td><input type="text" class="input_dados" id="update_matricula_${user.id}" value="${user.matricula}"></td>
            <td><input type="text" class="input_dados" id="update_nome_${user.id}" value="${user.nome}"></td>
            <td><input type="text" class="input_dados" id="update_endereco_${user.id}" value="${user.endereco}"></td>
            <td><input type="text" class="input_dados" id="update_nacionalidade_${user.id}" value="${user.nacionalidade}"></td>
            <td><input type="text" class="input_dados" id="update_estado_${user.id}" value="${user.estado}"></td>
            <td><input type="text" class="input_dados" id="update_cidade_${user.id}" value="${user.cidade}"></td>
            <td><input type="date" class="input_dados" id="update_nascimento_${user.id}" value="${user.nascimento}"></td>
            <td><input type="text" class="input_dados" id="update_sexo_${user.id}" value="${user.sexo}"></td>
            <td><input type="text" class="input_dados" id="update_obs_${user.id}" value="${user.obs}"></td>
            <td><button type="button" onclick="aluno_atualizar(${user.id})" value="Atualizar">Atualizar</button></td>
            <td><button type="button" name="" value="Deletar">Deletar</button></td>
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


async function aluno_atualizar(id){
    let campos = ['matricula', 'nome', 'endereco', 'nacionalidade', 'estado', 'cidade', 'nascimento', 'sexo', 'obs']
    //var formData = new FormData(document.querySelector(`.form_update_${id}`));
    var registro_obtido = []

    for(let cont=0; cont < 9; cont++){
        registro_obtido[cont] = (document.querySelector(`#update_${campos[cont]}_${id}`).value)
        //formData.append(`${campos[cont]}`, `${registro_obtido}`);
    }

    console.log(registro_obtido)
    var myHeaders = new Headers();




    await fetch(`http://${ip_back}:3000/aluno/edit/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            "matricula": registro_obtido[0],
            "nome": registro_obtido[1],
            "endereco": registro_obtido[2],
            "nacionalidade": registro_obtido[3],
            "estado": registro_obtido[4],
            "cidade": registro_obtido[5],
            "nascimento": registro_obtido[6],
            "sexo": registro_obtido[7],
            "obs": registro_obtido[8]
           }),
        headers: {
            'Content-Type': 'application/json'
          },
        mode: 'cors'
    });
    console.log("aloooo")
    /*
    {
        "matricula": registro_obtido[0],
        "nome": registro_obtido[1],
        "endereco": registro_obtido[2],
        "nacionalidade": registro_obtido[3],
        "estado": registro_obtido[4],
        "cidade": registro_obtido[5],
        "nascimento": registro_obtido[6],
        "sexo": registro_obtido[7],
        "obs": registro_obtido[8]
       }*/
}