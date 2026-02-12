let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let h = document.querySelector('.h');
let m = document.querySelector('.m');
let s = document.querySelector('.s');

function clock() {
    let date = new Date()
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let second = new Date().getSeconds()

    minutes.textContent = minute

    if (10 > hour) {
        hours.textContent = `0${hour}`
    } else {
        hours.textContent = hour
    }

    if (10 > minute) {
        minutes.textContent = `0${minute}`
    } else {
        minutes.textContent = minute
    }

    s.style.transform = `rotate(${second * 6}deg)`
    m.style.transform = `rotate(${minute * 6}deg)`
    h.style.transform = `rotate(${hour * 30}deg)`
}

setInterval(() => {
    clock()
}, 1000);

clock();

//sekundomer

let tabsContentItem = [...document.querySelectorAll('.tabsContentItem')];
let tabsItem = [...document.querySelectorAll('.tabsItem')];


tabsItem.forEach((item, i) => {
    item.addEventListener('click', () => {

        if (i == 0) {
            tabsItem[0].classList.add('active');
            tabsItem[1].classList.remove('active');
            tabsContentItem[0].classList.add('active');
            tabsContentItem[1].classList.remove('active');

        } else {

            tabsItem[1].classList.add('active');
            tabsItem[0].classList.remove('active');
            tabsContentItem[1].classList.add('active');
            tabsContentItem[0].classList.remove('active');
        }

    })
})


let sekundBtn = document.querySelector('.stopwatch__btn');
let sekundMin = document.querySelector('.stopwatch__minutes');
let sekundSec = document.querySelector('.stopwatch__seconds');
let sekundMsec = document.querySelector('.stopwatch__mseconds');
let sekundSpan = document.querySelector('.tabsLink__span');

let stop;

function watchTimer() {
    stop = setInterval(() => {
        sekundMsec.textContent++

        if (sekundMsec.textContent >= 59) {
            sekundSec.textContent++
            sekundMsec.textContent = 0
        }
        

        if (sekundSec.textContent >= 59) {
            sekundMin.textContent++
            sekundSec.textContent = 0
        }

    }, 20);

}

sekundBtn.addEventListener("click", () => {
    if (sekundBtn.textContent == "start") {
        watchTimer()
        sekundBtn.textContent = "stop"
        sekundSpan.classList.add("active")

    } else if (sekundBtn.textContent == "stop") {
        clearInterval(stop)
        sekundBtn.textContent = "clear"
        sekundSpan.classList.add("active_clear")
    } else if (sekundBtn.textContent == "clear") {
        sekundMsec.textContent = 0
        sekundSec.textContent = 0
        sekundMin.textContent = 0
        sekundBtn.textContent = "start"
        sekundSpan.classList.remove("active_clear")
        sekundSpan.classList.remove("active")


    }
})