let digit = document.querySelectorAll(".digit");
let result = document.querySelector(".result");
let buttons = document.querySelectorAll('button');
let clear = document.querySelector('.clear');
let del = document.querySelector('.del');
let equalRes = document.querySelector('.equalRes');
let buttonText;
let inputValue='';
for (item of buttons) {
	item.addEventListener('click',(e)=>{
		buttonText = e.target.value;
		result.value+=buttonText;
	});
}

const clearAll =()=>{
	clear.addEventListener('click',()=>{
		result.value="";
	});
}
const deletePre = ()=>{
	del.addEventListener('click',()=>{
		if (result.value.length) {
					var res = result.value.slice(0,-4);
		result.value= res;
		}
	});
}
const getResult =()=>{
	equalRes.addEventListener('click',()=>{
		result.value = eval(result.value);
	});
}
getResult();
deletePre();	
clearAll();