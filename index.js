// initializing some values
let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;


// finding elements
const form = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const guessingNumber = form.querySelector('#guessingNumber');
const checkButton = form.querySelector('#check');
const resultText = cardBody.querySelector('.resultText');
const remainingAttempts = cardBody.querySelector('.remainingAttempts');
const wonLostMessage = document.createElement('p');


form.addEventListener('submit', function(event){
    event.preventDefault();
    attempts++;
    if(attempts == 5){
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }if(attempts<6){
        let guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerHTML = `Remaining Attempts: ${totalAttempts - attempts}`;
    }
    guessingNumber.value = '';
    
});

function checkResult(guessingNumber){
    const randomNumber = getRandomNumber(5);
    if(guessingNumber == randomNumber){
        resultText.innerHTML = `you have won`;
        totalWons++;
    }else{
        resultText.innerHTML = `you have lost; random number was: ${randomNumber}`;
        totalLosts++;
    }
    wonLostMessage.innerHTML = `Won: ${totalWons}, Lost: ${totalLosts}`;
    wonLostMessage.classList.add('large-text');
    cardBody.appendChild(wonLostMessage);
}

function getRandomNumber(limit){
    return Math.floor(Math.random()*limit)+1; 
}

