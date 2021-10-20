const handOptions = {
  rock: "/assets/Rock.png",
  paper: "/assets/Paper.png",
  scissors: "/assets/Scissors.png",
};

let SCORE = 0;

const pickUserHand = (hand) => {
  let hands = document.querySelector(".hands");
  let result = document.querySelector(".contest");

  hands.style.display = "none";
  result.style.display = "flex";

  // enviar lo que el usuario eligio
  // document.getElementById("userPickImg").src = handOptions[hand.lowerCase()];
  document.getElementById("userPickImg").src = `/assets/${hand}.png`;

  pickCompterHand();

  referee(hand.toLowerCase(), pickCompterHand());
};

const pickCompterHand = () => {
  let hands = ["rock", "paper", "scissors"];
  let cpHand = hands[Math.floor(Math.random() * 3)];
  document.getElementById("computerPickImg").src = handOptions[cpHand];

  return cpHand;
};

const referee = (userHand, cpHand) => {
  console.log(userHand, cpHand);
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("TU PIERDES");
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("TU GANAS");
    setScore(SCORE + 1);
  }

  if (userHand == "paper" && cpHand == "paper") {
    setDecision("EMPATES");
  }

  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("TU GANAS");
    setScore(SCORE + 1);
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("EMPATES");
  }

  if (userHand == "rock" && cpHand == "paper") {
    setDecision("TU PIERDES");
  }

  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("TU PIERDES");
    setScore(SCORE + 1);
  }

  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("EMPATES");
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("TU GANAS");
    setScore(SCORE + 1);
  }
};

function setDecision(texto) {
  console.log(texto);
  const decision = document.getElementById("result_decision");
  decision.innerText = `${texto}!`;
}

const setScore = (score) => {
  SCORE = score
  document.getElementById("score").innerText = score;
};
const playAgain = () => {
  let hands = document.querySelector(".hands");
  let result = document.querySelector(".contest");
  hands.style.display = "flex";
  result.style.display = "none";
};
