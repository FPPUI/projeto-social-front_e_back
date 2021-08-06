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



function abrir_lista(identificador){
    const overlay_lista = document.getElementById('overlay_lista')
    const popup_lista = document.getElementById(`popup_lista_${identificador}`)
    popup_lista.classList.add('active')
    overlay_lista.classList.add('active')
    console.log("ASAFWSFA")
}

function fechar_lista(identificador){
    const overlay_lista = document.getElementById('overlay_lista')
    const popup_lista = document.getElementById(`popup_lista_${identificador}`)
    popup_lista.classList.remove('active')
    overlay_lista.classList.remove('active')
    console.log("aaaA")
}



