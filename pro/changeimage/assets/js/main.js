const change = document.querySelector('.change');
let flag =1 ;
change.addEventListener('click',()=>{
	if(flag ==1){
		change.src = 'assets/img/2.jpg';
		flag=0;
	}
	else{
		change.src= 'assets/img/1.jpg';
		flag=1;
	}
});