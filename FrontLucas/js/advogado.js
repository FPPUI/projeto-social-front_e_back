
function advogado_mostrar(lawers){
    let linhas1 = '';
    zerar_popup_lista()
    for(let lawer of lawers){
        linhas1 += `
        <tr id="advogado_${lawer.id}">
            <td>${lawer.registro_oab}</td>
            <td>${lawer.nome}</td>
            <td>${lawer.telefone}</td>
            <td>${lawer.email}</td>
            <td><input type="button" onclick="abrir_lista(${lawer.id})" value="Mais Informações"></button></td>
            
        </tr>       
        `
    
        var popup_lista_advogado = `
        <div class="popup" id="popup_lista_${lawer.id}">
            <div class="popup_cabeça">
                <div class="popup_titulo">Informações Adicionais</div>
                <button data-close_popup class="close_popup" onclick="fechar_lista(${lawer.id})">&times;</button>
            </div>

            <div class="content_popup">
                <textarea class="input_dados" id="update_registro_oab_${lawer.id}" value="${lawer.registro_oab}">${lawer.registro_oab}</textarea>
                <textarea class="input_dados" id="update_nome_${lawer.id}" value="${lawer.nome}">${lawer.nome}</textarea>
                <textarea class="input_dados" id="update_endereco_${lawer.id}" value="${lawer.endereco}">${lawer.endereco}</textarea>
                <textarea class="input_dados" id="update_telefone_${lawer.id}" value="${lawer.telefone}">${lawer.telefone}</textarea>
                <textarea class="input_dados" id="update_email_${lawer.id}" value="${lawer.email}">${lawer.email}</textarea>
                <input type="button" onclick="atualizar(
                    ${lawer.id},
                    ['registro_oab', 'nome', 'endereco', 'telefone', 'email'],
                    'advogado/edit',
                    2
                    )" value="Atualizar"></button>
                <input type="button" onclick="deletar(${lawer.id}, 'advogado/delete', 2)" value="Deletar"></button>
            </div>
        </div>
        `
        carregar_popup_lista(popup_lista_advogado)
    }

    let colunas = `
        <tr>
            <th>Registro OAB</th>
            <th>Nome</th> 
            <th>Telefone</th>
            <th>Email</th>
            <th>TODOS OS DADOS</th>
        </tr>
    `

    document.querySelector('.tabela').innerHTML = colunas + linhas1
}
/*
async function cadastrar_advogado(){

    let campos = ['registro_oab', 'nome', 'endereco', 'telefone', 'email'] //Mudança 1
    var registro_obtido = []

    for(let cont=0; cont < campos.length; cont++){
        registro_obtido[cont] = (document.querySelector(`.cadastrar_${campos[cont]}`).value)
    }

    
    await fetch(`http://${ip_back}:3000/advogado/create`, { //Mudança 2
        method: "POST",
        body: JSON.stringify({  //Mudança 3 abaixo
            "registro_oab": registro_obtido[0],
            "nome": registro_obtido[1],
            "endereco": registro_obtido[2],
            "telefone": registro_obtido[3],
            "email": registro_obtido[4],
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
    
}
*/
/*
{
    
    let linhas = ''
    
        linhas += `
        <tr>
            <td>${lawer.registro_oab}</td>
            <td>${lawer.nome}</td>
            <td>${lawer.endereco}</td>
            <td>${lawer.telefone}</td>
            <td>${lawer.email}</td>
        </tr>
        `
    }
    let colunas = `
        <tr>
            <th>Registro OAB</th>
            <th>Nome</th> 
            <th>Endereço</th>
            <th>Telefone</th>
            <th>Email</th>
        </tr>
    `
    document.querySelector('.tabela').innerHTML = colunas + linhas
}*/