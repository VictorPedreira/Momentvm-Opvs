const informationsFabio = document.getElementById("ButtonFabio")
const informationsMatheus = document.getElementById("ButtonMatheus")
const informationsVictor = document.getElementById("ButtonVictor")
const backdropElement = document.getElementById("backdrop")
const exitButton = document.getElementById("exitVictor")

const overlayVictor = document.getElementById("infoV")
const overlayMatheus = document.getElementById("infoM")
const overlayFabio = document.getElementById("infoF")

informationsVictor.addEventListener("click", openoverlayVictor)
exitButton.addEventListener("click", closeoverlayVictor)
backdropElement.addEventListener("click", closeoverlayVictor)



console.log(exitButton)