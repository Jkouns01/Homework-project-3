//Start
var questions = [
    {
        question: "What is a variable?",
        options: ["Containers for storing data", "Are placeholders", "A number used in math"],
        answer:"Containers for storing data"   
    },
    {
        question:"What is not a variable type?",
        options:["String", "Line", "Number"],
        answer:"Line",
    },
    {
        question: "What is an array?",
        options: ["Store multiple values in one variable", "Same as a method","Used to create a list"],  
        answer: "Store multiple values in one variable "
    },
    {
        question: "How does JavaScript interact with HTML?",
        options: ["It doesn't interact","It adds coloring to HTML", "Enhances the pages capabilities"],
        answer: "Enhances the pages capabilities"
    }
]
var currentQuestion = questions[0];
console.log(questions)


function clickStart (){
    startDiv.style.display = "none";
    questions.style.display = "flex";
    current = questions[0]
}
function nextQuestion(){
    // add an index to current

}

var startDiv = document.getElementById("start");
var startButton = document.getElementById("start-button");

startButton.addEventListener("click", clickStart)


var timeLeft = 30;
var elem = document.getElementById('BodyQuestions');
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
       //elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}
// Save score
// timer code
// need to figure out how to show only one question at a time. once answered it will direct you to the next answer//
// if answer is correct, add 2 points. else wrong, add 0 points //
// track every correct answer and save it in local with name option
