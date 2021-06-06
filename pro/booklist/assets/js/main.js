const form = document.querySelector('#form');
const tabElem = document.querySelector('.tabElem');
class Book {
	constructor(bookId,title,author,year){
		this.bookId = bookId;
		this.title= title;
		this.author = author;
		this.year = year;
	}
}
class Display{
	static tabData(){
		const digiData = StoreLocal.GetContent();
		digiData.forEach((obj)=>Display.crtTab(obj));
	}
	static crtTab(obj){
		const tabElem = document.querySelector('.tabElem');
		const tr = document.createElement('tr');
		tr.innerHTML=`
			<td>${obj.bookId}</td>
			<td>${obj.title}</td>
			<td>${obj.author}</td>
			<td>${obj.year}</td>
			<td><a class ="btn btn-sm del">X</a></td>
		`;
		tabElem.appendChild(tr);
	}
	static showAlert(message,className){
		const formArea = document.querySelector('.formArea');
		const div = document.createElement('div');
		div.className=`alert alert-${className}`;
		div.appendChild(document.createTextNode(message));
		formArea.insertBefore(div,form);
		setTimeout(()=>document.querySelector('.alert').remove(),3000);
	}
	 
	static removeContent(e){
		if(e.classList.contains('del')){
			e.parentElement.parentElement.remove();
		}
	}
	
}
class StoreLocal{
	static GetContent(){
		let tabCnt;
		if(localStorage.getItem('tabCnt')===null){
			tabCnt = [];
		}
		else{
			tabCnt = JSON.parse(localStorage.getItem('tabCnt'));
		}
		return tabCnt;
	}
	
	static AddCont(obj){
		const tabCnt = StoreLocal.GetContent();
		tabCnt.push(obj);
		localStorage.setItem('tabCnt',JSON.stringify(tabCnt));
	}
	
	static RemoveContent(year){
		const tabCnt = StoreLocal.GetContent();
		tabCnt.forEach((book,index)=>{
			if (book.year===year) {
				tabCnt.splice(index,1);
			}
		})
		localStorage.setItem('tabCnt',JSON.stringify(tabCnt));
	}
}
form.addEventListener('submit',(e)=>{
	e.preventDefault();
	const bookId = document.querySelector('#bookId').value;
	const title = document.querySelector('#title').value;
	const author = document.querySelector('#author').value;
	const year = document.querySelector('#year').value;
	if(bookId ===''|| title ===''|| author ==='' || year ===''){
		Display.showAlert('fill all the blanks',"danger");
	}
	else{
		const book = new Book(bookId,title,author,year);
		Display.crtTab(book);
		// adding it into localStore
		StoreLocal.AddCont(book);
		Display.showAlert('Content Added','success');
		form.reset();
	}
});
tabElem.addEventListener('click',(e)=>{
  let eTar = e.target;
  Display.removeContent(eTar);
  StoreLocal.RemoveContent(eTar.parentElement.previousElementSibling.textContent);
  Display.showAlert('Content Removed','success')
});
document.addEventListener('DOMContentLoaded',Display.tabData);