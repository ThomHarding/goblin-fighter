export function renderGoblin(goblinObject) {
    let newGoblinDiv = document.createElement('div');
    let nameDiv = document.createElement('div');
    nameDiv.textContent = goblinObject.name;
    let hpDiv = document.createElement('div');
    hpDiv.textContent = 'Health: ' + goblinObject.hp;
    newGoblinDiv.classList.add('goblin');
    let powerDiv = document.createElement('div');
    powerDiv.textContent = 'Power: ' + goblinObject.power;
    newGoblinDiv.append(nameDiv, hpDiv, powerDiv);
    return newGoblinDiv;
}