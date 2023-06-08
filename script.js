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
  console.log("nTablesToMake", nTablesToMake);
  for (let c = 0; c < nTablesToMake; c++) {
    let newT = document.createElement("div");
    tablePlayer.appendChild(newT);
    newT.classList.add("tPlayer");

    for (let i = 0; i < maxPlayerN; i++) {
      let num = document.createElement("div");

      let rnd = Math.floor(Math.random() * maxTableN + 1);
      num.innerText = rnd;
      playerTableNumbers.push(rnd);
      console.log("c: ", c);
      num.classList.add("nPlayer");
      newT.appendChild(num);
    }
    playerAllNumbers.push(playerTableNumbers);
    playerTableNumbers = [];
    console.log("playerAllNumbers", playerAllNumbers);
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
    if (n === nT) {
      console.log("trovato");
    }
  });

  // playerAllNumbers.forEach((e) => {
  //   e.forEach((e2) => {
  //     if (n === e2) {
  //       console.log("trovato");
  //     }
  //   });
  // });
};

const newNumberButton = document.getElementById("newNumberButton");
newNumberButton.addEventListener("click", newNumber);
