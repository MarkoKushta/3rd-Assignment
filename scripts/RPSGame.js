let flag = prompt("Do you wanna play Rock-Paper-Scissors?");
let startGame = flag.toUpperCase();
let result = "";
let winCount = 0;
let loseCount = 0;
let drawCount = 0;
game(startGame);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function game(startGame){
   
    if(startGame == "YES"){
        console.log("Rock-Paper-Scissors has Started!");
        console.log(" ");
        for(let i = 1; i <= 5; i++){

            let userPrompt = prompt("It's your turn: ");
            let playerSelection = userPrompt.toUpperCase();

            console.log("=================== Round " + i + " ===================");
            if(playerSelection == "ROCK" || playerSelection == "PAPER" || playerSelection == "SCISSORS"){
                playRound(playerSelection, getRandomInt(1, 3))
            }
            else {
                i--;
                alert("Please enter a proper value!");
                continue;
            }
            
        }
        console.log("Results: ")
        console.log("Wins: " + winCount);
        console.log("Losses: " + loseCount);
        console.log("Draws " + drawCount);

        if(winCount == loseCount){
            console.log("The game ended in a draw!");
        }

        else if(winCount > loseCount){
            console.log("YOU WON THE GAME!!!");
        }

        else if(loseCount > winCount){
            console.log("You lost the game ._.");
        }
    }
}

function playRound(playerSelection, computerSelection){

    switch (computerSelection){
/******************** 1 is Rock, 2 is Paper, 3 is Scissors **********************/
        case 1:

            if(playerSelection == "ROCK"){

                console.log("You play " + playerSelection);
                console.log("The computer plays ROCK");
                result = console.log("That's a Draw!");
                console.log(" ");
                return drawCount++;
    
            }
            
            else if(playerSelection == "PAPER"){

                console.log("You play " + playerSelection);
                console.log("The computer plays ROCK");
                console.log(playerSelection + " beats " + "ROCK!");
                result = console.log("You Win!");
                console.log(" ");
                return winCount++;
            
            }
    
            else if(playerSelection == "SCISSORS"){

                console.log("You play " + playerSelection);
                console.log("The computer plays ROCK");
                console.log("ROCK beats " + playerSelection + "!");
                result = console.log("You Lose!")
                console.log(" ");
                return loseCount++;

            }


           
        case 2:
            
            if(playerSelection == "ROCK"){

                console.log("You play " + playerSelection);
                console.log("The computer plays PAPER");
                console.log("PAPER" + " beats " + playerSelection + "!");
                result = console.log("You Lose!");
                console.log(" ");
                return loseCount++;

            }
                
            else if(playerSelection == "PAPER"){
                
                console.log("You play " + playerSelection);
                console.log("The computer plays PAPER");
                result = console.log("That's a Draw!");
                console.log(" ");
                return drawCount++;

            }
    
            else if(playerSelection == "SCISSORS"){
                
                console.log("You play " + playerSelection);
                console.log("The computer plays PAPER");
                console.log("SCISSORS" + " beat " + "ROCK!");
                result = console.log("You Win!");
                console.log(" ");
                return winCount++;

            }
            

        

        case 3:
            
            if(playerSelection == "ROCK"){
                
                console.log("You play " + playerSelection);
                console.log("The computer plays SCISSORS");
                console.log("ROCK" + " beats " + "SCISSORS!");
                result = console.log("You Win!");
                console.log(" ");
                return winCount++;

            }
                
            else if(playerSelection == "PAPER"){

                console.log("You play " + playerSelection);
                console.log("The computer plays SCISSORS");
                console.log("SCISSORS" + " beats " + playerSelection + "PAPER!");
                result = console.log("You Lose!");
                console.log(" ");
                return loseCount++;
            }
    
            else if(playerSelection == "SCISSORS"){

                console.log("You play " + playerSelection);
                console.log("The computer plays SCISSORS");
                result = console.log("That's a Draw!");
                console.log(" ");
                return drawCount++;

            }

             
    }
}



