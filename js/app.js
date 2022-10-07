const allButtons = document.querySelectorAll('.btn');
//button handle function
function buttonHandle(i) {
  allButtons[i].addEventListener('click', function () {
    const players = document.querySelectorAll('.player-name');
    document
      .getElementById('card1')
      .appendChild(createList(players[i].innerText));
    if (i == 0) {
      document.getElementById('player1-btn').disabled = true;
    }
    if (i == 1) {
      document.getElementById('player2-btn').disabled = true;
    }

    if (i == 2) {
      document.getElementById('player3-btn').disabled = true;
    }
    if (i == 3) {
      document.getElementById('player4-btn').disabled = true;
    }
    if (i == 4) {
      document.getElementById('player5-btn').disabled = true;
    }
    if (i == 5) {
      document.getElementById('player6-btn').disabled = true;
    }
    if (i == 6) {
      document.getElementById('player7-btn').disabled = true;
    }
    if (i == 7) {
      document.getElementById('player8-btn').disabled = true;
    }
    let count = 0;
    if (createList()) {
      count = count + 1;
    }
    console.log(count);
  });
}

//handle function call
for (i = 0; i < 8; i++) {
  buttonHandle(i);
}

function createList(spacecrafts) {
  let listView = document.createElement('ol');
  let listViewItem = document.createElement('li');
  listViewItem.appendChild(document.createTextNode(spacecrafts));
  listView.appendChild(listViewItem);
  return listView;
}
