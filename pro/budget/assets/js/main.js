// variable declration
const enCalc = document.querySelector('.en-calc');
let budgetDigi = document.querySelector('.budget-digi');
let expenseDigi = document.querySelector('.expense-digi');
let balanceDigi = document.querySelector('.balance-digi');
let enBudget = document.querySelector('.en-budget');
const enForm= document.querySelector('#en-form')
const exForm = document.querySelector('#ex-form');
const exCalc = document.querySelector('.ex-calc');
const exTabElem = document.querySelector('.ex-tabElem');
const expValue = document.querySelector('.exp-value')
const expThing= document.querySelector('.exp-things');
let itemList = [];
let itemID = 0;
// ---main class and its prop
class Budget{
	constructor(enExp,enExpVal,itemID){
		this.enExp = enExp;
		this.enExpVal = enExpVal;
		this.itemID = itemID;   
	}
	static BudgetEntered(){
		budgetDigi.innerHTML= enBudget.value;
	}
	static ShowTab(){
		const dataOfTab=[];
		dataOfTab.forEach((obj)=>Budget.CrtTab(obj));
	}
	static CrtTab(obj){
		const exTabElem = document.querySelector('.ex-tabElem');
		let tr = document.createElement('tr');
		tr.innerHTML =`<td>${obj.enExp}</td>
						<td>${obj.enExpVal}</td>
						<td><a href="#" class="btn-sm btn del" data-id="${obj.itemID}">X</a></td>
		`;
		exTabElem.appendChild(tr);
	}
	static BudgetCalculate(){
		const expense = Budget.TotalExpense();
		let x = parseInt(budgetDigi.innerHTML)-expense;
		balanceDigi.textContent = x;
	}
	static TotalExpense(){
	  	let total = 0;
	    if(itemList.length > 0){
	      total = itemList.reduce(function(acc, curr){
	        acc += curr.enExpVal;
	        return acc;
	      }, 0)
	    } 
	    expenseDigi.textContent = total;
	    return total;  
    }
    static RemoveTab(eTar){
    	let id = parseInt(eTar.dataset.id);
    	if (eTar.classList.contains('del')) {
    		eTar.parentElement.parentElement.remove();
    		let temp = itemList.filter(function(obj){
    			return obj.itemID!==id;
    		});
    		itemList = temp;
    		Budget.BudgetCalculate();
    	}
    }
    static ShowAlertForBudForm(message,className){
    	const enBud = document.querySelector('.en-bud');
    	const div = document.createElement('div');
    	div.className = `alert alert-${className}`;
    	div.appendChild(document.createTextNode(message));
    	enBud.insertBefore(div,enForm);
    	setTimeout(()=>{document.querySelector('.alert').remove()},3000);
    }
    static ShowAlertForExpForm(message,className){
    	const enBud = document.querySelector('.en-expense');
    	const div = document.createElement('div');
    	div.className = `alert alert-${className}`;
    	div.appendChild(document.createTextNode(message));
    	enBud.insertBefore(div,exForm);
    	setTimeout(()=>{document.querySelector('.alert').remove()},3000);
    }
    static ShowAlertRemove(message,className){
    	const exTable = document.querySelector('.ex-table');
    	const exForm = document.querySelector('.table-responsive')
    	const div = document.createElement('div');
    	div.className = `alert alert-${className}`;
    	div.appendChild(document.createTextNode(message));
    	exTable.insertBefore(div,exForm);
    	setTimeout(()=>{document.querySelector('.alert').remove()},3000);
    }
}

//eventlistener for budget form submit
enCalc.addEventListener('click',(e)=>{
	e.preventDefault();
	if (enBudget.value===''|| enBudget.value<0) {
		Budget.ShowAlertForBudForm('Value cant be empty or Negative','danger')
		enForm.reset();
	}
	else{
		Budget.BudgetEntered();
		Budget.ShowAlertForBudForm('Value Added','success')
		enForm.reset();
	}
});
//eventlistener for expense form submit
exCalc.addEventListener('click',(e)=>{
	e.preventDefault();
	let expThingValue =expThing.value;
	let expValueVal = expValue.value;
	if (expThingValue===''|| expValueVal==='' || expValueVal<0) {
		Budget.ShowAlertForExpForm('Value cant be empty or Negative','danger')
		exForm.reset();
	}
	else{
		let expThingValue =expThing.value;
	    let expValueVal = expValue.value;
	    expValueVal = parseInt(expValueVal);
	    
		let budget = new Budget(expThingValue,expValueVal,itemID);
		itemID++;
        itemList.push(budget);
		Budget.CrtTab(budget);
		Budget.BudgetCalculate();
		Budget.ShowAlertForExpForm('Value Added','success');
		exForm.reset();
	}
});
// for deleting list eventListener
exTabElem.addEventListener('click',(e)=>{
	let eTar = e.target;
	Budget.RemoveTab(eTar);
	Budget.ShowAlertRemove('Expense Removed','info')
})