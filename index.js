const secondsHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");


const setDate = () => {
    
    //currentDate needs to remain in the function as the date is being pulld every second
    const currentDate = new Date();

    const currentSecond = currentDate.getSeconds();
    const secondsDegrees = ((currentSecond / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const currentMinute = currentDate.getMinutes();
    const minuteDegrees = ((currentMinute / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const currentHour = currentDate.getHours();
    const hourDegrees = ((currentHour / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    
}



setInterval(setDate, 1000);