const form = document.querySelector('#form');
class ToDoList {
	constructor(tId,task){
			this.tId = tId;
			this.task = task;
	}
}
class StoreData{
	static GetStoredData(){
		let dataContent;
		if (localStorage.getItem('dataContent')===null) {
			dataContent = [];
		}
		else{
			dataContent = JSON.parse(localStorage.getItem('dataContent'));
		}
		return dataContent;
	}
	static SetStoredDat(obj){
		let dataContent = StoreData.GetStoredData();
		dataContent.push(obj);
		localStorage.setItem('dataContent',JSON.stringify(dataContent));
	}
	static RemoveData(tId){
		let dataContent = StoreData.GetStoredData();
		dataContent.forEach((ToDoList,index)=>{
			if(ToDoList.tId===tId){
				dataContent.splice(index,1);
			}
		})
		localStorage.setItem('dataContent',JSON.stringify(dataContent));
	}
}
class TaskDis{
	static AddTask(){
		const dataOfTask =StoreData.GetStoredData();
	 dataOfTask.forEach((obj)=>TaskDis.CrtList(obj));
	}
	static CrtList(obj){
		const li = document.createElement('li');
		const ulList = document.querySelector('.ulList');
		li.innerHTML=`
			<span class="spandesign">${obj.tId}</span>${obj.task}
			<a  class="btn btn-sm del">X</a>
			
		`;
		ulList.appendChild(li);
	}
	static ShowAlert(msg,className){
		const div = document.createElement('div');
		div.className =`alert alert-${className}`;
		const formArea = document.querySelector('.formArea');
		div.appendChild(document.createTextNode(msg));
		formArea.insertBefore(div,form);
		setTimeout(()=>document.querySelector('.alert').remove(),3000)
	}
	static RemoveList(e){
		if(e.classList.contains('del')){
			e.parentElement.remove();
		}
	}
}
form.addEventListener('submit',(e)=>{
	e.preventDefault();
	const tId = document.querySelector('#tId').value;
	const task = document.querySelector('#task').value;
	if(tId===''|| task ===''){
		TaskDis.ShowAlert('fill up the form','danger');
		form.reset();
	}
	else{
		const toList = new ToDoList(tId,task);
		TaskDis.CrtList(toList);
		StoreData.SetStoredDat(toList);
		TaskDis.ShowAlert('Task Added','success');
		form.reset();
	}

});
const ulList = document.querySelector('.ulList');
ulList.addEventListener('click',(e)=>{
 	let eTar = e.target;
 	TaskDis.RemoveList(eTar);
 	TaskDis.ShowAlert('Task Removed','danger');
 	StoreData.RemoveData(eTar.previousElementSibling.textContent);
});
document.addEventListener('DOMContentLoaded',TaskDis.AddTask)