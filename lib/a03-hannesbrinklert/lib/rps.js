export default function rpsls(user) {

    const choice2idx = {
        rock: 0,
        paper: 1,
        scissors: 2,
    };

    const idx2choice = {
        0: "rock",
        1: "paper",
        2: "scissors",
    };


    let matrix = [
        [0, -1, 1],
        [1, 0, -1],
        [-1, 1, 0]
    ]

    let computer = Math.floor(Math.random() * 3);

    let outcome = new Object();

    if (user == null) {
        outcome.player = idx2choice[computer];
        return JSON.stringify(outcome);
    }

    outcome.player = user;
    outcome.opponent = idx2choice[computer];

    if (matrix[choice2idx[user]][computer] == 1) {
        outcome.result = "win";
    } else if ((matrix[choice2idx[user]][computer] == -1)) {
        outcome.result = "lose";
    }
    else {
        outcome.result = "tie";
    }

    return JSON.stringify(outcome);
}