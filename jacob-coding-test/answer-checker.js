//Start

var questions = [
    {
        statement: "What is a variable?",
        options: ["Containers for storing data", "Are placeholders", "A number used in math"],
        answer:"Containers for storing data"   
    },
    {
        statement:"What is not a variable type?",
        options:["String", "Line", "Number"],
        answer:"Line",
    },
    {
        statement: "What is an array?",
        options: ["Store multiple values in one variable", "Same as a method","Used to create a list"],  
        answer: "Store multiple values in one variable "
    },
    {
        statement: "How does JavaScript interact with HTML?",
        options: ["It doesn't interact","It adds coloring to HTML", "Enhances the pages capabilities"],
        answer: "Enhances the pages capabilities"
    }
]
function startGame(){


var correctAnswers = ['string'];
var userAnswers = [];
var currentQuestion = questions[0];
var qeustionsPage = document.getElementById('first-page');
var scoreScreen = document.getElementById('score-modal');
var questionScreen = document.getElementById('question-page');
scoreScreen.style.display = 'none';
function clickStart (){
    startDiv.style.display = "none";
    current = questions[0]
    countdown();
}
function nextQuestion(){
    // add an index to current

}

var button1 = document.getElementById('answer-button-1');
var button2 = document.getElementById('answer-button-2');
var button3 = document.getElementById('answer-button-3');

button1.innerHTML = questions[0]['options'][0];
button3.innerHTML = questions[0]['options'][1];
button2.innerHTML = questions[0]['options'][2];

button1.innerHTML = questions[1]['options'][0];
button3.innerHTML = questions[1]['options'][1];
button2.innerHTML = questions[1]['options'][2];

button1.innerHTML = questions[2]['options'][0];
button3.innerHTML = questions[2]['options'][1];
button2.innerHTML = questions[2]['options'][2];

button1.innerHTML = questions[3]['options'][0];
button3.innerHTML = questions[3]['options'][1];
button2.innerHTML = questions[3]['options'][2];


button1.addEventListener('click', nextQuestion);

var startDiv = document.getElementById("start");



var timeLeft = 60;
var elem = document.getElementById('questionBody');
var timerId = setInterval(countdown, 1000);

function countdown() {
    while(timeLeft >= 0) {
        timeLeft -= 1;
    }
    qeustionsPage.style.display = "none";
    scoreScreen.style.display = "block";
    questionScreen.style.display = "none";
}
}
function startQuiz(){
    displayQuestions()
}
function displayQuestions(){
    console.log('hello world')
   var questionEl =  document.querySelector('.question');
   questionEl.textContent = questions[0].statement
   //display available answers (multiple answers = for loop)
   // create next question function that alerts user right or wrong answer and pulls up next question
   //add event listener and classes to questions
}
// write a line that can add the class back
var startButton = document.getElementById("start-button");
startButton.addEventListener("click", startQuiz);
//var completedQuiz = document.getElementById("score-modal").classList.remove('remove-display')