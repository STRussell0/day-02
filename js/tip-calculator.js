document.title = 'Tip Calculator';

const h1 = document.querySelector('h1');
h1.innerHTML = 'Tip Calc'


const totalInput = document.createElement('input');
totalInput.type = 'number';
totalInput.placeholder = 'Enter Total';


const percentageInput = document.createElement('input');
percentageInput.type = 'number';
percentageInput.placeholder = 'What Percent?';

const tipButton = document.createElement('button');
tipButton.innerHTML = 'Tip';


document.body.appendChild(totalInput);
document.body.appendChild(percentageInput);
document.body.appendChild(tipButton);

tipButton.addEventListener('click', function() {

    const total = Number(totalInput.value);
    const percent = Number(percentageInput.value);

    console.log('$' + percent / 100 * total);

})