export function renderGoblin(goblinObject) {
    let newGoblinDiv = document.createElement('div');
    let nameDiv = document.createElement('div');
    nameDiv.textContent = goblinObject.name;
    newGoblinDiv.appendChild(nameDiv);
    let hpDiv = document.createElement('div');
    hpDiv.textContent = 'Health: ' + goblinObject.hp;
    newGoblinDiv.appendChild(hpDiv);
    newGoblinDiv.classList.add('goblin');
    return newGoblinDiv;
}