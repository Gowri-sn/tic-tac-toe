let boxes = document.querySelectorAll('.box');

let resetBtn = document.querySelector('#reset-btn');

let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let draw = document.querySelector('.draw');

let turn0 = true; //playerX, player0

const winPattern = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],

];
let count =0;
boxes.forEach((box) => {

  box.addEventListener('click', ()=> {
    count++;
    console.log('box was clicked');
    if(turn0){ //player 0
      box.innerText = '0';
    box.classList.add('zero');
      turn0 = false;
    } else{ 
      //playerX
      box.innerText = 'X';
      box.classList.add('xxx');
      turn0 = true;
    }
    box.disabled = true;
    let isWinner = checkWinner();
    //console.log(count);
    if(count == 9 && !isWinner){
      drawMatch();
    }

  })
})

const resetGame = ()=>{
  turn0 = true;
  enabledBoxes();
  msgContainer.classList.add('hide');
}



const disabledBoxes = () =>{
  for(box of boxes){
    box.disabled = true;
  }
}

const enabledBoxes = () =>{
  for(box of boxes){
    box.disabled = false;
    box.innerText = '';
  }
}

const showwinner = (winner) =>{
  msg.innerText = `Congragulations, the winner is ${winner}`;
  msgContainer.classList.remove('hide');
  disabledBoxes();


}

let drawMatch = () => {

  draw.innerText = `It's a draw`;
  msgContainer.classList.remove('hide');
  disabledBoxes();
  
}



const checkWinner = () =>{

  for(let patterns of winPattern){
    //console.log(patterns[0], patterns[1], patterns[2]);
    //console.log(boxes[patterns[0]].innerText,
      // boxes[patterns[1]].innerText, 
       //boxes[patterns[2]].innerText);
    
  let pos1val =  boxes[patterns[0]].innerText;
  let pos2val = boxes[patterns[1]].innerText;
  let pos3val = boxes[patterns[2]].innerText;

  if(pos1val != '' && pos2val != '' && pos3val != ''){
    if(pos1val === pos2val && pos2val === pos3val){
      console.log('winner', pos1val);
      showwinner(pos1val);

    } 

  } 
     
  }
  
}



newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);