const usernameInput = document.getElementById('username');
const positionInput = document.getElementById('position');
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('submit', (e)=> {
    console.log('Form is submitted')
    usernameInput = ''
    positionInput = ''
})