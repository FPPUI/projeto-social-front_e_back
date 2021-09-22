//import { carregar_popup } from "../pages/carry";

var registro_obtido = {}
var escolha_tudo;

async function showall(fetch_config_listar, pesquisa_titulo_pag, pesquisa_matricula, escolha){
    try {
        const response = await fetch(`http://${ip_back}:${port}/${fetch_config_listar}`) // aluno/showall
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
       escolha_tudo = escolha;
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


async function cadastrar(escolha, campos, fetch_config_cadastrar){
    var registro_obtido = {}
    var auxiliar;
    for(let cont=0; cont < campos.length; cont++){
        if(campos[cont] != 'nascimento' && campos[cont] != 'data_ajuizamento'){
        registro_obtido[campos[cont]] = (document.querySelector(`.cadastrar_${campos[cont]}`).value)
        } else {
            auxiliar = (document.querySelector(`.cadastrar_${campos[cont]}`).value)
            auxiliar = auxiliar.split(" ")
            console.log(auxiliar)
            registro_obtido[campos[cont]] = auxiliar[0]
        }


        // Baseado em json => object["property"] = value; ou object.property = value;
        console.log(registro_obtido)
    }
    console.log(campos)
    console.log(registro_obtido)
    console.log(fetch_config_cadastrar)
    
    var validation=1;
    var campos_obrig = []
    for(let cont=0; cont<campos.length;cont++){
        if(
            (registro_obtido[campos[cont]] == "" || 
            registro_obtido[campos[cont]] == undefined) && 
            campos[cont] != "obs" &&
            campos[cont] != "numero_processo" &&
            campos[cont] != "vara_criminal" &&
            campos[cont] != "data_ajuizamento" &&
            campos[cont] != "informacoes_adicionais" &&
            campos[cont] != "trabalho_local" &&
            campos[cont] != "dados_extras" 
        ){
            validation=0;
            campos_obrig.push(campos[cont])
        }
            

    }
    if(validation == 1){
        await fetch(`http://${ip_back}:${port}/${fetch_config_cadastrar}`, {
            method: "POST",
            body: JSON.stringify(registro_obtido),
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        });

        fechar()
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

    } else {
        let text = "";
        for(let cont=0; cont<campos.length;cont++){
            if(campos_obrig[cont] != undefined){
                text += campos_obrig[cont] + "\n";
            }
        }
        alert("Alguns campos estão vazios. Campos Obrigatórios Vazios: \n" + text)
    }
}

async function atualizar(id, campos, fetch_config_atualizar, escolha){
    var registro_obtido = {}
    
    for(let cont=0; cont < campos.length; cont++){
        registro_obtido[campos[cont]] = (document.querySelector(`#update_${campos[cont]}_${id}`).value)
    }
    console.log(registro_obtido)

    var validation=1;
    var campos_obrig = []
    for(let cont=0; cont<campos.length;cont++){
        if(
            (registro_obtido[campos[cont]] == "" || 
            registro_obtido[campos[cont]] == undefined) && 
            campos[cont] != "obs" &&
            campos[cont] != "numero_processo" &&
            campos[cont] != "vara_criminal" &&
            campos[cont] != "data_ajuizamento" &&
            campos[cont] != "informacoes_adicionais" &&
            campos[cont] != "trabalho_local" &&
            campos[cont] != "dados_extras" 
        ){
            validation=0;
            campos_obrig.push(campos[cont])
        }
    }


    if(validation == 1){
    await fetch(`http://${ip_back}:${port}/${fetch_config_atualizar}/${id}`, {
        method: "PUT",
        body: JSON.stringify(registro_obtido),
        headers: {
            'Content-Type': 'application/json'
          },
        mode: 'cors'
    });
    console.log(registro_obtido)
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
    
    } else {
        let text = "";
        for(let cont=0; cont<campos.length;cont++){
            if(campos_obrig[cont] != undefined){
                text += campos_obrig[cont] + "\n";
            }
        }
        alert("Alguns campos estão vazios. Campos Obrigatórios Vazios: \n" + text)
    }

}

async function deletar(id, fetch_config_deletar, escolha){
    /*
    console.log(id)
    await fetch(`http://${ip_back}:${port}/responsavel/delete/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
          },
        mode: 'cors'
    });
    */
    await fetch(`http://${ip_back}:${port}/${fetch_config_deletar}/${id}`, {
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