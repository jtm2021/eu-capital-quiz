const welcomeArea = document.getElementById('welcome-area')
const startButton = document.getElementById('start-button')
const gameArea= document.getElementById('game-area')
const scoreBox = document.getElementById('score-box')

// Game Questions
const questions = [
    {question: 'What is the capital of Albania?',
        answers: [{text:'Tirana', correct:true},{text:'London', correct:false},{text:'Dublin', correct:false},{text:'Baku', correct:false}]
    },
    {question: 'What is the capital of Andorra?',
        answers: [{text:'Yereven', correct:false},{text:'Tallin', correct:false},{text:'Minsk', correct:false},{text:'Andorra la Vella', correct:true}]
    },
    {question: 'What is the capital of Estonia?',
        answers: [{text:'Sarajevo', correct:false},{text:'Pristina', correct:false},{text:'Tallin', correct:true},{text:'Tbilisi', correct:false}]
    },
    {question: 'What is the capital of Latvia?',
        answers: [{text:'Riga', correct:true},{text:'Oslo', correct:false},{text:'Ankara', correct:false},{text:'Belgrade', correct:false}]
    },
    {question: 'What is the capital of Azerbaijan?',
        answers: [{text:'Baku', correct:true},{text:'Brusells', correct:false},{text:'Vilnius', correct:false},{text:'Rome', correct:false}]
    },
    {question: 'What is the capital of Belarus?',
        answers: [{text:'Budapest', correct:false},{text:'Minsk', correct:true},{text:'Helsinki', correct:false},{text:'Paris', correct:false}]
    },
    {question: 'What is the capital of Germany?',
        answers: [{text:'Valletta', correct:false},{text:'Pristina', correct:false},{text:'Berlin', correct:true},{text:'Athens', correct:false}]
    },
    {question: 'What is the capital of Italy?',
        answers: [{text:'Rome', correct:true},{text:'Chisinau', correct:false},{text:'Podgorica', correct:false},{text:'Monaco', correct:false}]
    },
    {question: 'What is the capital of Luxembourg?',
        answers: [{text:'Tirana', correct:false},{text:'London', correct:false},{text:'Dublin', correct:false},{text:'Luxembourg', correct:true}]
    },
    {question: 'What is the capital of Malta?',
        answers: [{text:'Sarajevo', correct:false},{text:'Prague', correct:false},{text:'Vaduz', correct:false},{text:'Valletta', correct:true}]
    },
    {question: 'What is the capital of Slovenia?',
        answers: [{text:'Stockholm', correct:false},{text:'Bern', correct:false},{text:'Ljubljana', correct:true},{text:'Vatican', correct:false}]
    },
    {question: 'What is the capital of Slovakia?',
        answers: [{text:'Bratislava', correct:true},{text:'Ankara', correct:false},{text:'Kyiv', correct:false},{text:'San Marino', correct:false}]
    }
]

// Score Status
let score = 0

//Game Functions

let currentQuestionIndex = 0

startButton.addEventListener('click', startGame)

function startGame() {
    welcomeArea.style.display = 'none'
    gameArea.style.display = 'block'
    scoreBox.style.display = 'block'
}

