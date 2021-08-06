//import { carregar_popup } from "../pages/carry";
var ip_back = "localhost"
var registro_obtido = {}
async function showall(fetch_config_listar, pesquisa_titulo_pag, pesquisa_matricula, escolha){
    try {
        var ip_back = "localhost"
        const response = await fetch(`http://${ip_back}:3000/${fetch_config_listar}`) // aluno/showall
        const data = await response.json()

        document.querySelector('.titulo_pag').innerHTML = pesquisa_titulo_pag // "Consulta de Alunos"
        document.querySelector('.matricula').placeholder = pesquisa_matricula // "Matrícula"

        document.querySelector('.input').value = ""
        document.querySelector('.matricula').value = ""

        document.querySelector('.titulo_pag').hidden = false
        document.querySelector('.formulario').hidden = false

        carregar_popup_cadastro(escolha) // 1
        /*
        *   1- alunos
        *   2- responsáveis
        *   3- advogados
        *   4- clientes
        */
        switch(escolha){
            case 1:
                tipo_input = 1;
                aluno_mostrar(data.student)
                break;
            case 2:
                tipo_input = 2;
                advogado_mostrar(data.lawer)
                break;
            case 3:
                tipo_input = 3;
                cliente_mostrar(data.client)
                break;
            case 4:
                tipo_input = 4;
                responsavel_mostrar(data.sponsor)
                break;
        }
        

    } catch (error) {
        console.log(error)
    }
}


async function cadastrar(campos, fetch_config_cadastrar){
    var registro_obtido = {}
    
    for(let cont=0; cont < campos.length; cont++){
        registro_obtido[campos[cont]] = (document.querySelector(`.cadastrar_${campos[cont]}`).value)
        // Baseado em json => object["property"] = value; ou object.property = value;
    }
    console.log(campos)
    console.log(registro_obtido)
    console.log(fetch_config_cadastrar)
    await fetch(`http://${ip_back}:3000/${fetch_config_cadastrar}`, {
        method: "POST",
        body: JSON.stringify(registro_obtido),
        headers: {
            'Content-Type': 'application/json'
          },
        mode: 'cors'
    });
    
}

async function atualizar(id, campos, fetch_config_atualizar, escolha){
    var registro_obtido = {}
    
    for(let cont=0; cont < campos.length; cont++){
        registro_obtido[campos[cont]] = (document.querySelector(`#update_${campos[cont]}_${id}`).value)
    }
    console.log(registro_obtido)
    await fetch(`http://${ip_back}:3000/${fetch_config_atualizar}/${id}`, {
        method: "PUT",
        body: JSON.stringify(registro_obtido),
        headers: {
            'Content-Type': 'application/json'
          },
        mode: 'cors'
    });
    fechar_lista(id)
    switch(escolha){
        case 1:
            document.querySelector(`#btn_aluno_mostrar`).click()
            break;
        case 2:
            document.querySelector(`#btn_advogado_mostrar`).click()
            break;
        case 3:
            document.querySelector(`#btn_cliente_mostrar`).click()
            break;
        case 4:
            document.querySelector(`#btn_responsavel_mostrar`).click()
            break;
    }
}

async function deletar(id, fetch_config_deletar, escolha){
    /*
    console.log(id)
    await fetch(`http://${ip_back}:3000/responsavel/delete/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
          },
        mode: 'cors'
    });
    */
    await fetch(`http://${ip_back}:3000/${fetch_config_deletar}/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
          },
        mode: 'cors'
    });

    fechar_lista(id)
    switch(escolha){
        case 1:
            document.querySelector(`#btn_aluno_mostrar`).click()
            break;
        case 2:
            document.querySelector(`#btn_advogado_mostrar`).click()
            break;
        case 3:
            document.querySelector(`#btn_cliente_mostrar`).click()
            break;
        case 4:
            document.querySelector(`#btn_responsavel_mostrar`).click()
            break;
    }
    
}