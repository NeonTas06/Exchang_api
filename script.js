
const currencyInput = document.getElementById('currency-input');
const currencyOutput = document.getElementById('currency-output');

const  inputAmount = document.getElementById('input-amount');
const  outputAmount = document.getElementById('output-amount');

const rateElement = document.getElementById('rate');
const swapButton = document.getElementById('btn');

// Event
currencyInput.addEventListener('change', calculateMoney);
currencyOutput.addEventListener('change', calculateMoney);
inputAmount.addEventListener('input', calculateMoney);
outputAmount.addEventListener('input', calculateMoney);

function calculateMoney(){
    const cOne = currencyInput.value;
    const cTwo = currencyOutput.value;
    fetch(`https://v6.exchangerate-api.com/v6/4de993b0723034479d994f22/latest/${cOne}`)
    .then(res => res.json()).then(data =>{
        const rate = data.conversion_rates[cTwo];
        rateElement.innerText = `1 ${cOne} = ${rate} ${cTwo}`;
        outputAmount.value = (inputAmount.value*rate).toFixed(2);
    })

    
}
swapButton.addEventListener('click', () => {

    const temp = currencyInput.value;
    currencyInput.value = currencyOutput.value;
    currencyOutput.value = temp;
    calculateMoney();
})

calculateMoney();

