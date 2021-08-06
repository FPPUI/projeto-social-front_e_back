var cadastro_aluno = `
    <div class="popup_cabeça">
        <div class="popup_titulo">Cadastrar Novo Aluno</div>
        <button data-close_popup class="close_popup" onclick="fechar()">&times;</button>
    </div>

    <div class="content_popup">
            <textarea type="text" class="cadastrar_matricula" name="matricula" placeholder="Matrícula"></textarea>
            <textarea type="text" class="cadastrar_nome" name="nome" placeholder="Nome Completo"></textarea>
            <textarea type="text" class="cadastrar_cpf_responsavel" name="cpf_responsavel" placeholder="Cpf do Responsável"></textarea>
            <textarea type="text" class="cadastrar_nome_responsavel" name="nome_responsavel" placeholder="Nome do Responsável"></textarea>
            <textarea type="text" class="cadastrar_endereco" name="endereco" placeholder="Endereço"></textarea>
            <textarea type="text" class="cadastrar_nacionalidade" name="nacionalidade" placeholder="Nacionalidade"></textarea>
            <textarea type="text" class="cadastrar_estado" name="estado" placeholder="Estados"></textarea>
            <textarea type="text" class="cadastrar_cidade" name="cidade" placeholder="Cidade"></textarea>
            <textarea type="date" class="cadastrar_nascimento" name="nascimento" placeholder="Nascimento"></textarea>
            <textarea type="text" class="cadastrar_sexo" name="sexo" placeholder="Gênero"></textarea>
            <textarea type="text" class="cadastrar_nis" name="nis" placeholder="Número do NIS"></textarea>
            <label for="vacina">Cartão de Vacina</label>
            <select class="cadastrar_vacina" name="vacina">
                <option value="Tem">Tem</option>
                <option value="Não Tem">Não Tem</option>
            </select>
            <label for="vacina">Bolsa Familia</label>
            <select class="cadastrar_bolsa_familia" name="bolsa_familia">
                <option value="Tem">Tem</option>
                <option value="Não Tem">Não Tem</option>
            </select>
            <input type="text" class="cadastrar_obs" name="obs" placeholder="Observações">

            <input type="button" onclick="cadastrar(
                ['matricula', 'nome', 'cpf_responsavel', 'nome_responsavel', 'endereco', 'nacionalidade', 'estado', 'cidade', 'nascimento', 'sexo', 'nis', 'vacina', 'bolsa_familia', 'obs'],
                'aluno/create'
            )" value="Cadastrar">
        
    </div>
    `

var cadastro_advogado = `
    <div class="popup_cabeça">
        <div class="popup_titulo">Cadastrar Novo Advogado</div>
            <button data-close_popup class="close_popup" onclick="fechar()">&times;</button>
        </div>

    <div class="content_popup">
            <textarea class="cadastrar_registro_oab" name="registro_oab" placeholder="Registro Oab"></textarea>
            <textarea class="cadastrar_nome" name="nome" placeholder="Nome Completo"></textarea>
            <textarea class="cadastrar_endereco" name="endereco" placeholder="Endereco Completo"></textarea>
            <textarea class="cadastrar_telefone" name="telefone" placeholder="Telefone"></textarea>
            <textarea class="cadastrar_email" name="email" placeholder="Email"></textarea>
            
            <input type="button" onclick="cadastrar(
                ['registro_oab', 'nome', 'endereco', 'telefone', 'email'],
                'advogado/create'
            )" value="Cadastrar">
    </div>
`
var cadastro_cliente = `
    <div class="popup_cabeça">
        <div class="popup_titulo">Cadastrar Novo Cliente</div>
            <button data-close_popup class="close_popup" onclick="fechar()">&times;</button>
        </div>

    <div class="content_popup">
        <textarea class="cadastrar_registro_oab" name="registro_oab" placeholder="OAB do Advogado"></textarea>
        <textarea class="cadastrar_nome" name="nome" placeholder="Nome Completo"></textarea>
        <textarea class="cadastrar_endereco" name="endereco" placeholder="Endereço"></textarea>
        <textarea class="cadastrar_cpf" name="cpf" placeholder="CPF"></textarea>
        <textarea class="cadastrar_rg" name="rg" placeholder="RG"></textarea>
        <textarea class="cadastrar_telefone" name="telefone" placeholder="Telefone"></textarea>
        <textarea class="cadastrar_numero_processo" name="" placeholder="Número do Processo"></textarea>
        <textarea class="cadastrar_vara_criminal" name="vara_criminal" placeholder="Vara Criminal"></textarea>
        <input type="date" class="cadastrar_data_ajuizamento" name="data_ajuizamento" placeholder="Data de Ajuizamento">
        <textarea class="cadastrar_informacoes_adicionais" name="informacoes_adicionais" placeholder="Informações Adicionais"></textarea>

        <input type="button" onclick="cadastrar(
            ['registro_oab', 'nome', 'endereco', 'cpf', 'rg', 'telefone', 'numero_processo', 'vara_criminal', 'data_ajuizamento', 'informacoes_adicionais'],
            'cliente/create'
        )" value="Cadastrar">
    
</div>
`

var cadastro_responsavel = `
    <div class="popup_cabeça">
        <div class="popup_titulo">Cadastrar Novo Responsavel</div>
            <button data-close_popup class="close_popup" onclick="fechar()">&times;</button>
        </div>

    <div class="content_popup">
        
        <textarea class="cadastrar_nome" name="nome" placeholder="Nome Completo"></textarea>
        <textarea class="cadastrar_endereco" name="endereco" placeholder="Endereço"></textarea>
        <textarea class="cadastrar_telefone" name="telefone" placeholder="Telefone"></textarea>
        <textarea class="cadastrar_cpf" name="cpf" placeholder="CPF"></textarea>
        <textarea class="cadastrar_rg" name="rg" placeholder="RG"></textarea>
        <textarea class="cadastrar_nacionalidade" name="nacionalidade" placeholder="Nacionalidade"></textarea>
        <textarea class="cadastrar_estado" name="estado" placeholder="Estados"></textarea>
        <textarea class="cadastrar_cidade" name="cidade" placeholder="Cidade"></textarea>
        <input type="date" class="cadastrar_nascimento" name="nascimento" placeholder="Nascimento">
        <textarea class="cadastrar_trabalho_local" name="trabalho_local" placeholder="Trabalho Local"></textarea>
        <textarea class="cadastrar_dados_extras" name="dados_extras" placeholder="Dados Extras"></textarea>
       
        <input type="button" onclick="cadastrar(
            ['nome', 'endereco', 'telefone', 'cpf', 'rg', 'nacionalidade', 'estado', 'cidade', 'nascimento', 'trabalho_local', 'dados_extras'],
            'responsavel/create'
        )" value="Cadastrar">
    
</div>
`