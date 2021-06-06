const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const imageSlide = document.querySelector('.imageSlide');
// ---------
const givenImage = ['1','2','3'];
let indexOfImage = 2;
// -------
function NextImg(){
	indexOfImage++;
	if (indexOfImage>givenImage.length-1) {
		indexOfImage=0;
	}
	LoadImage(givenImage[indexOfImage]);
}
function PrevImg(){
	indexOfImage--;
	if (indexOfImage<0) {
		indexOfImage= givenImage.length-1;
	}
	LoadImage(givenImage[indexOfImage]);
}
function LoadImage(obj){
	imageSlide.src=`assets/img/${obj}.png`
}
LoadImage(givenImage[indexOfImage]);
btnRight.addEventListener('click',NextImg);
btnLeft.addEventListener('click',PrevImg);
// 
setInterval(()=>{
	NextImg();
},3000)