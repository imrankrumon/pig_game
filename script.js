'use strict';

// const score0El = document.getElementById('score--0');
// const score1El = document.getElementById('score--1');
// const diceEl = document.querySelector('.dice');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const playersEl = document.querySelectorAll('.player');

// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');


// // Initial conditions
// let scores, currentScore, activePlayer, isPlaying;

// const init = function () {
//     scores = [0, 0];
//     currentScore = 0;
//     activePlayer = 0;
//     isPlaying = true;

//     score0El.textContent = 0;
//     score1El.textContent = 0;
//     current0El.textContent = 0;
//     current1El.textContent = 0;
//     diceEl.classList.add('hidden');
//     player0El.classList.remove('player--winner');
//     player1El.classList.remove('player--winner');
//     player0El.classList.add('player--active');
//     player1El.classList.remove('player--active');
// }

// init();

// const switchPlayer = function () {
//     currentScore = 0;
//     document.getElementById(`current--${activePlayer}`).textContent = currentScore;
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     playersEl.forEach((player) => player.classList.toggle('player--active'));
// }


// btnRoll.addEventListener('click', () => {
//     if (isPlaying) {
//         // 1. Genearte random dice roll
//         const dice = Math.floor(Math.random() * 6) + 1;

//         // 2. Display dice
//         diceEl.classList.remove('hidden');
//         diceEl.src = `dice-${dice}.png`;

//         // 3. Check for rolled 1
//         if (dice !== 1) {
//             // add dice to current score
//             currentScore += dice;
//             document.getElementById(`current--${activePlayer}`).textContent = currentScore;
//         } else {
//             // swith player
//             switchPlayer();
//         }
//     }
// })

// btnHold.addEventListener('click', () => {
//     if (isPlaying) {
//         // 1. Add current score to active player's score
//         scores[activePlayer] += currentScore;
//         document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

//         // 2. check if player's score >= 100
//         if (scores[activePlayer] >= 100) {
//             // Finish the game
//             isPlaying = false;
//             document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
//             document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
//             diceEl.classList.add('hidden');
//         } else {
//             // Switch player
//             switchPlayer();
//         }
//     }
// })

// btnNew.addEventListener('click', init)


const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1')

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Initial conditions
let isPlaying, scores, currentScore, activePlayer;

const init = function () {
    isPlaying = true;

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;

    score0El.textContent = 0;
    score1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

init();


const switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
}

btnRoll.addEventListener('click', () => {
    if (isPlaying) {
        // 1. Generate random dice roll
        const dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // 3. Check for rolled 1
        if (dice !== 1) {
            //  if no add dice roll to current score    
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // switch player
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click', () => {
    if (isPlaying) {
        // 1. Add current score to total score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        // 2. check if player score >= 100
        if (scores[activePlayer] >= 20) {
            // Finish game
            isPlaying = false;
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            diceEl.classList.add('hidden');
        } else {
            // Switch player
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click', init)