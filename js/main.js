const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.mins-hand');
const hoursHand = document.querySelector('.hours-hand');


function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${hourDegrees}deg)`;

  const hour = now.getMinute();
  const hourDegrees = ((mins/12)* 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
