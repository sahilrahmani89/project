let button = document.querySelector('.button');
let inDigi =  document.querySelector('.inDigi');
let digi= Math.floor(Math.random()*100);
let answer = document.querySelector('.answer');
let tryLeft = document.querySelector('.tryLeft')
let flag = 5;
function Play(){
	let x =inDigi.value;
	if (x==digi) {
		answer.textContent=`you won`;
		setInterval(()=>{
			location.reload();
		}, 2000);
		
	}
	else if(x>digi){
		flag-- ;
		answer.textContent=`less  than ${x}`;
	}
	else if(x<digi){
		flag--;
		answer.textContent=`greater than ${x}`
	}
	if (flag==0){
		answer.textContent=`you lose, Value was ${digi}`;
			setInterval(()=>{
			location.reload();
		}, 3000);
	}
	tryLeft.textContent=`${flag} try left`;
}
function ShowAlert(message,className){
	const div = document.createElement('div');
	const randomCont = document.querySelector('.randomCont');
	const newArea = document.querySelector('.newArea');
	div.className = `alert alert-${className}`;
	div.appendChild(document.createTextNode(message));
	newArea.insertBefore(div,randomCont);
	setTimeout(()=>document.querySelector('.alert').remove(),3000)
}
button.addEventListener('click',()=>{
	let x =inDigi.value;
	if (x==='') {
		ShowAlert('Enter Digit!','danger');
	}
	else{
		Play();
	}
	
});
