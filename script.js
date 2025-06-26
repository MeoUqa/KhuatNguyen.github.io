// script.js

const questionNumberElement = document.getElementById('question-number');
const questionTextElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultScreen = document.getElementById('result-screen');
const scoreTextElement = document.getElementById('score-text');
const restartButton = document.getElementById('restart-btn');
const questionsReviewElement = document.getElementById('questions-review'); // New element for review

let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let userAnswers = []; // Array to store user's selected answers for review

const optionLabels = ['A', 'B', 'C', 'D'];

// Hàm bắt đầu hoặc khởi động lại quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answered = false;
    userAnswers = []; // Reset user answers for new quiz

    resultScreen.classList.add('hide');
    document.getElementById('question-card').classList.remove('hide');
    nextButton.classList.add('hide');

    showQuestion();
}

// Hàm hiển thị câu hỏi hiện tại
function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionNumberElement.innerText = `Câu ${currentQuestion.numb} / ${questions.length}`;
    questionTextElement.innerText = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerHTML = `<span class="option-label">${optionLabels[index]}.</span> ${option}`;
        button.classList.add('btn');
        if (option === currentQuestion.answer) {
            button.dataset.correct = true;
        }
        button.dataset.optionIndex = index; // Store 0-indexed option for userAnswers
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

// Hàm reset trạng thái của các nút đáp án và ẩn nút "Next"
function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Hàm xử lý khi người dùng chọn một đáp án
function selectAnswer(e) {
    if (answered) return;
    answered = true;

    const selectedButton = e.target.closest('button');
    const isCorrect = selectedButton.dataset.correct === "true";
    const selectedOptionIndex = parseInt(selectedButton.dataset.optionIndex);

    // Lưu câu trả lời của người dùng
    userAnswers[currentQuestionIndex] = selectedOptionIndex;

    if (isCorrect) {
        score++;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('wrong');
    }

    // Hiển thị đáp án đúng nếu người dùng chọn sai và vô hiệu hóa tất cả các nút
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true" && !isCorrect) { // Chỉ làm nổi bật đáp án đúng nếu người dùng trả lời sai
             button.classList.add('correct'); // Đánh dấu đáp án đúng
        }
        button.disabled = true;
    });

    nextButton.classList.remove('hide');
}

// Hàm hiển thị kết quả cuối cùng
function showResult() {
    document.getElementById('question-card').classList.add('hide');
    nextButton.classList.add('hide');
    resultScreen.classList.remove('hide');
    scoreTextElement.innerText = `Bạn đã trả lời đúng ${score} trên ${questions.length} câu.`;

    displayReviewSection(); // Call new function to display review
}

// Hàm hiển thị phần xem lại câu hỏi và đáp án
function displayReviewSection() {
    questionsReviewElement.innerHTML = ''; // Clear previous review

    questions.forEach((q, qIndex) => {
        const questionItem = document.createElement('div');
        questionItem.classList.add('question-review-item');

        const questionText = document.createElement('p');
        questionText.innerHTML = `Câu ${q.numb}: ${q.question}`;
        questionItem.appendChild(questionText);

        const optionsList = document.createElement('ul');
        q.options.forEach((option, optionIndex) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span class="option-label-review">${optionLabels[optionIndex]}.</span> ${option}`;

            const isCorrectAnswer = (option === q.answer);
            const isUserAnswer = (userAnswers[qIndex] === optionIndex);

            if (isCorrectAnswer) {
                listItem.classList.add('correct-answer');
            }
            if (isUserAnswer && !isCorrectAnswer) {
                listItem.classList.add('your-answer-wrong');
            }
            // If it's the correct answer and user also picked it, it will already have correct-answer class.
            // If user picked it and it's wrong, it will have your-answer-wrong.

            optionsList.appendChild(listItem);
        });
        questionItem.appendChild(optionsList);
        questionsReviewElement.appendChild(questionItem);
    });
}


// Sự kiện click cho nút "Câu tiếp theo"
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    answered = false;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

// Sự kiện click cho nút "Làm lại"
restartButton.addEventListener('click', startQuiz);

// Lắng nghe sự kiện bàn phím
document.addEventListener('keydown', (e) => {
    // Nếu màn hình kết quả đang hiển thị, chỉ xử lý nút "Làm lại" bằng Enter
    if (!resultScreen.classList.contains('hide')) {
        if (e.key === 'Enter') {
            restartButton.click();
        }
        return;
    }

    // Xử lý phím số 1, 2, 3, 4 hoặc A, B, C, D để chọn đáp án
    if (!answered) {
        let selectedIndex = -1;
        if (e.key >= '1' && e.key <= '4') {
            selectedIndex = parseInt(e.key) - 1;
        } else if (e.key.toUpperCase() >= 'A' && e.key.toUpperCase() <= 'D') {
            selectedIndex = e.key.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
        }

        const buttons = Array.from(answerButtonsElement.children);
        if (selectedIndex >= 0 && selectedIndex < buttons.length) {
            buttons[selectedIndex].click(); // Simulate click on the button
        }
    } else {
        // Nếu đã trả lời và nút "Câu tiếp theo" đang hiển thị, nhấn Enter để chuyển câu
        if (!nextButton.classList.contains('hide') && e.key === 'Enter') {
            nextButton.click();
        }
    }
});

// Bắt đầu quiz khi trang web được tải
startQuiz();