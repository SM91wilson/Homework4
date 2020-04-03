// an array of objects for the questions
var quizQuestions = [
    {
        question: "What does CSS stand for?",
        answers: ["computer super style", "cascading style sheet", "DJ Khaled"],
        correctAnswer: "cascading style sheet"
    },

    {
        question: "What does CSS do?",
        answers: ["a", "b", "c"],
        correctAnswer: "b"
    },

    {
        question: "AAAAAWhat does CSS do?",
        answers: ["a", "b", "c"],
        correctAnswer: "b"
    },

    {
        question: "WHHHHHhat does CSS do?",
        answers: ["a", "b", "c"],
        correctAnswer: "c"
    },
];

// var for the start button
var start = document.getElementById("start");
var body = document.getElementsByTagName("body");
var questionContainer = document.getElementsByClassName("questionContainer");
// var for the last question in the quiz
var finalQuestion = (quizQuestions.length) - 1;
// var for current question
var currentQuestion = 0;
let score = 0;
var qtimer = document.getElementById("qtimer")
var timeLeft = 41;
let q = quizQuestions[currentQuestion];

// function to generate questions
function generateQuestion() {
    // var to set the current question according to the object
    var questionBox = document.createElement("DIV");
    // adds the text content of the current question
    questionBox.innerHTML = "<p>" + q.question + "</p>";
    $(questionBox).appendTo(questionContainer);
    // loops through the answers, creating a button for each and adding the text content from the array
    q.answers.forEach((answer, answerIndex) => {
        var answerBtns = document.createElement("BUTTON");
        // set attribute to try get the index of the answer from the array
        answerBtns.setAttribute("index", answerIndex);
        answerBtns.classList.add("d-flex", "flex-column");
        answerBtns.innerHTML = answer;
        $(answerBtns).appendTo(questionContainer);

    });
    // event listener to identify which button is being clicked
    $("button").on("click", checkAnswer)
    //  console.log(this.textContent);
};

// function for next question
function generateNextQuestion() {
    if (currentQuestion < finalQuestion) {
        currentQuestion++;
        q = quizQuestions[currentQuestion];
        console.log(currentQuestion)
        console.log(finalQuestion)
        generateQuestion();
    }
};

// function to generate the timer
function generateTimer() {
    // function to reduce time
    var timerInterval = setInterval(function () {
        timeLeft--;
        qtimer.textContent = timeLeft + " seconds left.";
        // if time is less than or equal to zero, quiz stops
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            $(questionContainer).empty();
            qtimer.textContent = "Time's Up!"
        }
    }, 1000);
    if (currentQuestion === finalQuestion) {
        $(qtimer).empty();
    }
}

function scoreBoard() {
    var scoreBox = document.getElementById("scoreBox");
    scoreBox.innerHTML = "score:" + score;
    $(scoreBox).appendTo(body);
}

function checkAnswer() {
    if (currentQuestion === finalQuestion) {
        end();
        return
    } else if (this.textContent === q.correctAnswer) {
        if (currentQuestion < finalQuestion) {
            $(scoreBox).empty();
            $(questionContainer).empty();
            generateNextQuestion();
        }
        score++;
        scoreBoard();
    } else if (currentQuestion === finalQuestion) {
        end();
    } else {
        timeLeft -= 5;
    };
};

function end() {
    $(questionContainer).empty();
    $(qtimer).remove();
    $("<h1>").text("Finished!").appendTo(body);
    $("<h2>").text("You Scored: " + score + "!").appendTo(body);
    $(scoreBox).remove();
    $("<form>").appendTo(body)
    $("<label>").attr("for", "initials").text("Initials:").appendTo("form");
    $("<input>").attr({"type": "text"},{"id": "initials"},{"name":"initials"}).appendTo("form");
    $("<button>").attr({"type": "submit"}, {"class": "btn"}).appendTo("form");
};

$("submit").on("click", function(event){
    event.preventDefault();
    var highScores = JSON.parse(localStorage.getItem("highscore")) || [];

})

function beginQuiz() {
    start.remove();
    scoreBoard();
    generateTimer();
    generateQuestion();

};

// save final score to local storage
start.addEventListener("click", beginQuiz);



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

