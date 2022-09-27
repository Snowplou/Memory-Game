let possibleColors = ["red", "blue", "orange", "green"]
let chosenColors = []
let userColors = []

function startGame(){
    document.getElementById("page1").style.display = "none"
    document.getElementById("page2").style.display = "block"

    chosenColors.push(possibleColors[Math.floor(Math.random() * possibleColors.length)])

    chosenColors.push(possibleColors[Math.floor(Math.random() * possibleColors.length)])
    chosenColors.push(possibleColors[Math.floor(Math.random() * possibleColors.length)])


    let time = 1000

    setTimeout(() => {

        for(let item in chosenColors){
            setTimeout(() => {

                console.log(chosenColors[item])

                document.getElementById(chosenColors[item]).style.backgroundColor = "pink"

                setTimeout(() => {
                    document.getElementById(chosenColors[item]).style.backgroundColor = chosenColors[item]
                }, time)

            }, time * item)
        }

    }, 1000)

}