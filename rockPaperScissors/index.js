/** game variables */
let userChoice, pcChoice = ''
let round = 0
let userScore = 0
let pcScore = 0

const choicesArray = ['rock', 'paper', 'scissors']

/** DOM Elements */
const choices = document.querySelectorAll('.imageContainer')
let userViewScore = document.querySelector('.user .number')
let pcViewScore = document.querySelector('.pc .number')
let roundView = document.querySelector('.round .number')
const button = document.querySelector('button')
const endGame = document.querySelector('.end-game-container')
const text = endGame.querySelector('p')


button.addEventListener('click', () => {
    if(!endGame.classList.contains('hidden')){
        endGame.classList.add('hidden')
        round = 0
        userScore = 0
        pcScore = 0
        pcViewScore.innerHTML = 0
        userViewScore.innerHTML = 0
        roundView.innerHTML = 0
    }
})

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        userChoice = choice.dataset.choice
        pcChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)]
        round += 1
        roundView.innerHTML = round
        incrementScore(userChoice, pcChoice)
        match()
        console.log(`User: ${userChoice} Score: ${userScore}\n Pc: ${pcChoice} Score: ${pcScore}`)
    })
})

function incrementScore(userChoice, pcChoice){
    if(userChoice == 'paper' && pcChoice == 'rock'){
        userScore += 1
    }else if(userChoice == 'scissors' && pcChoice == 'paper'){
        userScore += 1
    }else if(userChoice == 'rock' && pcChoice == 'scissors'){
        userScore += 1
    }else if(userChoice == 'paper' && pcChoice == 'paper'){
        userScore += 1
        pcScore += 1
    }else if(userChoice == 'scissors' && pcChoice == 'scissors'){
        pcScore += 1
        userScore += 1
    }else if(userChoice == 'rock' && pcChoice == 'rock'){
        pcScore += 1
        userScore += 1
    }else{
        pcScore += 1
    }
    pcViewScore.innerHTML = pcScore
    userViewScore.innerHTML = userScore
}

function match(){
    if(round == 5){
        endGame.classList.remove('hidden')
        if(userScore > pcScore){
            text.innerHTML = 'Bravo! Vous avez gagner.'
        }else if(userScore < pcScore){
            text.innerHTML = 'Dommage! Vous avez perdu.'
        }else{
            text.innerHTML = 'Vous avez fini le match à égalité'
        }
    }

}