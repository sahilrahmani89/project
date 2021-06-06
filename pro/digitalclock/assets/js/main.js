const clock = document.querySelector(".clock"); 

const runningTime =()=>{
	let date = new Date();
	let hr = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	sec =addZero(sec);
	min=addZero(min);
	hr = addZero(hr);
	clock.textContent=`${hr}:${min}:${sec}`
}
setInterval(runningTime,1000);
const addZero =(i)=>{
 if (i<10) {
 	i="0"+i;
 }
 return i;
}