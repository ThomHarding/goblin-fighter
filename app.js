let createGoblinButton = document.getElementById('make-goblin-button');
let playerHpDisplay = document.getElementById('player-hp');
let numDefeatedDisplay = document.getElementById('num-defeated');
let goblinDisplay = document.getElementById('goblin-holder');
let goblinNameInput = document.getElementById('goblin-name');

let playerHp = 3;
let goblinArray = [
    { name: 'Jimothy', id: 0, hp: 3 },
    { name: 'The Captain', id: 1, hp: 15 },
];
let defeatedGoblins = 0;
let goblinId = 2;

createGoblinButton.addEventListener('click', () => {
    let newGoblin = renderGoblin({ name: goblinNameInput.value, id: goblinId, hp: 3 });
    goblinId++;
    goblinArray.push(newGoblin);
    displayGoblins();
});

function renderGoblin(goblinObject) {
    let newGoblinDiv = document.createElement('div');
    let nameDiv = document.createElement('div');
    nameDiv.textContent = goblinObject.name;
    newGoblinDiv.appendChild(nameDiv);
    let hpDiv = document.createElement('div');
    hpDiv.textContent = goblinObject.hp;
    newGoblinDiv.appendChild(hpDiv);
    newGoblinDiv.classList.add('goblin');
    return newGoblinDiv;
}

function displayGoblins() {
    goblinDisplay.innerHTML = '';
    for (let goblin of goblinArray) {
        let goblinDiv = renderGoblin(goblin);
        goblinDiv.classList.add('goblin');
        goblinDiv.addEventListener('click', () => {
          //should refactor this into its own function so i can just remove the event listener
            if (goblin.hp > 0 && playerHp > 0) {
                let playerHit = Math.random();
                let goblinHit = Math.random();
                if (goblin.name === 'The Captain') {
                    if (playerHit > 0.9) {
                        alert('Your attack damages the thing... barely.');
                        goblin.hp--;
                    } else {
                        alert('The Captain parries your attack effortlessly.');
                    }
                } else if (playerHit > 0.5) {
                    alert('Your attack connects.');
                    goblin.hp--;
                    if (goblin.hp === 0) {
                        goblinDiv.disabled = true;
                        goblinDiv.classList.add('dead');
                        defeatedGoblins++;
                        numDefeatedDisplay.textContent = 'Number Defeated: ' + defeatedGoblins;
                    }
                } else {
                    alert('The creature scrambles out of the way of your swing.');
                } if (goblinHit < 0.9) {
                    alert('The goblin lands a blow on you.');
                    playerHp--;
                    playerHpDisplay.textContent = 'Your Health: ' + playerHp;
                    if (playerHp === 0) {
                        createGoblinButton.disabled = true;
                        alert('You have died. Refresh the page if another hero stands against the goblin tide.');
                    }
                } else {
                    alert('You dodge the goblin\'s clumsy swing.');
                }
                displayGoblins();
            }
        });
        goblinDisplay.appendChild(goblinDiv);
    }
}

displayGoblins();