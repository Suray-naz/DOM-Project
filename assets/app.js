//! ----------------------Selectors---------------------------

const selectionArticle=document.querySelector(".selection")


const yourChoiceDiv=document.getElementById("your-choice")
const pcChoiceDiv=document.getElementById("pc-choice")

const messagePar=document.querySelector(".message")


//! --------------------Variables--------------------------------

let userSelectImg=document.createElement("img")
let pcSelectImg=document.createElement("img")
let pcArr;
let pcRandom;


// colors:

const YELLOW = "#ffc538"
const RED = "#fb778b";
const GREEN = "#5ab7ac";



//! -----------------------Event Listeners----------------------

selectionArticle.addEventListener('click', (e) =>{
    
    console.log(e.target.id);
    if(e.target.id){

    userSelectImg.src=`./assets/${e.target.id}.png`
    userSelectImg.alt=e.target.id
    yourChoiceDiv.appendChild(userSelectImg)

    createPcSelection()
    }
})


//! -----------------------Functions---------------------------

const createPcSelection=()=>{
    const pcArr=["rock","paper","scissor"]
    pcRandom=pcArr[Math.floor(Math.random() *3)]

    pcSelectImg.src=`./assets/${pcRandom}.png`
    pcSelectImg.alt=pcRandom
    pcChoiceDiv.appendChild(pcSelectImg)
    calculateResult()
}

const calculateResult = ()=>{
    console.log(userSelectImg.alt);
    console.log(pcSelectImg.alt);

    // esitlik durumu
    if(userSelectImg.alt === pcRandom){
        messagePar.textContent = "It's a draw"
    }
}

//! Ilkel yöntem

/*
const rockImg=document.getElementById("rock");
const paperImg=document.getElementById("paper");
const scissorImg=document.getElementById("scissor");

rockImg.addEventListener('click', () =>{

    const userSelectImg=document.createElement("img")
    userSelectImg.alt="rock"
    yourChoiceDiv.appendChild(userSelectImg)
})

paperImg.addEventListener('click', () =>{

    const userSelectImg=document.createElement("img")
    userSelectImg.alt="rock"
    yourChoiceDiv.appendChild(userSelectImg)
})

scissorImg.addEventListener('click', () =>{

    const userSelectImg=document.createElement("img")
    userSelectImg.alt="rock"
    yourChoiceDiv.appendChild(userSelectImg)
})
*/