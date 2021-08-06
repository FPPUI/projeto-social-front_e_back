
function responsavel_mostrar(sponsors){
    let linhas = ''
    zerar_popup_lista()
    console.log(sponsors)
    for(let sponsor of sponsors){


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
                <textarea class="input_dados" id="update_nome_${sponsor.id}" value="${sponsor.nome}">${sponsor.nome}</textarea>
                <textarea class="input_dados" id="update_endereco_${sponsor.id}" value="${sponsor.endereco}">${sponsor.endereco}</textarea>
                <textarea class="input_dados" id="update_telefone_${sponsor.id}" value="${sponsor.telefone}">${sponsor.telefone}</textarea>
                <textarea class="input_dados" id="update_cpf_${sponsor.id}" value="${sponsor.cpf}">${sponsor.cpf}</textarea>
                <textarea class="input_dados" id="update_rg_${sponsor.id}" value="${sponsor.rg}">${sponsor.rg}</textarea>
                <textarea class="input_dados" id="update_nacionalidade_${sponsor.id}" value="${sponsor.nacionalidade}">${sponsor.nacionalidade}</textarea>
                <textarea class="input_dados" id="update_estado_${sponsor.id}" value="${sponsor.estado}">${sponsor.estado}</textarea>
                <textarea class="input_dados" id="update_cidade_${sponsor.id}" value="${sponsor.cidade}">${sponsor.cidade}</textarea>
                <textarea class="input_dados" id="update_nascimento_${sponsor.id}" value="${sponsor.nascimento}">${sponsor.nascimento}</textarea>
                <textarea class="input_dados" id="update_trabalho_local_${sponsor.id}" value="${sponsor.trabalho_local}">${sponsor.trabalho_local}</textarea>
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