// var for the start button
var start = document.getElementById("start");
// var for current question
var currentQuestion = 0
// an array of objects for the questions
var quizQuestions = [
    {question: "What does CSS do?",
    answers: {
        1: "a",
        2: "b",
        3: "c",
    },
    correctAnswer: "2" },

    {question: "What does CSS do?",
    answers: {
        1: "a",
        2: "b",
        3: "c",
    },
    correctAnswer: "3" },

    {question: "What does CSS do?",
    answers: {
        1: "a",
        2: "b",
        3: "c",
    },
    correctAnswer: "3" },

    {question: "What does CSS do?",
    answers: {
        1: "a",
        2: "b",
        3: "c",
    },
    correctAnswer: "2" },
];
console.log(quizQuestions[0]);
// oncclick start game function
// function to begin the quiz
start.addEventListener("click", function beginQuiz(){
    // remove the start button when the quiz has begun
    $("button").remove();
    // create new div and add to the body for the question
    var questionBox = $("<body>").append($("<div>"));
   
    $(questionBox).addClass("card", "rounded", "bg-info");
    // getting question and appending new div 
    var questionTitle = $("<div>").text(quizQuestions[0].question);
    $(questionBox).append(questionTitle);

    // generate answers and buttons from object
    // click event for answer, alert right or wrong using if else
        // generate next question if right and add point
        // if wrong reduce time
    // save final score to local storage


});

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
