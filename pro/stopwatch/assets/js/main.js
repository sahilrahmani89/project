const reset = document.querySelector(".reset");
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const text = document.querySelector('.text');
let hr=0; 
let  min=0;
let sec=0;
text.textContent= `${hr}0${":"}${min}0${":"}${sec}0`;
let timeInc;
reset.addEventListener('click',()=>{
	clearInterval(timeInc);
	 hr=0; 
   min=0;
  sec=0;
	text.textContent=`${hr}0${":"}${min}0${":"}${sec}0`;
});
start.addEventListener('click',()=>{
     timeInc=setInterval(()=>{
     	letSecMin();
     	     },1000) 
});
stop.addEventListener('click',()=>{
	clearInterval(timeInc);
});
const letSecMin =()=>{
	sec++;
	if (sec<10) {
		sec.innerHTML ="0"+ sec;
	}
	if (sec==60) {
		sec=0;
		min++;
	}

	if (min===60) {
		min=0;
		hr++;
	}
	text.textContent= (hr ? (hr > 9 ? hr: "0" + hr) : "00") +
	 ":" + (min ? (min > 9 ? min : "0" + min) : "00") +
	  ":" + (sec > 9 ? sec : "0" + sec);
}
