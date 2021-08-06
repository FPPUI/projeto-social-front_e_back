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

        carregar_popup(3)

        cliente_mostrar(data.client, data_advogado.lawer)

    } catch (error) {
        console.log(error)
    }
}

function cliente_mostrar(clients){
    let linhas = ''
    zerar_popup_lista()

    for(let client of clients){
        
        linhas += `
        <tr>
            <td>${client.numero_processo}</td>
            <td>${client.nome}</td>
            <td>${client.telefone}</td>
            <td>${client.vara_criminal}</td>
            <td><input type="date" value="${client.data_ajuizamento}" disabled></td>
            <td><input type="button" onclick="abrir_lista(${client.id})" value="Mais Informações"></button></td>
        </tr>
        `
        var popup_lista_cliente = `
        <div class="popup" id="popup_lista_${client.id}">
            <div class="popup_cabeça">
                <div class="popup_titulo">Informações Adicionais</div>
                <button data-close_popup class="close_popup" onclick="fechar_lista(${client.id})">&times;</button>
            </div>

            <div class="content_popup">
                <textarea class="input_dados" id="update_registro_oab_${client.id}" value="${client.registro_oab}">${client.registro_oab}</textarea>
                <textarea class="input_dados" id="update_nome_${client.id}" value="${client.nome}">${client.nome}</textarea>
                <textarea class="input_dados" id="update_endereco_${client.id}" value="${client.endereco}">${client.endereco}</textarea>
                <textarea class="input_dados" id="update_cpf_${client.id}" value="${client.cpf}">${client.cpf}</textarea>
                <textarea class="input_dados" id="update_rg_${client.id}" value="${client.rg}">${client.rg}</textarea>
                <textarea class="input_dados" id="update_telefone_${client.id}" value="${client.telefone}">${client.telefone}</textarea>
                <textarea class="input_dados" id="update_email_${client.id}" value="${client.email}">${client.email}</textarea>
                <textarea class="input_dados" id="update_numero_processo_${client.id}" value="${client.numero_processo}">${client.numero_processo}</textarea>
                <textarea class="input_dados" id="update_vara_criminal_${client.id}" value="${client.vara_criminal}">${client.vara_criminal}</textarea>
                <input type="date" class="input_dados" id="update_data_ajuizamento_${client.id}" value="${client.data_ajuizamento}">
                <textarea class="input_dados" id="update_informacoes_adicionais_${client.id}" value="${client.informacoes_adicionais}">${client.informacoes_adicionais}</textarea>
                <input type="button" onclick="atualizar(
                    ${client.id},
                    ['registro_oab', 'nome', 'endereco', 'cpf', 'rg', 'telefone', 'numero_processo', 'vara_criminal', 'data_ajuizamento', 'informacoes_adicionais'],
                    'cliente/edit',
                    3
                    )" value="Atualizar"></button>
                <input type="button" onclick="deletar(${client.id}, 'cliente/delete', 3)" value="Deletar"></button>
            </div>
        </div>
        `
        carregar_popup_lista(popup_lista_cliente)

    }// Número de processo NÃO PODE SER OBRIGATÓRIO (só recebe um tempo depois)
    let colunas = `
        <tr>
            <th>Número do Processo</th>
            <th>Nome do Cliente</th>
            <th>Telefone</th>
            <th>Vara</th>
            <th>Data de Ajuizamento</th>
            <th>TODOS OS DADOS</th>

        </tr>
    `
    document.querySelector('.tabela').innerHTML = colunas + linhas
}