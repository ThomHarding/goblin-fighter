let createGoblinButton = document.getElementById('make-goblin-button');
let playerHpDisplay = document.getElementById('player-hp');
let numDefeatedDisplay = document.getElementById('num-defeated');
let goblinDisplay = document.getElementById('goblin-holder');
let goblinNameInput = document.getElementById('goblin-name');

let playerHp = 0;
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
        goblinDiv.addEventListener('click', () => {
      /*event listener on click
    math.random to determine hit
    math.random to determine goblin hit
    if hit {
      alert to show hit
      displayGoblins();
      if goblin hp = 0 {
        disable goblin button
        change its display somehow? make it red and strikethrough?
      }
    } else {
      alert to show no hit
      displayGoblins();
    } if goblin hit {
      alert to show goblin hit
      playerHp--;
      displayGoblins();
      if user hp = 0 {
        let buttons = document.querySelectorAll('button');
        for (let button of buttons) {
          button.disabled = true;
        }
      }
    } else {
      alert to show no goblin hit
      displayGoblins();
    }*/
        });
        goblinDisplay.appendChild(goblinDiv);
    }
}