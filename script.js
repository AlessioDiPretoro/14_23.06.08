//creazione tabella
const maxTableN = 76;
const maxPlayerN = 24;
const table = document.getElementById("tableGame");
const tablePlayer = document.getElementById("tablePlayer");
const extractedN = [];
let playerAllNumbers = [];
let playerTableNumbers = [];

const nTables = document.getElementById("nTables");

const buildTable = function (n) {
  for (let i = 0; i < n; i++) {
    let num = document.createElement("div");
    num.innerText = i + 1;
    num.classList.add("nOnTable");
    table.appendChild(num);
  }
};
buildTable(maxTableN);

const buildPlayerTable = function (e) {
  let nTablesToMake = parseInt(nTables.value);
  e.preventDefault();
  for (let c = 0; c < nTablesToMake; c++) {
    let newT = document.createElement("div");
    tablePlayer.appendChild(newT);
    newT.classList.add("tPlayer");

    for (let i = 0; i < maxPlayerN; i++) {
      // let num = document.createElement("div");

      let rnd = Math.floor(Math.random() * maxTableN + 1);

      if (!playerTableNumbers.includes(rnd)) {
        playerTableNumbers.push(rnd);
        // num.innerText = rnd;
        // num.classList.add("nPlayer");
        // newT.appendChild(num);
      } else {
        i--;
      }
    }
    playerTableNumbers.sort(function (a, b) {
      return a - b;
    });
    console.log("playerTableNumbers", playerTableNumbers);

    for (let i = 0; i < maxPlayerN; i++) {
      let num = document.createElement("div");
      num.innerText = playerTableNumbers[i];
      num.classList.add("nPlayer");
      newT.appendChild(num);
      console.log("i", i);
    }

    playerAllNumbers.push(playerTableNumbers);
    playerTableNumbers = [];
  }
  nTables.value.innerText = "";
};

const makeTableButton = document.querySelector("form");
makeTableButton.addEventListener("submit", buildPlayerTable);

//estrae un numero e cerca dove segnarlo
const newNumber = function (e) {
  let n = Math.floor(Math.random() * maxTableN + 1);

  if (!extractedN.includes(n)) {
    let numOnTable = document.querySelectorAll(".nOnTable")[n - 1];
    numOnTable.classList.add("extract");
    extractedN.push(n);
  } else newNumber();

  let playerNumbers = document.querySelectorAll(".nPlayer");
  playerNumbers.forEach((nT) => {
    if (n === parseInt(nT.innerText)) {
      console.log("trovato", nT);
      nT.classList.add("extract");
    }
  });
};

const newNumberButton = document.getElementById("newNumberButton");
newNumberButton.addEventListener("click", newNumber);
