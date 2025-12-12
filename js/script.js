// VARIABLES

// link html elements to js vars
const countdown = document.getElementById("countdown");

//SYSTEM

// countdown

let timer = 10;
countdown.innerHTML = timer;

const myCountdown = setInterval(() => {
    timer--;
    console.log(timer);
     countdown.innerHTML = timer;
    if(timer === 0){
        clearInterval(myCountdown);
    }
    
}, 1000)




// FUNCTIONS