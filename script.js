
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minutes');
const second = document.querySelector('#seconds');
const ampmELE = document.querySelector('#ampm');

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h>12){
        h=h-12;
        ampm = "PM"
    }
    hour.innerText = `${h}`.padStart(2,'0');
    minute.innerText = `${m}`.padStart(2,'0');;
    second.innerText = `${s}`.padStart(2,'0');
    ampmELE.innerText = ampm;

    setTimeout(updateClock,1000)
}

updateClock()