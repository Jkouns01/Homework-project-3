//Start
var questions = [
    {
        question: "What is a variable?",
        optionA: "Containers for storing data",
        optionB: "Are placeholders",
        optionC: "A number used in math",
        correctOption: "optionA"
    },

    {
        question: "What is not a variable type?",
        optionA: "String",
        optionB: "Line",
        optionC: "Number",
        correctOption: "optionB"
    },

    {
        question:"What is an array?",
        optionA:"Store multiple values in one variable",
        optionB: "Same as a method",
        optionC:"Used to create a list",
        correctOption: "optionA"
    },

    {
        question:"How does JavaScript interact with HTML?",
        optionA:"It doesn't interact",
        optionB:"It adds coloring to HTML",
        optionC:"Enhances the pages capabilities",
        correctOption: "optionC"
    }
]

function clickStart (){
    startDiv.style.display = "none";
    question1.style.display = "block";
}
function nextQuestion(){
    
}
var startDiv = document.getElementById("start");
var startButton = document.getElementById("start-button");
var question1 = document.getElementById("questionOne");
var question2 = document.getElementById("questionTwo");
startButton.addEventListener("click", clickStart)

btn.addEventListener('click', function(){
    counter++;
    display.innertext = questions[counter]
})

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

