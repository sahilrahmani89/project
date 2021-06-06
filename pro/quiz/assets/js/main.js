const allQuest = [{
	question:'Q1: Which animal do not make a sound',
	a:'Girrafe',
	b:'Dog',
	c:'Zebra',
	d:'Lion',
	ans:'ans1',
},
{
	question:'Q2: The bird which lays more than 100 eggs in one nest is',
	a:'Peacock',
	b:'Ostrich',
	c:'Crow',
	d:'Sparrow',
	ans:'ans2',
},
{
	question:'Q3: What animal has the worst memory?',
	a:'Dog',
	b:'Rat',
	c:'Elephant',
	d:'Dolphin',
	ans:'ans3',
},
{
	question:'Q4:India lies in the hemisphere',
	a:'Southern and western',
	b:'Northern and western',
	c:'Southern and eastern',
	d:'Northern and eastern',
	ans:'ans4',
},
];


const nque = document.querySelector('.nque');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const next = document.querySelector('.next');
const answer = document.querySelectorAll('.answer');
const showAnswerWrap = document.querySelector('.showAnswerWrap');
const boom = document.querySelector('.boom');
let userName = document.querySelector('.userName');
const intro = document.querySelector('.intro');
const task = document.querySelector('.task');
const play = document.querySelector('.play');
const form = document.querySelector('#form');
// 
task.style.display="none";
const ShowAlert=(message,className)=>{
	const formArea = document.querySelector('.formArea');
	const div = document.createElement('div');
	div.className = `alert alert-${className}`;
	div.appendChild(document.createTextNode(message));
	formArea.insertBefore(div,form);
	setTimeout(()=>document.querySelector('.alert').remove(),3000)
}
const checkUser =()=>{
	form.addEventListener('submit',(e)=>{
		e.preventDefault();
		localStorage.setItem('name', userName.value);

		
			if(userName.value===''){
			ShowAlert('Enter Your Name','danger');
		}
		else{
			task.style.display='block';
           intro.style.display='none';''
		}
		

	})
}
checkUser();
 	var i =0;
 	let score =0;
 	let count=0;
 const loadQuestion =() =>{
 	const qList = allQuest[i];
 	nque.innerText = qList.question;
 	option1.innerText= qList.a;
 	option2.innerText= qList.b;
 	option3.innerText= qList.c;
 	option4.innerText= qList.d;
 	
 }
loadQuestion();

 const getCheckAnswer = ()=>{
 	let ansId;
 	answer.forEach((curAnsElem)=>{
 		if (curAnsElem.checked) {
         ansId = curAnsElem.id;
 		}
 	}); 
 	return ansId;
 };
 const reDeCheck = ()=>{
 	answer.forEach((curAnsElem)=>curAnsElem.checked= false );
 }
 next.addEventListener('click', ()=>{
 	
 	const checkedAnswer = getCheckAnswer();

 	if (checkedAnswer===allQuest[i].ans) {
 		score++;
 	}
 	i++;
 	reDeCheck();
 	if (i<allQuest.length) { 
 		loadQuestion();
 	}

 	else{
 		let name = localStorage.getItem('name');
 		boom.style.display='none';
 		showAnswerWrap.innerHTML= `<div class=" pt100 center area ">
 		<h5>Hey ${name}! <br>Your Score ${score}/${allQuest.length}
 		</h5>
 		<a class="btn-main" href="index.html">Reset</a>	
 		</div>
 		`
 		localStorage.clear();
 	}
 });

