const startBtn = document.querySelector('#startBtn');
startBtn.innerText = "start";
const stopBtn = document.querySelector("#stopBtn");
stopBtn.innerText = "stop";
const resetBtn = document.querySelector("#resetBtn");
resetBtn.innerText = "reset";
const time = document.querySelector("#time");
time.textContent = "00:00:00";


let delayTimer = null;
let tickTimer = null;
let sec = 0;
let hours = 0;
let mins = 0;
startBtn.addEventListener('click',() => {
    clearTimeout(delayTimer)
    clearInterval(tickTimer)
    sec = 0;
    mins = 0;
    hours = 0;
    delayTimer = setTimeout(() => {
        console.log("in 3 sec");
        tickTimer = setInterval(tick, 1000);

    }, 3000);
  
});



function tick() {
    sec++;
    if (sec === 60) {
        sec = 0;
        mins++;
        console.log(
       `${mins} mins've passed `
    );
    }
    
    if (mins === 60) {
        mins = 0;
        hours++;
        console.log(
            `${hours} hours've passed `);
    }

    time.textContent = formatTime()
}

function formatTime() {
    return (
        String(hours).padStart(2, "0") + ":" +
        String(mins).padStart(2, "0")   + ":" +
        String(sec).padStart(2, "0")
    );
}

//
stopBtn.addEventListener('click', () => {
    clearInterval(tickTimer);
    console.log("stop");
});
resetBtn.addEventListener('click', () => {
    clearTimeout(delayTimer)
    clearInterval(tickTimer)
    sec = 0;
    mins = 0;
    hours = 0;
    time.textContent = formatTime();

});

