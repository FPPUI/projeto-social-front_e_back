//import {cadastro_aluno, cadastro_advogado, cadastro_clientes, cadastro_responsavel} from './suport';
//import * as cadastros from './suport';

function carregar_popup_cadastro(escolha){
    /*
    *   1- alunos
    *   2- responsáveis
    *   3- advogados
    *   4- clientes
    */
    switch(escolha){
        case 1:
            console.log(escolha)
            document.querySelector('.popup').innerHTML = cadastro_aluno;
            break;
        case 2:
            document.querySelector('.popup').innerHTML = cadastro_advogado;
            console.log(escolha)
            break;
        case 3:
            document.querySelector('.popup').innerHTML = cadastro_cliente;
            console.log(escolha)
            break;
        case 4:
            document.querySelector('.popup').innerHTML = cadastro_responsavel;
            console.log(escolha)

    }
}

function carregar_popup_lista(dados_listado){
    /*
    *   1- alunos
    *   2- responsáveis
    *   3- advogados
    *   4- clientes
    */
    document.querySelector('#popup_lista').innerHTML += dados_listado;
    /*
    switch(escolha){
        case 1:
            console.log(escolha)
            document.querySelector(`.popup_aluno_${identificador}`).innerHTML = dados_listado;
            break;
        case 2:
            document.querySelector(`.popup_resp_${identificador}`).innerHTML = dados_listado;
            console.log(escolha)
            break;
        case 3:
            document.querySelector(`.popup_advogados_${identificador}`).innerHTML = dados_listado;
            console.log(escolha)
            break;
        case 4:
            document.querySelector(`.popup_clientes_${identificador}`).innerHTML = dados_listado;
            console.log(escolha)
    }
    */
}

function zerar_popup_lista(){
    document.querySelector('#popup_lista').innerHTML = '';
    
}