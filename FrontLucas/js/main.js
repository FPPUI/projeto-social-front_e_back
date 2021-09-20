var tipo_input;
var ip_back = "localhost" //"26.202.5.175"
var port = 5000
/*
var formData = $("form.cadast").serializeObject();
console.log(formData);*/


async function exportar(){
    console.log(escolha_tudo)
    switch(escolha_tudo){
        case 1:
            var response = await fetch(`http://${ip_back}:${port}/export_student`) 
            
            break;
        case 2:
            var response = await fetch(`http://${ip_back}:${port}/export_lawer`) 
            
            break;
        case 3:
            var response = await fetch(`http://${ip_back}:${port}/export_client`) 
            
            break;
        case 4:
            var response = await fetch(`http://${ip_back}:${port}/export_sponsor`) 

            break;
    }
    //const response = await fetch(`http://${ip_back}:${port}/exportar`) 
    
    
    
    //document.querySelector('.titulo_pag').innerHTML = "Consulta de Alunos"

}


async function filtrar_aluno(nome){
    const response = await fetch(`http://${ip_back}:${port}/aluno/getbyname/${nome}`) 
    const data = await response.json()
    
    
    //document.querySelector('.titulo_pag').innerHTML = "Consulta de Alunos"
    aluno_mostrar(data.student)
}

async function filtrar_advogado(nome){

    const response = await fetch(`http://${ip_back}:${port}/advogado/getbyname/${nome}`) 
    const data = await response.json()
    //document.querySelector('.titulo_pag').innerHTML = "Consulta de Advogados"
    advogado_mostrar(data.lawer)
}

async function filtrar_cliente(nome){

    const response = await fetch(`http://${ip_back}:${port}/cliente/getbyname/${nome}`) 
    //const response_advogado = await fetch(`http://${ip_back}:${port}/advogado/showall`)
    const data = await response.json()
    //const data_advogado = await response_advogado.json()


    //document.querySelector('.titulo_pag').innerHTML = "Consulta de Clientes Jurídicos"
    cliente_mostrar(data.client) //, data_advogado.lawer
}

async function filtrar_resp(nome){

    const response = await fetch(`http://${ip_back}:${port}/responsavel/getbyname/${nome}`) 
    //const response_aluno = await fetch(`http://${ip_back}:${port}/aluno/showall`)
    const data = await response.json()
    //const data_aluno = await response_aluno.json()

    //document.querySelector('.titulo_pag').innerHTML = "Consulta de Responsáveis dos Alunos"
    responsavel_mostrar(data.sponsor) //, data_aluno.student
}

//------------------------------------------------------------------------------------------//

async function filtrar_aluno_matricula(nome){

    const response = await fetch(`http://${ip_back}:${port}/aluno/getbymatricula/${nome}`) 
    const data = await response.json()

    //document.querySelector('.matricula').placeholder = "Matrícula"
    //document.querySelector('.titulo_pag').innerHTML = "Consulta de Alunos"
    aluno_mostrar(data.student)
}

async function filtrar_advogado_matricula(nome){

    const response = await fetch(`http://${ip_back}:${port}/advogado/getbyoab/${nome}`) 
    const data = await response.json()
    //document.querySelector('.matricula').placeholder = "Registro OAB"
    //document.querySelector('.titulo_pag').innerHTML = "Consulta de Advogados"
    advogado_mostrar(data.lawer)
}

async function filtrar_cliente_matricula(nome){

    const response = await fetch(`http://${ip_back}:${port}/cliente/getbyprocesso/${nome}`) 
    //const response_advogado = await fetch(`http://${ip_back}:${port}/advogado/showall`)
    const data = await response.json()
    //const data_advogado = await response_advogado.json()
    //document.querySelector('.matricula').placeholder = "Número do Processo"
    //document.querySelector('.titulo_pag').innerHTML = "Consulta de Clientes Jurídicos"
    cliente_mostrar(data.client) //, data_advogado.lawer
}

async function filtrar_resp_matricula(nome){

    //const response = await fetch(`http://${ip_back}:${port}/aluno/getbymatricula/${nome}`)
    const response_resp = await fetch(`http://${ip_back}:${port}/responsavel/getbycpf/${nome}`)
    //const data = await response.json()
    const data_resp = await response_resp.json()

    //document.querySelector('.matricula').placeholder = "Matrícula"
    //document.querySelector('.titulo_pag').innerHTML = "Consulta de Responsáveis dos Alunosaaaaaa"
    responsavel_mostrar(data_resp.sponsor) //, data.student, nome
}

let timer = null

function soltar_tecla(evento){
    clearTimeout(timer)

    timer = setTimeout(() => {
        var conteudo_input = evento.target.value
        if (conteudo_input == ""){
            conteudo_input = "*"
        }

        if(conteudo_input != "*"){
            document.querySelector(`.matricula`).disabled = true
        } else {
            document.querySelector(`.matricula`).disabled = false
        }
        

        if(tipo_input == 1){
            filtrar_aluno(conteudo_input)
        }else if(tipo_input == 2){
            filtrar_advogado(conteudo_input)
        }else if(tipo_input == 3){
            filtrar_cliente(conteudo_input)
        }else if(tipo_input == 4){
            filtrar_resp(conteudo_input)
        }
        
    }, 0);
}

function soltar_matricula(evento){
    clearTimeout(timer)

    timer = setTimeout(() => {
        var conteudo_input = evento.target.value
        if (conteudo_input == ""){
            conteudo_input = "*"
        }

        if(conteudo_input != "*"){
            document.querySelector(`.input`).disabled = true
        } else {
            document.querySelector(`.input`).disabled = false
        }

        if(tipo_input == 1){
            filtrar_aluno_matricula(conteudo_input)
        }else if(tipo_input == 2){
            filtrar_advogado_matricula(conteudo_input)
        }else if(tipo_input == 3){
            filtrar_cliente_matricula(conteudo_input)
        }else if(tipo_input == 4){
            filtrar_resp_matricula(conteudo_input)
        }
        
    }, 0);
}

document.querySelector(".input").addEventListener("keyup", soltar_tecla)
document.querySelector(".matricula").addEventListener("keyup", soltar_matricula)

/*
function formatar_data(data){
    if(data == null || data == undefined){
        return "Nulo" 
    }else{
        var dt = new Date(data);
        var nascimento = dt.toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });// Erro nas datas 30/?? ou 01/??, descendo um dia EM TODAS, ARRUME OU MORRA
        return nascimento;
    }
}

function formatar_data(data){
    if(data == null || data == undefined){
        return "Nulo" 
    }else{
        var dt = new Date(data);
        console.log(data)
        console.log(dt)
        var dia = (dt.getDate() + 1)
        var mes = (dt.getMonth() + 1)

        if(dia < 10){
            dia = "0" + dia
        }

        if(mes < 10){
            mes = "0" + mes
        }// MAN N TA FUNCIONANDO QUANDO TEM UM MES DE 30, DAI ADD 1, VAI PRA 31 E N PRA O MES SEGUINTE,AAAAAA, É ISSO

        var ano = dt.getFullYear()
        var nascimento = (ano + "-" + mes + "-" + dia)
        console.log(nascimento)
        /*var nascimento = dt.toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });*****
        // Erro nas datas 30/?? ou 01/??, descendo um dia EM TODAS, ARRUME OU MORRA
        
        console.log(nascimento)
        return nascimento;
    }
}
*/


