const questions = [
    {
        question : "How can you open a link in a new browser window.",
        answers : [
            {Text : "_blank", correct: true},
            {Text : "Target", correct: false},
            {Text : "Same", correct: false},
            {Text : "Open", correct: false},
        ]
    },

    {
        question : "HTML stands for what?",
        answers : [
            {Text : "Hypertrophic Management Language", correct: false},
            {Text : "Hyperbaric Tertiary Logarithm", correct: false},
            {Text : "Hypertext Markup Language", correct: true},
            {Text : "Hyperresonant Marginal Logarithm", correct: false},            
        ]
    },

    {
        question : "Every HTML document should have what?",
        answers : [
            {Text : "A head section, and within it a title, followed by a body", correct: true},
            {Text : "A title section, and within it a header, followed by a body", correct: false},
            {Text : "A body and header", correct: false},
            {Text : "None of these", correct: false},            
        ]
    },

    {
        question : "Which tag would be used for a line break?",
        answers : [
            {Text : "lb", correct: false},
            {Text : "br", correct: true},
            {Text : "brk", correct: false},
            {Text : "ln", correct: false},            
        ]
    }
];

questionElement = document.getElementById('question');
answerButtons = document.getElementById('answer-buttons');
nextButton = document.getElementById('next-btn');

questionIndex = 0;
score = 0;

function startQuiz() {
    questionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        button.value = answer.Text;
        answerButtons.appendChild(button);
    });
}

function resetState() {
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function changeQuestion() {
    questionIndex += 1;
    if(questionIndex > 3){
        ;
    }
    else {
        showQuestion();
    }
}

startQuiz();

$(document).ready(function() {
    $(".btn").click(function() {
      var selectedValue = $(this).val();
      var currentQuestion = questions[questionIndex];
  
      if (questionIndex === 0) {
        if (selectedValue === "_blank") {
          $(this).css('background-color', 'green');
        } else {
          $(this).css('background-color', 'red');
        }
      } else if (questionIndex === 1) {
        if (selectedValue === "Hypertext Markup Language") {
          $(this).css('background-color', 'green');
        } else {
          $(this).css('background-color', 'red');
        }
      } else if (questionIndex === 2) {
        if (selectedValue === "A head section, and within it a title, followed by a body") {
          $(this).css('background-color', 'green');
        } else {
          $(this).css('background-color', 'red');
        }
      } else if (questionIndex === 3) {
        if (selectedValue === "br") {
          $(this).css('background-color', 'green');
        } else {
          $(this).css('background-color', 'red');
        }
      }
    });


  });
  
  
  