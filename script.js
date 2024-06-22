console.log("vaibhav");
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let msgcont = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");


 let turnO = true;

 const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

 ];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgcont.classList.add("hide");
}

 boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("click");
        // box.innerHTML="vk";
        if(turnO){
            box.innerHTML="O";
            turnO  = false;
        } else{
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
 }); 

const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled = true
    }

}
const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled = false
        box.innerText = "";
    }

}

 const showWinner = (winner) => {
    msg.innerText = `🍾Congratulation🍾, Winner is ${winner} `;
    msgcont.classList.remove("hide");
    disableBoxes();
 }

 const checkWinner = () => {
    for(pattern of winPatterns) {
        // console.log(pattern);
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if (pos1 === pos2 && pos2 === pos3){
                console.log("winner");

                showWinner(pos1);
            }
        }
    }
 };

 newBtn.addEventListener("click", resetGame);
 reset.addEventListener("click", resetGame);