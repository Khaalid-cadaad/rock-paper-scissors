// Good Luck! You got this 💪🏾
// Write your code here.

function playgames(player1, player2){
    player1 = player1.tolowerCase();
    player2 = player1.tolowerCase();

    if(player1 === player2){
        return "tie";
    }

    if (
        (player1 === "rock" && player2 === "scissors" ) ||
        (player1 === "rock" && player2 === "paper" ) ||
        (player1 === "rock" && player2 === "rock" ) 
    )
    {
        return "player 1 wins";
    } else if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "scissors" && player2 === "paper") ||
        (player1 === "paper" && player2 === "rock")
    ){
        return "player 2 wins";
    } 
    
    else{
        return "invalid input";
    }


}