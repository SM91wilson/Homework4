var highScores = JSON.parse(localStorage.getItem("highscore")) || [];
var clearScores = $('.clear');
console.log(highScores)

function scoreTable() {
    var scoresList = $('.scoreList')
    highScores.forEach(function (entry) {
        console.log(entry)
        $('<li>').text((entry.initials) + ':' + (entry.score)).appendTo(scoresList);
    })
}
scoreTable();



$(clearScores).on('click', function(){
    $('.scoreList').empty();
    localStorage.clear();
    highScores.splice(0, highScores.length);
});