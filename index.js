let possibleColors = ["red", "blue", "yellow", "green"]
let chosenColors = []
let userColors = []

function startGame(){
    document.getElementById("page1").style.display = "none"
    document.getElementById("page2").style.display = "block"

    for(let i = 0; i < 10; i++){
    chosenColors.push(possibleColors[Math.floor(Math.random() * possibleColors.length)])
    }
    console.log(chosenColors)
}