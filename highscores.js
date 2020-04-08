var highScores = JSON.parse(localStorage.getItem("highscore")) || [];
console.log(highScores);

function scoreTable() {
    var scoresList = $('.scoreList')
    highScores.forEach(function (entry) {
        $('<li>').text(entry).appendTo(scoresList);

    })
}
scoreTable();