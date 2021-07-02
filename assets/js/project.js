const btnleft = document.querySelector('.btn-left');
const btnright = document.querySelector('.btn-right');
const quizSlide = document.querySelector('.quizSlide');
// ---
const  QuizImgSlider =() =>{
	let qImg = ['q1','q2','q3'];
	let indexOfqImg=0;
	const load=(obj)=>{
		quizSlide.src = `assets/img/pro/${obj}.png`
	}
	load(qImg[indexOfqImg]);
	const nextImg =()=>{
		indexOfqImg++;
		if (indexOfqImg>qImg.length-1) {
			indexOfqImg =0;
		}
		load(qImg[indexOfqImg]);
	}
	const prevImg = () =>{
		indexOfqImg--;
		if (indexOfqImg<0) {
			indexOfqImg = qImg.length-1;
		}
		load(qImg[indexOfqImg]);
	}
	btnright.addEventListener('click',(e)=>{
		e.preventDefault();
		nextImg();
	});
	btnleft.addEventListener('click',(e)=>{
		e.preventDefault();
		prevImg();
	});
	setInterval(()=>{
		nextImg();
	},2000)
}
QuizImgSlider();
