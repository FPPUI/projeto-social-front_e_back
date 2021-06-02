async function advogadoshowall(){
    try {
        const response = await fetch(`http://${ip_back}:3000/advogado/showall`)
        const data = await response.json()
        
        document.querySelector('.titulo_pag').innerHTML = "Consulta de Advogados"
        document.querySelector('.matricula').placeholder = "Registro OAB"

        tipo_input = 2
        document.querySelector('.input').value = ""
        document.querySelector('.matricula').value = ""

        advogado_mostrar(data.lawer)

    } catch (error) {
        console.log(error)
    }
}

function advogado_mostrar(lawers){
    
    let linhas = ''
    for(let lawer of lawers){
        linhas += `
        <tr>
            <td>${lawer.registro_oab}</td>
            <td>${lawer.nome}</td>
            <td>${lawer.endereco}</td>
            <td>${lawer.telefone}</td>
            <td>${lawer.email}</td>
        </tr>
        `
    }
    let colunas = `
        <tr>
            <th>Registro OAB</th>
            <th>Nome</th> 
            <th>Endereço</th>
            <th>Telefone</th>
            <th>Email</th>
        </tr>
    `
    document.querySelector('.tabela').innerHTML = colunas + linhas
}