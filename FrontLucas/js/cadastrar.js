var ip_back = "localhost"
function abrir(){
    const overlay = document.getElementById('overlay')
    const popup = document.getElementById('popup')
    popup.classList.add('active')
    overlay.classList.add('active')
    console.log("ASAFWSFA")
}

function fechar(){
    const overlay = document.getElementById('overlay')
    const popup = document.getElementById('popup')
    popup.classList.remove('active')
    overlay.classList.remove('active')
    console.log("aaaA")
}

async function cadastrar_aluno(){

    let campos = ['matricula', 'nome', 'endereco', 'nacionalidade', 'estado', 'cidade', 'nascimento', 'sexo']
    var registro_obtido = []

    for(let cont=0; cont < 8; cont++){
        registro_obtido[cont] = (document.querySelector(`.cadastrar_${campos[cont]}`).value)
    }

    
    await fetch(`http://${ip_back}:3000/aluno/create`, {
        method: "POST",
        body: JSON.stringify({
            "matricula": registro_obtido[0],
            "nome": registro_obtido[1],
            "endereco": registro_obtido[2],
            "nacionalidade": registro_obtido[3],
            "estado": registro_obtido[4],
            "cidade": registro_obtido[5],
            "nascimento": registro_obtido[6],
            "sexo": registro_obtido[7],
            "obs": "Observation"
           }),
        headers: {
            'Content-Type': 'application/json'
          },
        mode: 'cors'
    });
}

