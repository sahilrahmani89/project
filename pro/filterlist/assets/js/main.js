const filterInput = document.querySelector('.filterInput');
filterInput.addEventListener('keyup',()=>{
let filterValue = document.querySelector('.filterInput').value.toUpperCase();
let ul = document.querySelector('#ulContacts');
let li = ul.querySelectorAll('li.li-item');
for (let i = 0; i<li.length; i++) {
	let a = li[i].getElementsByTagName('a')[0];
	if (a.innerHTML.toUpperCase().indexOf(filterValue)>-1) {
			li[i].style.display='';
	}
	else{
		li[i].style.display='none';
	}
}
});
class ContactDisplay{
	static ContactsAvailble(){
		const ContactsName = [
		{
			contacts:'apple'
		},
		{
			contacts:'adam'
		},
		{
			contacts:'amen'
		},
		{
			contacts:'sat'
		},
		{
			contacts:'ball'
		},
		{
			contacts:'Cat'
		},
		{
			contacts:'cyan'
		},
		{
			contacts:'coat'
		}
		];
		
        ContactDisplay.cap(ContactsName);

		ContactsName.sort(function (a,b){
			let cont1 = a.contacts.toUpperCase();
			let cont2 = b.contacts.toUpperCase();
			if (cont1<cont2) {
				return -1;
			}
			else if(cont1>cont2){
				return 1
			}
			else{
				return 0;
			}
		});
		 ContactsName.forEach((obj)=>ContactDisplay.CreateList(obj));
	}
	static cap(obj){ 
			 for(var i = 0; i < obj.length; i++){ 
			  for (var key in obj[i]) {
			   if(typeof obj[i][key] == "string"){
				    obj[i][key] = obj[i][key].charAt(0).toUpperCase()+obj[i][key].slice(1);
				   } 
			  }
			 }
			 return obj;
    } 
	static CreateList(obj){
		const ul = document.querySelector('#ulContacts');
		const li = document.createElement('li');
		li.className=`li-item`;
		li.innerHTML =`<a href="#">${obj.contacts}</a>`;
		ul.appendChild(li);
	}
	
}
document.addEventListener('DOMContentLoaded',ContactDisplay.ContactsAvailble);
