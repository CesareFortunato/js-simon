// VARIABLES

// global vars

let timer = 5;


// link html elements to js vars
const countdown = document.getElementById("countdown");
const randomNumbersList = document.getElementById("numbers-list");
const instructionText = document.getElementById("instructions");
const form = document.getElementById("answers-form");
const message = document.getElementById("message");
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

randomNumbersList.innerHTML = numArr.map(num => `<li>${num}</li>`).join(''); //numArr transformed in <li> .join put no separator

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
    const userAnswer = countCommonNumbers(numArr, userNumbers);
    console.log(userAnswer.count);   //put everything about the form, inside the form

    if (userAnswer.count > 0) {   //use .count cause countCommonNumbers return an object with "count" + "values(array)"
        message.innerHTML = `Bravo! Hai indovinato ${userAnswer.count} numeri`;
    } else {
        message.innerHTML = "Peccato! Nessun numero indovinato 😢";
    }

})






// FUNCTIONS

// put a random number inside the array

function randomNumberArray(minNum, maxNum, tot) {
    const numArr = [];

    while (numArr.length < tot) {
        const randomNum = genRandomNumber(minNum, maxNum);

        if (!numArr.includes(randomNum)) {
            numArr.push(randomNum)
        }
    }
    return numArr
}

// pick a random number

function genRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// count how many numbers are correct

function countCommonNumbers(arr1, arr2) {
    const resultArray = [];

    for (let i = 0; i < arr1.length; i++) {
        const currentNum = arr1[i];

        // Se arr2 contiene il numero, lo aggiungo al risultato
        if (arr2.includes(currentNum)) {
            resultArray.push(currentNum);
        }
    }

    return {
        count: resultArray.length,
        values: resultArray
    };
}

