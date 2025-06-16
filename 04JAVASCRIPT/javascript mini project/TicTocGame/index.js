const boxes=document.querySelectorAll(".box");
const gameinfo=document.querySelector(".game-info");
const gamebtn=document.querySelector(".btn");

let currentplayer;
let gamegrid;
const winingpostion=[ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
// let create a function to intailse
function initgame() {
    currentplayer="X";
    gamegrid=["","","","","","","","","",];
    gamebtn.classList.remove("active");
    gameinfo.innerText=`Current player-${currentplayer}`;

}
initgame();


// event listner
boxes.forEach((boxes,index)=>{
    box.addEventlistner("click",()=>{
        handleClick(index);
    })
});