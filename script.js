const quizData = [
    {
        question:'How many wing birds have ?',
        a: '1',
        b: '3',
        c: '2',
        d: '10',
        correct:'c'
    }, {
        question : 'How many legs a dog have?',
        a: '4',
        b: '5',
        c: '7',
        d: '12',
        correct:'a'

    },{
        question : 'How many legs a bird have?',
        a: '1',
        b: '3',
        c: '4',
        d: '2',
        correct:'d'
    }, {
        question : 'how many quarters make a dollar?',
        a: '1',
        b: '3',
        c: '4',
        d: '2',
        correct:'c'
    }]

const answerE1s = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let questionE1 = document.getElementById('question');
let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz(){
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){

    let answer = undefined;

    answerE1s.forEach((answerE1) => {
        if(answerE1.checked){
            answer =  answerE1.id;
        }
    });
    return answer;
}

function deselectAnswer(){
    answerE1s.forEach((answerE1) => {
        answerE1.checked = false;
    });
}

submitBtn.addEventListener("click", () => {

    const answer = getSelected();

    if (answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
            console.log(score);
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} question.</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }

});