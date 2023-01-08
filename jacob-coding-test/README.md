GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

<!-- <step-1> write out questions -->

<!-- <step-2> write out 3 options for each question -->

<step-3> add javascript to interact with q&a

<step-4> add javascript to set a timer

<step-5> add css to make it look correct

<!-- console.log(questions);

function clickStart (){
    startDiv.style.display = "none";
    questions.style.display = "block";
    current = questions[0]
}
// function nextQuestion(){
//     for (let i = 0; i< questions.length; i++) {
        
//     }
    // add an index to current

console.log('hello')
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
        elem = timeLeft + ' seconds remaining';
        timeLeft--;
    }
} -->