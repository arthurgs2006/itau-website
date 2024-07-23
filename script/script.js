
const form = document.querySelector('#form');
const response = document.querySelector('#answer')
form.addEventListener('submit', ev => {
    ev.preventDefault();
    const img = document.createElement('img')
    const p = document.createElement('p')
    img.src = './img/verification.png'
    img.className = 'img-fluid conclued-form'
    p.textContent = 'Dúvida enviada!'
    p.className = 'd-flex flex-column'
    response.append(img, p);
})

function toggleMenu() {
    document.querySelector('.main-menu').classList.toggle('active');
}