// Global variables
var startButton = document.getElementById('startButton')
var questionText = document.getElementById('questionText');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var nextButton = document.getElementById('nextButton');
var answerBox = document.getElementById('answerBox');

// Quiz app
var app = {
    currentQuestion: 0, //questions[0] = first question
    totalQuestions: questions.length,
    score: 0,
    init: function () {
        var self = this;
        answerBox.style.display = "none";
        nextButton.style.display = "none";
        startButton.addEventListener('click', function () {
            self.loadQuestion(self.currentQuestion);
            startButton.style.display = "none";
            answerBox.style.display = "initial";
            nextButton.style.display = "initial";
        });
    },
    loadQuestion: function (i) {
        var questionIndex = questions[i];
        console.log(questionIndex);
        questionText.textContent = (i + 1) + ". " + questionIndex.question;
        opt1.textContent = questionIndex.option1;
        opt2.textContent = questionIndex.option2;
        opt3.textContent = questionIndex.option3;
        opt4.textContent = questionIndex.option4;
    },
    loadNextQuestion: function () {
        startButton.style.display = "none";
        var selectedOption = document.querySelector('input[type="radio"][name="userAnswer"]:checked');
        if (!selectedOption) {
            startButton.style.display = "inherit";
            startButton.textContent = "Please choose an answer";
        } else if (selectedOption.value === questions[this.currentQuestion].answer) {
            this.score++;
            this.currentQuestion++;
            selectedOption.checked = false;
        } else {
            this.currentQuestion++;
            selectedOption.checked = false;
        };
        if (this.currentQuestion === this.totalQuestions - 1) {
            nextButton.textContent = "Finish";
        };
        if (this.currentQuestion === this.totalQuestions) {
            this.quizResults()
        };
        this.loadQuestion(this.currentQuestion);
    },
    quizResults: function () {
        answerBox.style.display = "none";
        questionText.textContent = "You got " + this.score + " out of 10!";
        nextButton.style.display = "none";
    }
}

app.init()