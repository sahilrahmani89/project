 const div1 = document.querySelector('.div1');
 const div2 = document.querySelector('.div2');
 const div4 = document.querySelector('.div4');
 window.addEventListener('scroll',()=>{
 	let offset = window.pageYOffset;
 	let calparal = offset*0.8+'px';
 	div1.style.backgroundPositionY= calparal;
 	div2.style.backgroundPositionY= offset*0.8+'px';
 	div4.style.backgroundPositionY= offset*0.7+'px';
 })