let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let msgbg = document.getElementById("msg");
let userWin;
let userscr = document.querySelector("#user-scr");
let compscr = document.querySelector("#comp-scr");

let userscore = 0;
let compscore = 0;
choices.forEach((choice)=>{
    // console.log(choice);
    let userChoice = choice.getAttribute("id");
    choice.addEventListener("click",(choice)=>{
        console.log(userChoice);
        playGame(userChoice);
    })
})

let gameDraw = () => {
        msg.innerText = `Draw!! both chose ${gencompChoice()}`;
        msgbg.style.backgroundColor ="#F9C80E";
}

let gencompChoice = () =>{
    let idx = Math.floor(Math.random()*3);
    let options = ["rock","paper","scissors"];
    return options[idx];
}

let playGame = (userChoice) =>{
    const compChoice = gencompChoice();
    console.log(compChoice);

    if (userChoice === compChoice){
        console.log("Game Draw!!")
        gameDraw();
    }

    else{
        userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true
        }
        else{
            userWin = compChoice === "rock" ? false : true
        }
    showWinner(userWin,userChoice,compChoice);
    }
}

let showWinner = (userWin,userChoice,compChoice) => {
    if(userWin === true){
        console.log("You Win")
        msg.innerText = `You won ${userChoice} beat ${compChoice}`;
        msgbg.style.backgroundColor ="#31CB00";
    }
    else{
        console.log("You Lose")
        msg.innerText = `You lose ${compChoice} beat ${userChoice}`;
        msgbg.style.backgroundColor ="#EF2D56";

    }

    if(userWin === true){
        userscore += 1;
        userscr.innerText = `${userscore}`;
    }
    else{
        compscore += 1;
        compscr.innerText = `${compscore}`;
    }
}




