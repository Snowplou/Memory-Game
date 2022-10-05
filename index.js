let possibleColors = ["red", "blue", "orange", "green"]
let chosenColors = []
let userColors = []
let showingColors = false
let score = 0
let highScore = localStorage.getItem("highScore")

if(highScore == null){
    highScore = 0
}

document.getElementById("highScore").innerHTML = "<i><u>High Score</i></u><br>" + highScore

function displayColors(){

}

function turn(color) {
    if (showingColors) return
    userColors.push(color)
    if(userColors[userColors.length - 1] != chosenColors[userColors.length - 1]){
        document.getElementById("page2").style.display = "none"
        document.getElementById("page3").style.display = "block"
        if(score > highScore){
            localStorage.setItem("highScore", score)
            highScore = score;
        }
        document.getElementById("finalScore").innerHTML = "Score: " + score
        document.getElementById("finalHighScore").innerHTML = "High Score: " + highScore
    }
    else if(userColors.length == chosenColors.length){
        score++
        document.getElementById("score").innerHTML = "<i><u>Score</i></u><br>" + score
        console.log("new turn")
    }
    else{
        score++
        document.getElementById("score").innerHTML = "<i><u>Score</i></u><br>" + score
    }
}

function red() {
    turn("red")
}

function blue() {
    turn("blue")
}

function orange() {
    turn("orange")
}

function green() {
    turn("green")
}

function startGame() {
    document.getElementById("page1").style.display = "none"
    document.getElementById("page2").style.display = "block"

    showingColors = true

    chosenColors.push(possibleColors[Math.floor(Math.random() * possibleColors.length)])

    chosenColors.push(possibleColors[Math.floor(Math.random() * possibleColors.length)])
    chosenColors.push(possibleColors[Math.floor(Math.random() * possibleColors.length)])

    // let time = 1500
    let time = 500

    setTimeout(() => {

        for (let i = 0; i < possibleColors.length; i++) {
            document.getElementById(possibleColors[i]).classList.remove("hoverAbility")
        }

        for (let item in chosenColors) {
            setTimeout(() => {

                console.log(chosenColors[item])

                document.getElementById(chosenColors[item]).style.backgroundColor = "pink"

                setTimeout(() => {
                    document.getElementById(chosenColors[item]).style.backgroundColor = chosenColors[item]
                }, time * 0.5)

            }, time * item)
        }

    }, 1000)

    setTimeout(() => {
        for (let i = 0; i < possibleColors.length; i++) {
            document.getElementById(possibleColors[i]).classList.add("hoverAbility")
        }
        showingColors = false
    }, (chosenColors.length * time) + (time * 0.5))

}