async function clienteshowall(){
    try {
        const response = await fetch(`http://${ip_back}:3000/cliente/showall`)
        const response_advogado = await fetch(`http://${ip_back}:3000/advogado/showall`)
        const data = await response.json()
        const data_advogado = await response_advogado.json()

        document.querySelector('.matricula').placeholder = "Número do Processo"
        document.querySelector('.titulo_pag').innerHTML = "Consulta de Clientes Jurídicos"

        tipo_input = 3
        document.querySelector('.input').value = ""
        document.querySelector('.matricula').value = ""

        cliente_mostrar(data.client, data_advogado.lawer)

    } catch (error) {
        console.log(error)
    }
}

function cliente_mostrar(clients, lawers){

    let linhas = ''
    for(let client of clients){
        let registro_oab = ''
        for(let lawer of lawers){
            if(client.advogado_id == lawer.id){
                registro_oab = lawer.registro_oab
            }
        }
        linhas += `
        <tr>
            <td>${registro_oab}</td>
            <td>${client.numero_processo}</td> 
            <td>${client.nome}</td>
            <td>${client.endereco}</td>
            <td>${client.cpf}</td>
            <td>${client.rg}</td>
            <td>${client.telefone}</td>
            <td>${client.vara_criminal}</td>
            <td>${formatar_data(client.data_acusacao)}</td>
            <td>${client.informacoes_adicionais}</td>
        </tr>
        `
    }// Número de processo NÃO PODE SER OBRIGATÓRIO (só recebe um tempo depois)
    let colunas = `
        <tr>
            <th>OAB do Advogado</th>
            <th>Número do Processo</th>
            <th>Nome do Cliente</th>
            <th>Endereço</th> 
            <th>CPF</th>
            <th>RG</th>
            <th>Telefone</th>
            <th>Vara</th>
            <th>Data de Ajuizamento</th>
            <th>Email do Cliente</th>
        </tr>
    `
    document.querySelector('.tabela').innerHTML = colunas + linhas
}