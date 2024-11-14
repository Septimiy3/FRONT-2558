const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')

const number = 1000000
const numberDecimal = 1234.56789989;

one.textContent = number.toLocaleString('en-US')
two.textContent = number.toLocaleString('ru')
three.textContent = number.toLocaleString('de-DE')
four.textContent = numberDecimal.toFixed(3)
five.textContent = number.toLocaleString('en-US', { style: 'currency', currency: 'rub' });
