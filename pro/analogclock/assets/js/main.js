const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
// --------
function rotateNeedle(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}
// ----
setInterval(()=>{
  const fetchDate = new Date();
  const sec= fetchDate.getSeconds() / 60;
  const min= (sec + fetchDate.getMinutes()) / 60;
  const hr = (min + fetchDate.getHours()) / 12;
  rotateNeedle(secondHand, sec);
  rotateNeedle(minuteHand, min);
  rotateNeedle(hourHand, hr);
},1000);
// ---

