function openPlayerConfig(event){                   
    editedPlayer=+event.target.dataset.playerid;   //+ will convert it to number from string
    playerconfigOverlayElement.style.display="block";
    backDropElement.style.display="block";

}
function closePlayerConfig(){ 
    playerconfigOverlayElement.style.display="none";
    backDropElement.style.display="none";
    formElement.firstElementChild.classList.remove("error");
    errorsOutputElement.textContent="";
    formElement.firstElementChild.lastElementChild.value="";
}

function savePlayerConfig(event){ 
event.preventDefault();
const formData= new FormData(event.target);
const enteredPlayername=formData.get("playername").trim();

if(!enteredPlayername){
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent="Please enter a valid name first";
    return;
}

const updatedPlayerDataElement=document.getElementById("player-"+ editedPlayer +"-data");
updatedPlayerDataElement.children[1].textContent=enteredPlayername;

if(editedPlayer===1){
    players[0].name=enteredPlayername;
} else{
    players[1].name=enteredPlayername;
}

closePlayerConfig();

}
