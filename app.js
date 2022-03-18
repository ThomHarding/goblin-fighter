import { renderGoblin } from './render-utils.js';

let createGoblinButton = document.getElementById('make-goblin-button');
let playerHpDisplay = document.getElementById('player-hp');
let numDefeatedDisplay = document.getElementById('num-defeated');
let goblinDisplay = document.getElementById('goblin-holder');
let goblinNameInput = document.getElementById('goblin-name');
let playerPowerDisplay = document.getElementById('player-power');

let playerHp = 10;
let goblinArray = [
    { name: 'Jimothy', id: 0, hp: 1, power: 1 },
    { name: 'The Captain', id: 1, hp: 15, power: 10 },
];
let defeatedGoblins = 0;
let goblinId = 2;
let playerPower = 1;

createGoblinButton.addEventListener('click', () => {
    let newGoblin = { name: goblinNameInput.value || 'A Goblin', id: goblinId, hp: 3, power: Math.ceil(Math.random() * 9) };
    goblinId++;
    goblinArray.push(newGoblin);
    displayGoblins();
});

function hitTarget(attPower, defPower) {
    return (Math.ceil((Math.random()) * attPower)) > (Math.ceil(Math.random() * defPower));
}

function clickGoblin(goblin) {
    if (hitTarget((playerPower + 1), goblin.power)) {
    //if you hit the goblin
        if (goblin.name === 'The Captain') {
            alert('Your attack damages the thing... barely.');
        } else {
            alert('Your attack connects.');
        }
        goblin.hp--;
        if (goblin.hp === 0) {
            //goblin est dead
            defeatedGoblins++;
            numDefeatedDisplay.textContent = 'Number Defeated: ' + defeatedGoblins;
        }
    } else {
        if (goblin.name === 'The Captain') {
            alert('The Captain parries your blow effortlessly.');
        } else {
            alert('The creature scrambles out of the way of your swing.');
        }
    } if (hitTarget(goblin.power, playerPower)) {
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