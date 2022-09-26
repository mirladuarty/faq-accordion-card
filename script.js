const question = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer');
const section = document.querySelectorAll('section');
const myElement = document.querySelector('content');

function callback(event) {
    const target = event.target;
    const parent = target.parentNode;
    const classAnswer = parent.querySelector('.answer');
    classAnswer.classList.toggle('active');
    target.classList.toggle('active');
}

question.forEach(item => {
    item.addEventListener('click', callback);

});