required html:
player
  hp
goblin
  name
make new goblin button
number of goblins defeated

required js:

variables
player hp
array of goblins
defeated goblin count
number of goblins

player
  nothing, i think
goblin
  event listener on click
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
      displayGoblins();
      if user hp = 0 {
        for each button on page {
          buttons.disabled = true;
        }
      }
    } else {
      alert to show no goblin hit
      displayGoblins();
    }

create goblin button
  event listener on click
    make goblin object
      input form.value, goblin number, hp (3)
    renderGoblin

functions:
renderGoblin(goblinObject)
  make div
  make children using goblin object data as appropriate
  append children
  return div

displayGoblins()
  clear goblin display div
  for each goblin in goblins array
    display to goblins div