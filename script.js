// an array of objects for the questions
var quizQuestions = [
    {question: "What does CSS stand for?",
    answers: ["computer super style", "cascading style sheet", "DJ Khaled"],
    correctAnswer: 1 
    },

    {question: "What does CSS do?",
    answers: ["a", "b", "c"],
    correctAnswer: 2 
    },

    {question: "What does CSS do?",
    answers: ["a", "b", "c"],
    correctAnswer: 2 
    },

    {question: "What does CSS do?",
    answers: ["a", "b", "c"],
    correctAnswer: 0 
    },
];

// var for the start button
var start = document.getElementById("start");
var body = document.getElementsByTagName("body");
var questionContainer = document.getElementsByClassName("questionContainer");
// var for the last question in the quiz
var finalQuestion = (quizQuestions.length)-1;
// var for current question
let currentQuestion = 0;
let score = 0;
let timeLeft = 41;


// function to generate questions
function generateQuestion(){
    // var to set the current question according to the object
    let q = quizQuestions[currentQuestion];
    var questionBox = document.createElement("div");
    // adds the text content of the current question
    questionBox.innerHTML = "<p>" + q.question + "</p>";
    $(questionBox).appendTo(questionContainer);
    // loops through the answers, creating a button for each and adding the text content from the array
    for( var i = 0; i < q.answers.length; i++){
        var answerBtns = document.createElement("button");
        // set attribute to try get the index of the answer from the array // doesnt work yet
        answerBtns.setAttribute("index", q.answers[i]);
        answerBtns.innerHTML = q.answers[i];
        $(answerBtns).appendTo(questionContainer);
  
   

    } ; $(".container").on("click", function(){
        console.log(q.answers[i]);
    } );
};

// function to generate the timer
function generateTimer() {
    // create element for timer to be in
    var qtimer = document.createElement("h2");
    $(qtimer).appendTo(body);
    // function to reduce time
    var timerInterval = setInterval(function() {
      timeLeft--;
      qtimer.textContent = timeLeft + " seconds left.";

        // if time is less than or equal to zero, quiz stops
      if(timeLeft <= 0) {
        clearInterval(timerInterval);
        $(questionContainer).empty();
        qtimer.textContent = "Time's Up!"
        }
    }, 1000);
  }

function checkAnswer(){

}


function beginQuiz(){
    start.remove();
    generateQuestion();
    // generateTimer();
};

    // save final score to local storage
start.addEventListener("click", beginQuiz);



// function to show score\
function showScore(){};
// form to input initials
// load score and display results




// could do answers as array so each object only has 3 things insted of object inside object
// when game starts show question from object, define current question index (starting at 0)
    // generate html from data and add click events for answers
        // use createElement method or jquery to create the divs and buttons in the html. (remember to append)
        // can use bootstrap cards (look at bootstrap cards, have header and body), can put Q in header and A's in body
        // use textContent or text() in jquery and the relevant index from question object
        // questions.answers.forEach(function(answer, answerIndex)){
            // var answerbtn = document.createElement("button"); can change button class in bootstrap
            // answerbtn.setAttribute("data-answer-index", answerIndex);
            // answerbtn.textContent = answer; <<<<from object again, display block for answeres to get them vertically instead of inline
            // questionBox.appendChild(answerbtn); <<<<<<basic code to make question with answers 
        // }

        // function has to generate the question AND the space where the question goes
        // function generateQuestion(questionNumber) <<<replace question number with index of question
        // quizQuestions.forEach(function(question, questionIndex){
            // generateQuestion(currentQuestion)
        // })
        
        // create current question var, use to generate next Q when answered
        // can use jquery .empty() to empty div

