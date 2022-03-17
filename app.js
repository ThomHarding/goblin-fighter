import { renderGoblin } from './render-utils.js';

let createGoblinButton = document.getElementById('make-goblin-button');
let playerHpDisplay = document.getElementById('player-hp');
let numDefeatedDisplay = document.getElementById('num-defeated');
let goblinDisplay = document.getElementById('goblin-holder');
let goblinNameInput = document.getElementById('goblin-name');

let playerHp = 10;
let goblinArray = [
    { name: 'Jimothy', id: 0, hp: 1 },
    { name: 'The Captain', id: 1, hp: 15 },
];
let defeatedGoblins = 0;
let goblinId = 2;

createGoblinButton.addEventListener('click', () => {
    let newGoblin = { name: goblinNameInput.value || 'A Goblin', id: goblinId, hp: 3 };
    goblinId++;
    goblinArray.push(newGoblin);
    displayGoblins();
});

function clickGoblin(goblin) {
    let playerHit = Math.random();
    let goblinHit = Math.random();
    if (goblin.name === 'The Captain') {
      //special captain math. replace later with captain just having higher power
        if (playerHit > 0.9) {
            alert('Your attack damages the thing... barely.');
            goblin.hp--;
        } else {
            alert('The Captain parries your attack effortlessly.');
        }
    } else if (playerHit > 0.5) {
      //if you hit the goblin
        alert('Your attack connects.');
        goblin.hp--;
        if (goblin.hp === 0) {
          //goblin est dead
            defeatedGoblins++;
            numDefeatedDisplay.textContent = 'Number Defeated: ' + defeatedGoblins;
        }
    } else {
        alert('The creature scrambles out of the way of your swing.');
    } if (goblinHit < 0.5) {
      //if the goblin hits you
        alert('The goblin lands a blow on you.');
        playerHp--;
        playerHpDisplay.textContent = 'Your Health: ' + playerHp;
        if (playerHp === 0) {
          //hp out. rip. game over
            createGoblinButton.disabled = true;
            goblinNameInput.value = '';
            alert('You have died. Refresh the page if another hero stands against the goblin tide.');
        }
    } else {
        alert('You dodge the goblin\'s swing.');
    }
    displayGoblins();
}

function displayGoblins() {
    goblinDisplay.innerHTML = '';
    for (let goblin of goblinArray) {
        let goblinDiv = renderGoblin(goblin);
        goblinDiv.classList.add('goblin');
        if (goblin.hp === 0) {
            goblinDiv.classList.add('dead');
        } else if (goblin.name === 'The Captain') {
            goblinDiv.classList.add('captain');
        }
        goblinDiv.addEventListener('click', () => {
            clickGoblin(goblin, goblinDiv);
        });
        goblinDisplay.appendChild(goblinDiv);
    }
}

displayGoblins();