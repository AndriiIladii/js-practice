const rps = (p1, p2) => {
  return p1 === "scissors" && p2 === "paper"
    ? "Player 1 won!"
    : p1 === "scissors" && p2 === "rock"
      ? "Player 2 won!"
      : p1 === "paper" && p2 === "scissors"
        ? "Player 2 won!"
        : p1 === "rock" && p2 === "scissors"
          ? "Player 1 won!"
          : p1 === "paper" && p2 === "rock"
            ? "Player 1 won!"
            : p1 === "rock" && p2 === "paper"
              ? "Player 2 won!"
              : "Draw!";
};

rps("rock", "scissors");

// Clever Solution
//   if (p1 === p2) return "Draw!";
//   var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//   if (p2 === rules[p1]) {
//     return "Player 1 won!";
//   }
//   else {
//     return "Player 2 won!";
//   }
