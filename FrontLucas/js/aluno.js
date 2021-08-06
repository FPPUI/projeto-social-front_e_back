//import { carregar_popup } from "../pages/carry";

function aluno_mostrar(users){
    let linhas1 = '';
    zerar_popup_lista()
    var selected_vacina1, selected_vacina2, selected_bolsa_familia1, selected_bolsa_familia2;
    for(let user of users){
        linhas1 += `
        <tr id="aluno_${user.id}">
            <td>${user.matricula}</td>
            <td>${user.nome}</td>
            <td><input type="date" value="${user.nascimento}" disabled></td>
            <td>${user.sexo}</td>
            <td><input type="button" onclick="abrir_lista(${user.id})" value="Mais Informações"></button></td>
        </tr>       
        `
        
        if(user.vacina == 'Tem'){
            selected_vacina1 = 'selected'
            selected_vacina2 = ''
        }else{
            selected_vacina1 = ''
            selected_vacina2 = 'selected' 
        }

        if(user.bolsa_familia == 'Tem'){
            selected_bolsa_familia1 = 'selected'
            selected_bolsa_familia2 = ''
        }else{
            selected_bolsa_familia1 = ''
            selected_bolsa_familia2 = 'selected' 
        }

        var popup_lista_aluno = `
        <div class="popup" id="popup_lista_${user.id}">
            <div class="popup_cabeça">
                <div class="popup_titulo">Informações Adicionais</div>
                <button data-close_popup class="close_popup" onclick="fechar_lista(${user.id})">&times;</button>
            </div>
            <form method="POST" enctype="application/json" class="cadast">
            <div class="content_popup">
                <textarea class="input_dados" id="update_matricula_${user.id}" value="${user.matricula}">${user.matricula}</textarea>
                <textarea class="input_dados" id="update_nome_${user.id}" value="${user.nome}">${user.nome}</textarea>
                <textarea class="input_dados" id="update_cpf_responsavel_${user.id}" value="${user.cpf_responsavel}">${user.cpf_responsavel}</textarea>
                <textarea class="input_dados" id="update_nome_responsavel_${user.id}" value="${user.nome_responsavel}">${user.nome_responsavel}</textarea>
                <textarea class="input_dados" id="update_endereco_${user.id}" value="${user.endereco}">${user.endereco}</textarea>
                <textarea class="input_dados" id="update_nacionalidade_${user.id}" value="${user.nacionalidade}">${user.nacionalidade}</textarea>
                <textarea class="input_dados" id="update_estado_${user.id}" value="${user.estado}">${user.estado}</textarea>
                <textarea class="input_dados" id="update_cidade_${user.id}" value="${user.cidade}">${user.cidade}</textarea>
                <input type="date" class="input_dados" id="update_nascimento_${user.id}" value="${user.nascimento}">
                <textarea class="input_dados" id="update_sexo_${user.id}" value="${user.sexo}">${user.sexo}</textarea>
                <textarea class="input_dados" id="update_nis_${user.id}" value="${user.nis}">${user.nis}</textarea>
                <label for="vacina">Cartão de Vacina</label>
                <select class="input_dados" id="update_vacina_${user.id}">
                    <option value="Tem" ${selected_vacina1}>Tem</option>
                    <option value="Não Tem" ${selected_vacina2}>Não Tem</option>
                </select>
                <label for="vacina">Bolsa Familia</label>
                <select class="input_dados" id="update_bolsa_familia_${user.id}">
                    <option value="Tem" ${selected_bolsa_familia1}>Tem</option>
                    <option value="Não Tem" ${selected_bolsa_familia2}>Não Tem</option>
                </select>
                <textarea class="input_dados" id="update_obs_${user.id}" value="${user.obs}">${user.obs}</textarea>

                <input type="button" onclick="atualizar(
                    ${user.id},
                    ['matricula', 'nome', 'cpf_responsavel', 'nome_responsavel', 'endereco', 'nacionalidade', 'estado', 'cidade', 'nascimento', 'sexo', 'nis', 'vacina', 'bolsa_familia', 'obs'],
                    'aluno/edit',
                    1
                    )" value="Atualizar"></button>
                <input type="button" onclick="deletar(${user.id}, 'aluno/delete', 1)" value="Deletar"></button>
                </form>
            </div>
        </div>
        `
        carregar_popup_lista(popup_lista_aluno)
    }

    let colunas = `
        <tr>
            <th>Matricula</th>
            <th>Nome Completo</th> 
            <th>Nascimento</th>
            <th>Gênero</th>
            <th>TODOS OS DADOS</th>
        </tr>
    `
    // nis, nº cartão da vacina(se tem ou não o cartão), bolsa familia, telefone do responsável, Estado + cidade , cadastro de ...(cnis?)
    
    document.querySelector('.tabela').innerHTML = colunas + linhas1
}
/*
async function cadastrar_aluno(){

    let campos = ['matricula', 'nome', 'endereco', 'nacionalidade', 'estado', 'cidade', 'nascimento', 'sexo']
    var registro_obtido = []

    for(let cont=0; cont < 8; cont++){
        registro_obtido[cont] = (document.querySelector(`.cadastrar_${campos[cont]}`).value)
    }

    
    await fetch(`http://${ip_back}:3000/aluno/create`, {
        method: "POST",
        body: JSON.stringify({
            "matricula": registro_obtido[0],
            "nome": registro_obtido[1],
            "endereco": registro_obtido[2],
            "nacionalidade": registro_obtido[3],
            "estado": registro_obtido[4],
            "cidade": registro_obtido[5],
            "nascimento": registro_obtido[6],
            "sexo": registro_obtido[7],
            "obs": "Observation"
           }),
        headers: {
            'Content-Type': 'application/json'
          },
        mode: 'cors'
    });
}

async function aluno_atualizar(id){
    let campos = ['matricula', 'nome', 'endereco', 'nacionalidade', 'estado', 'cidade', 'nascimento', 'sexo', 'obs']
    var registro_obtido = []
    
    for(let cont=0; cont < 9; cont++){
        console.log(id)
        console.log(`#update_${campos[cont]}_${id}`)
        console.log(document.querySelector(`#update_${campos[cont]}_${id}`))

        registro_obtido[cont] = (document.querySelector(`#update_${campos[cont]}_${id}`).value)
    }
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
    //document.getElementById(`aluno_${id}`).style.backgroundColor = "green"
    //setTimeout(() => {document.getElementById(`aluno_${id}`).style.backgroundColor = "#FFFFFF"}, 500);
    

}

async function aluno_deletar(id){
    console.log(id)
    await fetch(`http://${ip_back}:3000/responsavel/delete/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
          },
        mode: 'cors'
    });
    
    await fetch(`http://${ip_back}:3000/aluno/delete/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
          },
        mode: 'cors'
    });
    
}*/