const cross = 'cross';
const circle = 'circle';
const winArr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let turn;
const cell = document.querySelectorAll('.cell');
const result =document.querySelector('.result');
const resetDiv = document.querySelector('.resetDiv');
const reset = document.querySelector('.reset');
// ===
const TargetCell = (e) =>{
	const eTar = e.target;
	const currentClass = turn?circle:cross;
	AddSign(eTar,currentClass);
	if (CheckRes(currentClass)) {
      EndGame(false)
    } 
    else if (Draw()) {
     EndGame(true)
    } 
    else {
      TurnChange();
    }
	
}
// ===
const Start=()=>{
	turn = false;
	cell.forEach(cell=>{	
		cell.addEventListener('click',TargetCell,{once:true})
	})
}
Start();
// ----

// ======
const AddSign=(eTar,currentClass)=>{
	eTar.classList.add(currentClass);
}
// ======
const TurnChange = ()=>{
	turn = !turn;
}
// ======
const CheckRes = (currentClass) =>{
	  return winArr.some(e => {
    return  e.every(index => {
      return cell[index].classList.contains(currentClass)
    })
  })
}
// ======
const EndGame =(draw) =>{
  if (draw) {
    result.innerText = 'Draw!'
  } else {
    result.innerText = `${turn ? "O's" : "X's"} Wins!`
  }
  resetDiv.classList.add('show');
  Reset();
}
const Reset =() =>{
	reset.addEventListener('click',()=>{
		location.reload();
	})
}
// ==========
const Draw=()=> {
  return [...cell].every(cell => {
    return cell.classList.contains(cross) || cell.classList.contains(circle)
  })
}
