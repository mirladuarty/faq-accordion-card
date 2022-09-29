const question = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer');
const section = document.querySelectorAll('section');
const content = document.querySelector('.content');
const boxQuestion = document.querySelectorAll('.box-question');

function callback(event) {
    const target = event.target;
    const parent = target.parentNode;
    const pai = parent.parentNode;
    const classAnswer = pai.querySelector('.answer');
    const image = pai.querySelector('img');
    image.classList.toggle('active');
    classAnswer.classList.toggle('active');
    target.classList.toggle('active');
}

boxQuestion.forEach(item => {
    item.addEventListener('click', callback);

});