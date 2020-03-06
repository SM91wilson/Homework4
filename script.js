// an array of objects for the questions
var quizQuestions = [
    {question: "What does CSS stand for?",
    answers: ["computer super style", "cascading style sheet", "DJ Khaled"],
    correctAnswer: 2 
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
    correctAnswer: 2 
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

// function to generate questions
function generateQuestion(){
    start.remove();
    let q = quizQuestions[currentQuestion];
    var questionBox = document.createElement("div");
    questionBox.innerHTML = "<p>" + q.question + "</p>";
    $(questionBox).appendTo(questionContainer);
    for( var i = 0; i < q.answers.length; i++){
        var answerBtns = document.createElement("button");
        answerBtns.innerHTML = "<p>" + q.answers[i] + "</p>";
        $(answerBtns).appendTo(questionContainer);

    } ;  
};

function beginQuiz(){

}

   

    // generate answers and buttons from object
    // click event for answer, alert right or wrong using if else
        // generate next question if right and add point
        // if wrong reduce time
    // save final score to local storage
start.addEventListener("click", generateQuestion);



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

