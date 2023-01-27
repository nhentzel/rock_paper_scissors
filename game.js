function getComputerChoice(){
    const choice= ["Rock", "Paper", "Scissors"];
    var answer = choice[Math.floor(Math.random() * choice.length)]
    return(answer)
}