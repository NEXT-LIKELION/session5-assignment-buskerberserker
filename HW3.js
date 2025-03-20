console.log("가위바위보");

let computerRandomNumber = Math.random();
let computerChoice;

if (computerRandomNumber < 0.33) {
    computerChoice = "가위";
} else if (computerRandomNumber < 0.66) {
    computerChoice = "바위";
} else {
    computerChoice = "보";
}

let userChoice = prompt("가위, 바위, 보 중 하나");

if (
    (userChoice === "가위" && computerChoice === "보") ||
    (userChoice === "바위" && computerChoice === "가위") ||
    (userChoice === "보" && computerChoice === "바위")
) {
    console.log(`유저: ${userChoice} | 컴퓨터: ${computerChoice}`);
    console.log("유저 승리");
} else if (userChoice === computerChoice) {
    console.log(`유저: ${userChoice} | 컴퓨터: ${computerChoice}`);
    console.log("무승부");
} else {
    console.log(`유저: ${userChoice} | 컴퓨터: ${computerChoice}`);
    console.log("컴퓨터 승리");
}
