const box = document.querySelector('.box')
let positionY = 0
let positionX = 0

let sec = 0

function moveBox () {
    if (positionX <= 840 && positionY === 0)  {
        positionX += 16
        box.style.left = `${positionX}px`
        setTimeout(moveBox, 20)
    } else if (positionX >= 840 && positionY <= 335) {
        positionY += 15
        box.style.top = `${positionY}px`
        setTimeout(moveBox, 20)
    }  else if (positionX > 0 && positionY >= 335) {
        positionX -= 16
        box.style.left = `${positionX}px`
        setTimeout(moveBox, 20)
    }   else {
        positionY -= 15
        box.style.top = `${positionY}px`
        setTimeout(moveBox, 20)
    }
}

requestAnimationFrame(moveBox)



// const interval = setInterval(() => {
//     sec++
//     console.log(sec)
//     if (sec >= 15){
//         clearInterval(interval)
//     }
// },1000)

let timer = 0;
let timerInterval;
let ms = document.getElementById('ms');
let second = document.getElementById('second');
let minute = document.getElementById('minute');

function vpered() {
    sanovka();
    timerInterval = setInterval(function() {
        timer += 1/60;
        msVal = Math.floor((timer - Math.floor(timer))*100);
        secondVal = Math.floor(timer) - Math.floor(timer/60) * 60;
        minuteVal = Math.floor(timer/60);
        ms.innerHTML = msVal < 10 ? "0" + msVal.toString() : msVal;
        second.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
        minute.innerHTML = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
    }, 1000/60);
}

function sanovka() {
    clearInterval(timerInterval);
}


