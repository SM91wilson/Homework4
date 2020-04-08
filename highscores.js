var highScores = JSON.parse(localStorage.getItem("highscore")) || [];
var clearScores = $('.clear');
console.log(highScores);

function scoreTable() {
    var scoresList = $('.scoreList')
    highScores.forEach(function (entry) {
        $('<li>').text(entry).appendTo(scoresList);

    })
}
scoreTable();



$(clearScores).on('click', function(){
    $('.scoreList').empty();
    localStorage.clear();
});