const pass = document.querySelector('#pass');
const copy = document.querySelector('.copy');
const passlen = document.querySelector('.passlen');
const number = document.querySelector('.number');
const lowercase= document.querySelector('.lowercase');
const uppercase = document.querySelector('.uppercase');
const symbols = document.querySelector('.symbols');
const generate = document.querySelector('.generate');
const form = document.querySelector('#form')
// --------
const givenNum = "1234567890";
const givenUpper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const givenLower = "abcdefghijklmnopqrstuvwxyz";
const givenSymbol = "@#$%*^!&()_-.";

class ReturnPass{
	static ReturnDigi(){
		return  givenNum[Math.floor(Math.random()*givenNum.length)];
	}
	static ReturnUpper(){
		return givenUpper[Math.floor(Math.random()*givenUpper.length)];
	}
	static ReturnLower(){
		return givenLower[Math.floor(Math.random()*givenLower.length)];
	}
	static ReturnSymbol(){
		return givenSymbol[Math.floor(Math.random()*givenSymbol.length)];
	}
	static CheckedElem(){
		const pushedData =[];
		if (number.checked) {
			pushedData.push(ReturnPass.ReturnDigi());
		}
		if (uppercase.checked) {
			pushedData.push(ReturnPass.ReturnUpper());
		}
		if (lowercase.checked) {
			pushedData.push(ReturnPass.ReturnLower());
		}
		if (symbols.checked) {
			pushedData.push(ReturnPass.ReturnSymbol());
		}
		if (pushedData.length===0) {
			return '';
			
		}
		return pushedData[Math.floor(Math.random()*pushedData.length)];
	}
	static ShowAlert(message,className){
		const pgHead = document.querySelector('.pg-head');
		const pgBody = document.querySelector('.pg-body');
		const div = document.createElement('div');
		div.className = `alert alert-${className}`;
		div.appendChild(document.createTextNode(message));
		pgBody.insertBefore(div,pgHead);
		setTimeout(()=>document.querySelector('.alert').remove(),3000);
	}
	static getPass(){
			const lengthOfPass = passlen.value;
			let generatedPass ='';
			for(let i=0;i<lengthOfPass;i++){
				let chekedElem = ReturnPass.CheckedElem();
				generatedPass += chekedElem;
			}
			pass.innerHTML = generatedPass;
	}
	static CopyToClip(){
		 let range = document.createRange();
         range.selectNode(document.getElementById("pass"));
         window.getSelection().removeAllRanges(); 
         window.getSelection().addRange(range); 
         document.execCommand("copy");
         window.getSelection().removeAllRanges();
         ReturnPass.ShowAlert('Password has been copied','info');
         pass.innerText ='';
	}
}

generate.addEventListener('click',()=>{
	ReturnPass.getPass();
	const lengthOfPass = passlen.value;
	if (lengthOfPass.length===0) {
		ReturnPass.ShowAlert('Fill length of Password','danger');
	}
	else if(lengthOfPass>0&&!number.checked&&!lowercase.checked&&!uppercase.checked&&!symbols.checked){
		ReturnPass.ShowAlert('chose atleast one checkbox','danger')	
	}
	else{
		ReturnPass.ShowAlert('Password Generated','success');
	}
	
	form.reset();
});
copy.addEventListener('click',()=>{
	const passValue = pass.innerText;
	if (passValue.length===0) {
		ReturnPass.ShowAlert('Empty Password Field','danger')
	}
	else{
		ReturnPass.CopyToClip();
	}
});