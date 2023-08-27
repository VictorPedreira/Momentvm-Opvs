var isvisible = false

//Victor
function openoverlayVictor(){
    backdropElement.style.display = "block"
    overlayVictor.style.display = "block"
}

function closeoverlayVictor(event) {
    event.preventDefault()
    backdropElement.style.display = "none"
    overlayVictor.style.display = "none"   
}

//Matheus
function openoverlayMatheus(){
    backdropElement.style.display = "block"
    overlayMatheus.style.display = "block"
}

function closeoverlayMatheus() {
    backdropElement.style.display = "none"
    overlayMatheus.style.display = "none"
}

//Fabio
function openoverlayFabio(){
    backdropElement.style.display = "block"
    overlayFabio.style.display = "block"
}

function closeoverlayFabio() {
    backdropElement.style.display = "none"
    overlayFabio.style.display = "none"
}

//redes
function openRedes() {
    console.log(redes)
    if (isvisible == true){
    redes.style.display = "none"
    }
    else {
        redes.style.display = "block"
    }
    isvisible = !isvisible
}
