// VARIABLES

// global vars

let timer = 1;


// link html elements to js vars
const countdown = document.getElementById("countdown");
const randomNumbersList = document.getElementById("numbers-list");
const instructionText = document.getElementById("instructions");
const form = document.getElementById("answers-form");
const firstNumUser = document.getElementById("firstNum");
const secondNumUser = document.getElementById("secondNum");
const thirdNumUser = document.getElementById("thirdNum");
const fourthNumUser = document.getElementById("fourthNum");
const fifthNumUser = document.getElementById("fifthNum");

//SYSTEM

// countdown


countdown.innerHTML = timer; // show "10" at the beginning 

const myCountdown = setInterval(() => {
    timer--;
    countdown.innerHTML = timer;
    if (timer === 0) {
        clearInterval(myCountdown);
        countdown.classList.add('d-none');
        randomNumbersList.classList.add('d-none');
        instructionText.classList.add('d-none');
        form.classList.remove('d-none');
    }

}, 1000)           // countdown till reaches 0


// numbers to memorize

const numArr = randomNumberArray(1, 50, 5);

randomNumbersList.innerHTML = numArr.map(num => `<li>${num}</li>`).join('');

// create new array with user answers

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // user input store in new array
    
     const userNumbers = [
        parseInt(firstNumUser.value),
        parseInt(secondNumUser.value),
        parseInt(thirdNumUser.value),
        parseInt(fourthNumUser.value),
        parseInt(fifthNumUser.value)
    ];
})




// FUNCTIONS

// put a random number inside the array

function randomNumberArray(minNum, maxNum, tot){
    const numArr = [];

    while (numArr.length < tot){
        const randomNum = genRandomNumber(minNum, maxNum);

        if (!numArr.includes(randomNum)){
            numArr.push(randomNum)
        }
    }
    return numArr
}

// pick a random number

function genRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}