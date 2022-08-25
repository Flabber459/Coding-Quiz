
var question = document.getElementById("questions")
var guide = document.getElementById("guide")
var startButton = document.getElementById("start-button")
var answerEl = document.createElement("div")

var questions = {
    title: "This is Question 1",
    options: ['1', '2', '3', '4'],
    answer: '2',
}


startButton.addEventListener("click", function() {
    // console.log("this worked");
    question.innerHTML = questions.title
    guide.innerHTML = ""
    startButton.innerHTML = ""
    startButton.setAttribute("style", "background-color: white")
})


