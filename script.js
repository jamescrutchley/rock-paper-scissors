const buttonList = Array.from(document.querySelectorAll('button'));
const numRounds = document.querySelector('.results').children[0];
const currentWinner = document.querySelector('.results').children[1];
const playerScore = document.querySelector('.results').children[2];
const botScore = document.querySelector('.results').children[3];
const firstToFive = document.querySelector('.results').children[4];

const yourChoiceText = document.querySelector('.choices').children[0];
const botChoiceText = document.querySelector('.choices').children[1];


let botWins = 0;
let wins = 0;

const refreshScores = (winner) => {

    if (winner == 'draw') {
        return;
    }

    (winner == 'player') ?
    playerScore.textContent = `Your Score: ${++wins}` :
    botScore.textContent = `Computer Score: ${++botWins}`

    if ((botWins > 4) || (wins > 4)) {
        (wins > 4) ?
        firstToFive.textContent = "You're First to Five!" :
        firstToFive.textContent = "Computer is First to Five!";
    }
}


const game = (e) => {

    let player = e.target.textContent.toLowerCase();
    console.log(player);
    yourChoiceText.textContent = `You chose: ${player}`

    let bot = botChoice();
    console.log(bot);
    botChoiceText.textContent = `Computer chose: ${bot}`

    let winner = checkWinner(bot[0], player[0]);

    switch(winner) {
        case "draw":
            currentWinner.textContent = 'Draw'
            break;
        case "player":
            currentWinner.textContent = 'You won'
            break;
        case "bot":
            currentWinner.textContent = 'You lost'
            break;
    }

    refreshScores(winner);

}

buttonList.forEach(button => button.addEventListener('click', game))


let botChoice = () => {
    const choices = ['rock','paper','scissors'];
    for (let i = 2; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [choices[i], choices[j]] = [choices[j], choices[i]]
    }
    return choices[0];
}

// let playerChoice = () => {
//     let choice = prompt('choose')
//     while ((choice != 'p') && (choice != 'r') && (choice != 's')) {
//         choice = prompt('choose');
//         console.log('choose again');
//     }
//     return choice;
// }

const checkWinner = (botChoice, userChoice) => {
    let winner;
    console.log(`You have ${userChoice}\nBot has ${botChoice}`)
    if (userChoice == botChoice) {
        winner = 'draw';
    } else if (userChoice == 'r') {
        (botChoice == 'p') ?
            winner = 'bot' : 
            winner = 'player'
    } else if (userChoice == 'p') {
        (botChoice == 's') ? 
            winner = 'bot' : 
            winner = 'player'
    } else if (userChoice == 's') {
        (botChoice == 'r') ? 
            winner = 'bot' : 
            winner = 'player'
    }
    return winner;
}

// const game = () => {
//     roundWins = 0;
//     for (i = 0; i < 5; i++) {
//         if (checkWinner(botChoice(), playerChoice()) == 1) {
//             roundWins += 1;
//         } else {}
//     }
//     console.log(`You won ${roundWins} rounds out of 5`);
    
// }

