const button = document.querySelector('.creator')
const container = document.querySelector('.container')



// let i = 0;

button.addEventListener('click', () => {
    // i++;
    let divEl = document.createElement('div');
    divEl.classList.add('notification');
    divEl.innerText = 'Przykładowy tekst';
    container.appendChild(divEl);

    setTimeout(() => {
        divEl.remove();
    }, 3000)

})