const start  = document.querySelector('.start');
const pad = document.querySelectorAll('.pad');
const gameOver = document.querySelector('.gameOver');
const timeLeft = document.querySelector('.timeLeft');
const scoreYouGet = document.querySelector('.scoreYouGet');
const mole = document.querySelector('.mole');
const main = document.querySelector('#main');
const play = document.querySelector('.play');
// 
// 
let time = 60;
let endMole = null;
let decreaseTime;
let randomPad;
let targetMole;
let result =0;
// 

const TimeLeft =()=>{
	decreaseTime= setInterval(timer,1000);
}
// 
const timer=()=>
{
	time--;
	time = addZero(time);
	timeLeft.textContent = time;
	if (time<58) {
		play.style.display='none';
	}
    if (time == 0) {
      play.style.display ='block';
      clearInterval(decreaseTime);
      clearInterval(endMole);
      main.textContent =`Play Again`;
      PlayAgain();
   	  gameOver.textContent =`Game Over!`;
   	  scoreYouGet.textContent = result;
    }
}
// 
const PlayAgain =()=>{main.addEventListener('click',()=>setTimeout(location.reload.bind(location), 1))}

// 
const addZero=(e)=>{
	if (e<10) {
		e = '0'+e;
	}
	return e;
}
// 
const RandomMole = ()=>{
	pad.forEach(e=>{
		e.classList.remove('mole');
	})
	randomPad = pad[Math.floor(Math.random()*12)];
	randomPad.classList.add('mole');
	targetMole = randomPad.id;
}

	pad.forEach(e=>{
		e.addEventListener('mousedown', () => {
			if (e.id==targetMole){
				result++;
				scoreYouGet.textContent = result;
				targetMole = null;
			}
		})
	})
// 
const MoveMole=()=>{
	endMole = setInterval(RandomMole,700);
}

// 
start.addEventListener('click',(e)=>{
	e.preventDefault();
	TimeLeft();
	RandomMole();	
	MoveMole();
});
