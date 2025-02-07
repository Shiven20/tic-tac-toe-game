const gameData=[
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]

let editedPlayer=0; //
let activePlayer=0;
 
let currentRound=1;
let gameIsOver=false;

const players=[
    { name:"",
      symbol:"X"
    },
    {
      name:"",
      symbol:"O"
    },
];

const playerconfigOverlayElement=document.getElementById("config-overlay"); //
const backDropElement= document.getElementById("backdrop"); //
const formElement=document.querySelector("form"); //
const errorsOutputElement=document.getElementById("config-errors"); //
const gameAreaElement=document.getElementById("active-game");//
const gameOverElement=document.getElementById("game-over");//
const remove=document.getElementById("remove-a");


const editPlayer1BtnElement=document.getElementById("edit-player-1-btn"); //
const editPlayer2BtnElement=document.getElementById("edit-player-2-btn"); //
const cancelConfigButtonElement=document.getElementById("cancel-config"); //
const startNewGameBtnElement=document.getElementById("start-game-btn"); //
//const gameFieldElements=document.querySelectorAll("#game-board li");
const gameBoardElements=document.getElementById("game-board"); //
const activePlayerName=document.getElementById("active-player-name");//


editPlayer1BtnElement.addEventListener("click",openPlayerConfig); //
editPlayer2BtnElement.addEventListener("click",openPlayerConfig); //

cancelConfigButtonElement.addEventListener("click",closePlayerConfig); //
backDropElement.addEventListener("click", closePlayerConfig); //

formElement.addEventListener("submit",savePlayerConfig); //

startNewGameBtnElement.addEventListener("click",startNewGame); //

//for (const gameFieldElement of gameFieldElements){
//gameFieldElement.addEventListener("click",selectGameField);
//}

gameBoardElements.addEventListener("click",selectGameField);  //
