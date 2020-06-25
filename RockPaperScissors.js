const getUsersChoice = (userChoice) => {
  userChoice = userChoice.toLowerCase();
  if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
      return userChoice;
  }
  else {
      console.log("Error motherfucker! " + userChoice + " is not a choice!");
  }
}





// Function below 
const opponentChoice = () => {
  Math.ceil(0);
  Math.floor(2);
  const computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
      case 0:
          return "rock";
      case 1:
          return "paper";
      default:
          return "scissors";
  }
}





////////////////////////////////////
const determineWinner = (userChoice, opponentChoice) => {

  if (userChoice === opponentChoice) {
      return 'tie';
  }
  if (userChoice === "rock" && opponentChoice === "paper") {
      return 'You lose! paper beats rock';
  }
  if (userChoice === "rock" && opponentChoice === "scissors") {
      return 'You win! rock beats scissors!';
  }
  if (userChoice === 'scissors' && opponentChoice === 'paper') {
      return 'You win! scissors beats paper!';
  }
  if (userChoice === 'scissors' && opponentChoice === 'rock') {
      return 'You lose! rock beats scissors!';
  }
  if (userChoice === 'paper' && opponentChoice === 'rock') {
      return 'You win. paper beats rock'
  }
  if (userChoice === 'paper' && opponentChoice === 'scissors') {
      return 'You lose! scissors beat paper'
  }
}



function playGame() {
let  userChoice = getUsersChoice('scissors');
let  computerChoice = opponentChoice();
  if (userChoice) {
      console.log("You chose: " + userChoice);
      console.log("Computer's choice: " + computerChoice);
      console.log(determineWinner(userChoice, computerChoice));
  }
}

playGame();
