const welcomeArea = document.getElementById('welcome-area')
const startButton = document.getElementById('start-button')
const gameArea= document.getElementById('game-area')
const scoreBox = document.getElementById('score-box')
const questionElement = document.getElementById('actualquestion')
const answerElement = document.getElementById('answers-button')
const nextButton = document.getElementById('next-btn')
const resetButton = document.getElementById('reset-btn')
const currentScore = document.getElementById('score')


let shuffledQuestions, currentQuestionIndex
let score = 0

// Game Questions
const questions = [
    {question: 'What is the capital of Romania?',
        answers: [{text:'Bucharest', correct:true},{text:'Bern', correct:false},{text:'Dublin', correct:false},{text:'Baku', correct:false}]
    },
    {question: 'What is the capital of Spain?',
        answers: [{text:'Yereven', correct:false},{text:'Tallin', correct:false},{text:'Minsk', correct:false},{text:'Madrid', correct:true}]
    },
    {question: 'What is the capital of Estonia?',
        answers: [{text:'Sarajevo', correct:false},{text:'Pristina', correct:false},{text:'Tallin', correct:true},{text:'Tbilisi', correct:false}]
    },
    {question: 'What is the capital of Latvia?',
        answers: [{text:'Riga', correct:true},{text:'Oslo', correct:false},{text:'Ankara', correct:false},{text:'Belgrade', correct:false}]
    },
    {question: 'What is the capital of Croatia?',
        answers: [{text:'Zagreb', correct:true},{text:'Brusells', correct:false},{text:'Vilnius', correct:false},{text:'Rome', correct:false}]
    },
    {question: 'What is the capital of Cyprus?',
        answers: [{text:'Budapest', correct:false},{text:'Nicosia', correct:true},{text:'Helsinki', correct:false},{text:'Paris', correct:false}]
    },
    {question: 'What is the capital of Germany?',
        answers: [{text:'Pristina', correct:false},{text:'Podgorica', correct:false},{text:'Berlin', correct:true},{text:'Athens', correct:false}]
    },
    {question: 'What is the capital of Italy?',
        answers: [{text:'Rome', correct:true},{text:'Chisinau', correct:false},{text:'Podgorica', correct:false},{text:'Monaco', correct:false}]
    },
    {question: 'What is the capital of Luxembourg?',
        answers: [{text:'Tirana', correct:false},{text:'London', correct:false},{text:'Dublin', correct:false},{text:'Luxembourg', correct:true}]
    },
    {question: 'What is the capital of Malta?',
        answers: [{text:'Andorra', correct:false},{text:'Prague', correct:false},{text:'Vaduz', correct:false},{text:'Valletta', correct:true}]
    },
    {question: 'What is the capital of Slovenia?',
        answers: [{text:'Stockholm', correct:false},{text:'Bern', correct:false},{text:'Ljubljana', correct:true},{text:'Sarajevo', correct:false}]
    },
    {question: 'What is the capital of Slovakia?',
        answers: [{text:'Bratislava', correct:true},{text:'Ankara', correct:false},{text:'Athens', correct:false},{text:'Sofia', correct:false}]
    },
    {question: 'What is the capital of Czech Republic?',
        answers: [{text:'Berlin', correct:false},{text:'Yereven', correct:false},{text:'Kyiv', correct:false},{text:'Prague', correct:true}]
    },
    {question: 'What is the capital of Austria?',
        answers: [{text:'Sarajevo', correct:false},{text:'Nicosia', correct:false},{text:'Vienna', correct:true},{text:'Sofia', correct:false}]
    },
    {question: 'What is the capital of Belgium?',
        answers: [{text:'Helsinki', correct:false},{text:'Brussels', correct:true},{text:'Prague', correct:false},{text:'Tirana', correct:false}]
    },
    {question: 'What is the capital of Denmark?',
        answers: [{text:'Copenhagen', correct:true},{text:'Budapest', correct:false},{text:'Paris', correct:false},{text:'Reykjavik', correct:false}]
    },
    {question: 'What is the capital of Bulgaria?',
    answers: [{text:'Tbilisi', correct:false},{text:'Vilnius', correct:false},{text:'Sofia', correct:true},{text:'Dublin', correct:false}]
    },
    {question: 'What is the capital of Sweden?',
        answers: [{text:'Stockholm', correct:true},{text:'Prague', correct:false},{text:'Minsk', correct:false},{text:'Monaco', correct:false}]
    },
    {question: 'What is the capital of Lithuania?',
        answers: [{text:'Valletta', correct:false},{text:'Vilnius', correct:true},{text:'Andorra', correct:false},{text:'Budapest', correct:false}]
    },
    {question: 'What is the capital of Netherlands?',
        answers: [{text:'Athens', correct:false},{text:'Rome', correct:false},{text:'Lisbon', correct:false},{text:'Amsterdam', correct:true}]
    },
    {question: 'What is the capital of Finland?',
        answers: [{text:'Helsinki', correct:true},{text:'Ankara', correct:false},{text:'Kyiv', correct:false},{text:'Stockholm', correct:false}]
    },
    {question: 'What is the capital of France?',
    answers: [{text:'Paris', correct:true},{text:'Sofia', correct:false},{text:'Belgrade', correct:false},{text:'Warsaw', correct:false}]
    },
    {question: 'What is the capital of Greece?',
        answers: [{text:'Yereven', correct:false},{text:'Podgorica', correct:false},{text:'Athens', correct:true},{text:'Tallin', correct:false}]
    },
    {question: 'What is the capital of Hungary?',
        answers: [{text:'Budapest', correct:true},{text:'Bucharest', correct:false},{text:'Copenhagen', correct:false},{text:'Brussels', correct:false}]
    },
    {question: 'What is the capital of Ireland?',
        answers: [{text:'Stokholm', correct:false},{text:'Dublin', correct:true},{text:'Ljubljana', correct:false},{text:'Vienna', correct:false}]
    },
    {question: 'What is the capital of Poland?',
        answers: [{text:'Lisbon', correct:false},{text:'Warsaw', correct:true},{text:'Kosovo', correct:false},{text:'Estonia', correct:false}]
    },
    {question: 'What is the capital of Portugal?',
    answers: [{text:'Lisbon', correct:true},{text:'Estonia', correct:false},{text:'Bulgaria', correct:false},{text:'Kosovo', correct:false}]
    } 
]

startButton.addEventListener('click', startGame)
resetButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    nextButton.disabled = true
    launchNextQuestion()
})

function startGame () {
    resetButton.classList.remove('show')
    nextButton.classList.remove('hidebtn')
    welcomeArea.style.display = 'none'
    gameArea.style.display = 'grid'
    scoreBox.style.display = 'block'
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    launchNextQuestion()
}

function launchNextQuestion() {
    resetState()
    if (currentQuestionIndex === questions.length) {
        resetButton.classList.add('show')
        nextButton.classList.add('hidebtn')
        questionElement.innerText = `Congratulations! You've completed the test with a score of ${score}`
    } else {
        showQuestion(shuffledQuestions[currentQuestionIndex])
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', checkAnswer)
        answerElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild)
    }
}


function checkAnswer(e) {
    nextButton.disabled = false
    const answerButtons = document.querySelectorAll(".btn")
    answerButtons.forEach((btn)=> btn.disabled = true)

    const selectedButton = e.target
    const correct = selectedButton.dataset.correct

    if(correct) score++
    setStatusClass(document.body, correct)
    Array.from(answerElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        
        element.classList.add('correct')
        renderScore()
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function renderScore() {
    currentScore.innerHTML = score
}