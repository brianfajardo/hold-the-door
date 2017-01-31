// Global variables
var startButton = document.getElementById('initQuiz')
var questionText = document.getElementById('questionText');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');

// Quiz app
var app = {
    currentQuestion: 0,
    score: 0,
}
