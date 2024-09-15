let userScore=0;
let computer=0;
const chos= document.querySelectorAll(".cho");
const result=document.querySelector(".massage1");
const com=document.querySelector(".massage2");
const you=document.querySelector("#you");
const com1=document.querySelector("#com");


const comChoice=()=>{
    const options=["rock","paper","scissor"];
    let index=Math.floor(Math.random()*3);
    console.log("comChoice=",options[index]);
    com.innerText="Computer Choice: "+options[index];
    return options[index];
};


const playGame=(userChoice)=>{
    console.log("userChoice=",userChoice);
    const comChoice1=comChoice();
    if(comChoice1==userChoice){
        result.innerText="Game Draw";
        result.style.color="gray";
    }
    else if(comChoice1==="rock" && userChoice==="paper"){
        result.innerText="win"
        result.style.color="green";
        userScore+=1;
        you.innerText=userScore;
    }
    else if(comChoice1==="paper" && userChoice==="scissor"){
        result.innerText="win"
        result.style.color="green";
        userScore+=1;
        you.innerText=userScore;
    }
    else{
        result.innerText="lose"
        result.style.color="red";
        computer+=1;
        com1.innerText=computer;
    }
};


chos.forEach((cho)=>{
    // console.log(cho);
    cho.addEventListener("click",()=>{
        const userChoice=cho.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});