AOS.init();

const dataEvent = new Date("Feb 24, 2026 19:00:00");
const timeStampEvent = dataEvent.getTime();

const counter = setInterval(function(){
    const now = new Date();
    const timeStampNow = now.getTime();
    const eventCounter = timeStampEvent - timeStampNow;

    const daysForEvent = Math.floor(eventCounter / (1000*60*60*24));
    const hoursForEvent = Math.floor((eventCounter % (1000*60*60*24)) / (1000*60*60));
    const minutesForEvent = Math.floor((eventCounter % (1000*60*60)) / (1000*60))
    const secondsForEvent = Math.floor((eventCounter % (1000*60)) / 1000);
    
    document.getElementById("timer").innerHTML = `A festa começa em ${daysForEvent}d ${hoursForEvent}h ${minutesForEvent}m ${secondsForEvent}s`

    if(eventCounter <= 0){
        clearInterval(counter);
        document.getElementById("title").innerHTML = "É hoje!";
    }
}, 1000);