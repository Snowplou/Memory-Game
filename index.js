let possibleColors = ["red", "blue", "yellow", "green"]
let chosenColors = []
let userColors = []

function startGame(){
    document.getElementById("page1").style.display = "none"
    document.getElementById("page2").style.display = "block"

    chosenColors.push(possibleColors[Math.floor(Math.random() * possibleColors.length)])

    setTimeout(() => {
        for(let item in chosenColors){
            document.getElementById(chosenColors[item]).style.backgroundColor = "pink"
        }
    }, 3000)

}