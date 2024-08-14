// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

let clock = 0

function addtime() {
    clock++
    counterElement.innerHTML = clock
}

const intervalId = setInterval(addtime, 1000);