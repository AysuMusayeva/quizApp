const quizData=[
    {
                question:'How old is Julia?',
                a:'10',
                b:'17',
                c:'26',
                d:'110',
                correct:'c'
            },
            {
                question:'What is the most used Programming language in 2019?',
                a:'Java',
                b:'C',
                c:'Pyhton',
                d:'Javascript',
                correct:'d'
            },
            {
                question:'Who is the president of US?',
                a:'Florin Pop',
                b:'Donald Tramp',
                c:'Ivan Saldano',
                d:'Mihai Andrei',
                correct:'b'
            },
            {
                question:'What does HTML stand for?',
                a:'Hypertext Markup Language',
                b:'Cascading Style Sheet',
                c:'Json Object Notation',
                d:'Helicopters Terminal Motorboats Lamborginis',
                correct:'a'
            },
            {
                question:'What year was Javascript launched?',
                a:'1996',
                b:'1996',
                c:'1994',
                d:'none of the above',
                correct:'d'
            }
]
const question=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submit=document.getElementById('submit');
const answerEls=document.querySelectorAll('.answer')
let currentQuiz=0;
let score=0;
loadQuiz()
function loadQuiz(){
let currentQuizData=quizData[currentQuiz]
question.innerHTML=currentQuizData.question;
a_text.innerHTML=currentQuizData.a;
b_text.innerHTML=currentQuizData.b;
c_text.innerHTML=currentQuizData.c;
d_text.innerHTML=currentQuizData.d;
}

function getSelected(){
    let answer
answerEls.forEach((answerEl)=>{
    if(answerEl.checked){
        answer=answerEl.id
    }
})
return answer;
}
function deselectedAnswers(){
    answerEls.forEach((answerEl)=>{
       answerEl.checked=false
    })
}
submit.addEventListener('click',()=>{
    let answers=getSelected();
    if(answers){
        if(answers===quizData[currentQuiz].correct){
         score++;
        }
        currentQuiz++;
        if(currentQuiz<quizData.length){
            deselectedAnswers()
            loadQuiz()
        }else{
            quiz.innerHTML=`<h2>Your answered correctly at ${score} / ${quizData.length} questions.</h2> <button onclick=location.reload()>Reload</button>`
        }
    }
})
