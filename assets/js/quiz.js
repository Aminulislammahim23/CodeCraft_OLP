const quizData = [
    {
        question: "1. What does HTML stand for?",
        options: [
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language",
            "HyperText Markup Language",
            "Hyperlink Machine Language"
        ],
        answer: 2,
        explanation: "HTML means HyperText Markup Language used to structure webpages."
    },
    {
        question: "2. Which tag is used for CSS?",
        options: [
            "<style>",
            "<css>",
            "<script>",
            "<linkcss>"
        ],
        answer: 0,
        explanation: "<style> tag is used inside HTML for CSS styling."
    },
    {
        question: "3. JS executes on which engine?",
        options: [
            "Browser engine",
            "Java engine",
            "Python engine",
            "None"
        ],
        answer: 0,
        explanation: "JavaScript runs inside the browser’s JS engine (V8, SpiderMonkey, etc)."
    }
];

let index = 0;
let userAnswers = [];
let timeLeft = 60;

const timer = setInterval(() => {
    document.getElementById("timer").innerText = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timer);
        finishQuiz();
    }
    timeLeft--;
}, 1000);


function loadQuiz() {
    const box = document.getElementById("quiz-box");
    box.innerHTML = "";

    quizData.forEach((q, i) => {
        let html = `
        <div class="question-box">
            <p class="question">${q.question}</p>
        `;

        q.options.forEach((opt, idx) => {
            html += `
            <div class="option">
                <input type="radio" name="q${i}" value="${idx}">
                ${opt}
            </div>`;
        });

        html += `</div><hr>`;
        box.innerHTML += html;
    });
}

loadQuiz();

document.getElementById("submitBtn").addEventListener("click", finishQuiz);

function finishQuiz() {
    clearInterval(timer);

    let score = 0;
    userAnswers = [];

    quizData.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);

        userAnswers[i] = selected ? parseInt(selected.value) : -1;

        if (userAnswers[i] === q.answer) score++;
    });

    showResult(score);
}

function showResult(score) {
    const resultBox = document.getElementById("result-box");
    resultBox.classList.remove("hidden");

    let html = `<h2>Your Score: ${score} / ${quizData.length}</h2><br>`;

    quizData.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.answer;
        const userAnsText = userAnswers[i] === -1 ? "Not Answered" : q.options[userAnswers[i]];
        const correctText = q.options[q.answer];

        html += `
        <div class="ans-box">
            <p><strong>Q: ${q.question}</strong></p>
            <p>Your Answer: <span style="color:${isCorrect ? 'green' : 'red'}">${userAnsText}</span></p>
            <p>Correct Answer: <b>${correctText}</b></p>
            <p><i>${q.explanation}</i></p>
            <hr>
        </div>`;
    });

    html += `<button onclick="location.reload()" class="btn">Retake Quiz</button>`;

    resultBox.innerHTML = html;
}
