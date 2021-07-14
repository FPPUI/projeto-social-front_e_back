var cadastro_aluno = `
    <div class="popup_cabeça">
        <div class="popup_titulo">Cadastrar Novo Aluno</div>
        <button data-close_popup class="close_popup" onclick="fechar()">&times;</button>
    </div>

    <div class="content_popup">
        <form method="POST" enctype="application/json" class="cadast" onsubmit="cadastrar()">
            <input type="text" class="cadastrar_matricula" name="matricula" placeholder="aaaaaMatrícula">
            <input type="text" class="cadastrar_nome" name="nome" placeholder="Nome Completo">
            <input type="text" class="cadastrar_endereco" name="" placeholder="Endereço">
            <input type="text" class="cadastrar_nacionalidade" name="" placeholder="Nacionalidade">
            <input type="text" class="cadastrar_estado" name="" placeholder="Estados">
            <input type="text" class="cadastrar_cidade" name="" placeholder="Cidade">
            <input type="text" class="cadastrar_nascimento" name="" placeholder="Nascimento">
            <input type="text" class="cadastrar_sexo" name="" placeholder="Gênero">

            <input type="button" onclick="cadastrar_aluno()" value="Cadastrar">
        </form>
    </div>
    `

var cadastro_advogado = `
    <div class="popup_cabeça">
        <div class="popup_titulo">Cadastrar Novo Advogado</div>
            <button data-close_popup class="close_popup" onclick="fechar()">&times;</button>
        </div>

    <div class="content_popup">
        <form method="POST" enctype="application/json" class="cadast" onsubmit="cadastrar()">
        <input type="text" class="cadastrar_matricula" name="matricula" placeholder="aaaaaMatrícula">
        <input type="text" class="cadastrar_nome" name="nome" placeholder="Nome Completo">
        <input type="text" class="cadastrar_endereco" name="" placeholder="Endereço">
        <input type="text" class="cadastrar_nacionalidade" name="" placeholder="Nacionalidade">
        <input type="text" class="cadastrar_estado" name="" placeholder="Estados">
        <input type="text" class="cadastrar_cidade" name="" placeholder="Cidade">
        <input type="text" class="cadastrar_nascimento" name="" placeholder="Nascimento">
        <input type="text" class="cadastrar_sexo" name="" placeholder="Gênero">

        <input type="button" onclick="cadastrar()" value="Cadastrar">
    </form>
</div>
`
var cadastro_cliente = `
    <div class="popup_cabeça">
        <div class="popup_titulo">Cadastrar Novo Cliente</div>
            <button data-close_popup class="close_popup" onclick="fechar()">&times;</button>
        </div>

    <div class="content_popup">
        <form method="POST" enctype="application/json" class="cadast" onsubmit="cadastrar()">
        <input type="text" class="cadastrar_matricula" name="matricula" placeholder="aaaaaMatrícula">
        <input type="text" class="cadastrar_nome" name="nome" placeholder="Nome Completo">
        <input type="text" class="cadastrar_endereco" name="" placeholder="Endereço">
        <input type="text" class="cadastrar_nacionalidade" name="" placeholder="Nacionalidade">
        <input type="text" class="cadastrar_estado" name="" placeholder="Estados">
        <input type="text" class="cadastrar_cidade" name="" placeholder="Cidade">
        <input type="text" class="cadastrar_nascimento" name="" placeholder="Nascimento">
        <input type="text" class="cadastrar_sexo" name="" placeholder="Gênero">

        <input type="button" onclick="cadastrar()" value="Cadastrar">
    </form>
</div>
`

var cadastro_responsavel = `
    <div class="popup_cabeça">
        <div class="popup_titulo">Cadastrar Novo Responsavel</div>
            <button data-close_popup class="close_popup" onclick="fechar()">&times;</button>
        </div>

    <div class="content_popup">
        <form method="POST" enctype="application/json" class="cadast" onsubmit="cadastrar()">
        <input type="text" class="cadastrar_matricula" name="matricula" placeholder="aaaaaMatrícula">
        <input type="text" class="cadastrar_nome" name="nome" placeholder="Nome Completo">
        <input type="text" class="cadastrar_endereco" name="" placeholder="Endereço">
        <input type="text" class="cadastrar_nacionalidade" name="" placeholder="Nacionalidade">
        <input type="text" class="cadastrar_estado" name="" placeholder="Estados">
        <input type="text" class="cadastrar_cidade" name="" placeholder="Cidade">
        <input type="text" class="cadastrar_nascimento" name="" placeholder="Nascimento">
        <input type="text" class="cadastrar_sexo" name="" placeholder="Gênero">

        <input type="button" onclick="cadastrar()" value="Cadastrar">
    </form>
</div>
`