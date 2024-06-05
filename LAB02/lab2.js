// Importing the prompt package
const prompt = require('prompt');

// Function to generate computer selection
function generateComputerSelection() {
    const randomNumber = Math.random();
    if (randomNumber <= 0.34) {
        return 'PAPER';
    } else if (randomNumber <= 0.67) {
        return 'SCISSORS';
    } else {
        return 'ROCK';
    }
}

// Function to determine the winner
function determineWinner(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return "It's a tie";
    } else if (
        (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        return 'User Wins';
    } else {
        return 'Computer Wins';
    }
}

// Start the prompt
prompt.start();

// Get user selection
prompt.get(['userSelection'], function (err, result) {
    if (err) {
        return console.error('Error occurred: ', err);
    }
    const userSelection = result.userSelection.toUpperCase();

    // Generate computer selection
    const computerSelection = generateComputerSelection();

    // Display user and computer selections
    console.log('User selection:', userSelection);
    console.log('Computer selection:', computerSelection);

    // Determine the winner
    const resultMessage = determineWinner(userSelection, computerSelection);
    console.log('Outcome:', resultMessage);
});