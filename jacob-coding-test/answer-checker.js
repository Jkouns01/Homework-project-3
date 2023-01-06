//Start

var questions = [question1, question2, question3, question4]
var currentQuestion = questions[0]
var question1 = document.getElementById("questionOne");    
question1.innerHTML = `<h1>Question One: What is a variable? </h1>
<button id="block-1" class="correct">Containers for storing data</button>
<button id="block-2" class="wrong">Are placeholders</button>
<button id="block-3" class="wrong">A number used in math</button>`
var question2 = document.getElementById("questionTwo");
var question3 = document.getElementById("questionThree");
var question4 = document.getElementById("questionFour");
var nextButton = document.getElementById("nextButton");
nextButton.addEventListener('click', nextQuestion)
// clicking start initiation
function clickStart (){
    startDiv.style.display = "none";
    question1.style.display = "block";
    current = questions[0]
}
function nextQuestion(){
    // add an index to current
}

var startDiv = document.getElementById("start");
var startButton = document.getElementById("start-button");

startButton.addEventListener("click", clickStart)

// btn.addEventListener('click', function(){
//     display.innertext = questions[0]
// })

var timeLeft = 30;
var elem = document.getElementById('BodyQuestions');
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

// timer code
// need to figure out how to show only one question at a time. once answered it will direct you to the next answer//
// if answer is correct, add 2 points. else wrong, add 0 points //
// track every correct answer and save it in local with name option

// option to organize questions
// var newQuestions = ['whats is a variable?', 'What is not a variable type?', "What is an array?", "How does JavaScript interact with HTML?" ]

// var options = ['Containers for storing data','Are placeholders', 'A number used in math', 'String', 'Line', 'Number','Store multiple values in one variable', 'Same as a method', 'Used to create a list', "It doesn't interact", "It adds coloring to HTML", "Enhances the pages capabilities"]
