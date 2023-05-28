
let computerNumber
let userNumbers = []
let attempts = 0
let maxguesses = 10


function newGame() {
    window.location.reload()
}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers
    
    if (attempts < maxguesses) {        

        if (userNumber > 100) {
            document.getElementById('textOutput').innerHTML = '\u{1F6AB}Number Invalid! Digit a number between 1 - 100...'
            document.getElementById('inputBox').value = ''
            //attempts++ (se eu quiser que o número de tentativas seja crescente...) 
            maxguesses--
            document.getElementById('attempts').innerHTML = maxguesses//attempts
        }
        else if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is too High!'
            document.getElementById('inputBox').value = ''
            //attempts++
            maxguesses--
            document.getElementById('attempts').innerHTML = maxguesses//attempts
        }
        else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is too Low!'
            document.getElementById('inputBox').value = ''
            //attempts++
            maxguesses--
            document.getElementById('attempts').innerHTML = maxguesses//attempts
        }        
        else {
            document.getElementById('textOutput').innerHTML = 'Congratulations!! YOU WON!!! \u{1F913} \u{1F973}'
            document.body.style.background = 'white'
            document.getElementById('main').style.background = 'black'
            document.getElementById('main').style.color = 'white'
            document.getElementById('inputBox').style.color = 'white'
            //attempts++
            maxguesses--
            document.getElementById('attempts').innerHTML = maxguesses//attempts
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        }
    }
    else {
            document.getElementById('textOutput').innerHTML = '\u{1F635} You Losed!! The computer number was: ' + computerNumber
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
            document.getElementById('inputBox').style.background = 'red'
    }
}