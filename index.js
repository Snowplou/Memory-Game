let possibleColors = ["red", "blue", "orange", "green"]
let chosenColors = []
let userColors = []

function red(){
    console.log("red was clicked")
}

function blue(){
    console.log("blue was clicked")
}

function orange(){
    console.log("orange was clicked")
}

function green(){
    console.log("green was clicked")
}

function startGame(){
    document.getElementById("page1").style.display = "none"
    document.getElementById("page2").style.display = "block"

    chosenColors.push(possibleColors[Math.floor(Math.random() * possibleColors.length)])

    let time = 1000

    setTimeout(() => {

        for(let i = 0; i < possibleColors.length; i++){
            document.getElementById(possibleColors[i]).classList.remove("hoverAbility")
        }

        for(let item in chosenColors){
            setTimeout(() => {

                console.log(chosenColors[item])

                document.getElementById(chosenColors[item]).style.backgroundColor = "pink"

                setTimeout(() => {
                    document.getElementById(chosenColors[item]).style.backgroundColor = chosenColors[item]
                }, time)

            }, time * item)
        }

        for(let i = 0; i < possibleColors.length; i++){
            document.getElementById(possibleColors[i]).classList.add("hoverAbility")
        }

    }, 1000)

}