
function responsavel_mostrar(sponsors){
    let linhas = ''
    zerar_popup_lista()
    console.log(sponsors)
    for(let sponsor of sponsors){
        var auxiliar
        if(sponsor.nascimento != undefined && sponsor.data_ajuizamento != undefined){
            registro_obtido[campos[cont]] = (document.querySelector(`.cadastrar_${campos[cont]}`).value)
            } else if(sponsor.nascimento != undefined){
                auxiliar = sponsor.nascimento
                auxiliar = auxiliar.split(" ")
                console.log(auxiliar)
                sponsor.nascimento = auxiliar[0]
            } else if(sponsor.data_ajuizamento != undefined){
                auxiliar = sponsor.data_ajuizamento
                auxiliar = auxiliar.split(" ")
                console.log(auxiliar)
                sponsor.data_ajuizamento = auxiliar[0]
            }
        console.log(sponsor.nascimento)
        linhas += `
        <tr>
            <td>${sponsor.cpf}</td>
            <td>${sponsor.nome}</td>
            <td>${sponsor.telefone}</td>
            <td>${sponsor.estado}</td>
            <td>${sponsor.cidade}</td>
            <td><input type="button" onclick="abrir_lista(${sponsor.id})" value="Mais Informações"></button></td>
        </tr>
        `

        var popup_lista_responsavel = `
        <div class="popup" id="popup_lista_${sponsor.id}">
            <div class="popup_cabeça">
                <div class="popup_titulo">Informações Adicionais</div>
                <button data-close_popup class="close_popup" onclick="fechar_lista(${sponsor.id})">&times;</button>
            </div>

            <div class="content_popup">
                <div class="update_div">
                <label>Nome</label>
                <textarea class="input_dados" id="update_nome_${sponsor.id}" value="${sponsor.nome}">${sponsor.nome}</textarea>
                <label>Endereço</label>
                <textarea class="input_dados" id="update_endereco_${sponsor.id}" value="${sponsor.endereco}">${sponsor.endereco}</textarea>
                <label>Telefone</label>
                <textarea class="input_dados" id="update_telefone_${sponsor.id}" value="${sponsor.telefone}">${sponsor.telefone}</textarea>
                <label>CPF</label>
                <textarea class="input_dados" id="update_cpf_${sponsor.id}" value="${sponsor.cpf}">${sponsor.cpf}</textarea>
                <label>RG</label>
                <textarea class="input_dados" id="update_rg_${sponsor.id}" value="${sponsor.rg}">${sponsor.rg}</textarea>
                <label>Nacionalidade</label>
                <textarea class="input_dados" id="update_nacionalidade_${sponsor.id}" value="${sponsor.nacionalidade}">${sponsor.nacionalidade}</textarea>
                
                <label>Estado</label>
                <textarea class="input_dados" id="update_estado_${sponsor.id}" value="${sponsor.estado}">${sponsor.estado}</textarea>
                </div>
                <div class="update_div" id="update_div_2">
                <label>Cidade</label>
                <textarea class="input_dados" id="update_cidade_${sponsor.id}" value="${sponsor.cidade}">${sponsor.cidade}</textarea>
                
                <label>Nascimento</label>
                <input type="date" class="input_dados" id="update_nascimento_${sponsor.id}" value="${sponsor.nascimento}">
                <label>Local de Trabalho</label>
                <textarea class="input_dados" id="update_trabalho_local_${sponsor.id}" value="${sponsor.trabalho_local}">${sponsor.trabalho_local}</textarea>
                <label>Dados Extras</label>
                <textarea class="input_dados" id="update_dados_extras_${sponsor.id}" value="${sponsor.dados_extras}">${sponsor.dados_extras}</textarea>
                
                <input type="button" onclick="atualizar(
                    ${sponsor.id},
                    ['nome', 'endereco', 'telefone', 'cpf', 'rg', 'nacionalidade', 'estado', 'cidade', 'nascimento', 'trabalho_local', 'dados_extras'],
                    'responsavel/edit',
                    4
                    )" value="Atualizar"></button>
                <input type="button" onclick="deletar(${sponsor.id}, 'responsavel/delete', 4)" value="Deletar"></button>
                </div>
            </div>
        </div>
        `
        carregar_popup_lista(popup_lista_responsavel)
        
    }
    
    let colunas = `
        <tr>
            <th>CPF</th>
            <th>Nome</th> 
            <th>Telefone</th>
            <th>Estado</th>
            <th>Cidade</th>
            <th>TODOS OS DADOS</th>
        </tr>
    `
    document.querySelector('.tabela').innerHTML = colunas + linhas
}