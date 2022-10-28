const allWords = ["minotaur", "scylla", "charybdis", "kraken", "kelpie", "dracula", "smaug", "it", "pennywise", "frankenstein", "jabberwocky", "ghoul", "sirens", "cat", "medusa", "devil", "vampire", "basilisk", "annabell", "demon", "fox", "kraken", "echidna", "doppelganger", "sauron", "frodo", "babayaga"];
let selectedWord = "";
let gameOver = false;
let unscrambledCounter = 0;



function nextWord() {
  selectedWord = allWords[Math.floor(Math.random() * (allWords.length - 1))].toLowerCase();
  
  document.getElementById("scrambledWord").innerHTML = selectedWord
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("")
}

function check() {
  if (gameOver) { alert("The Game is over. Thanks for playing! Refresh to try again."); return false; }

  if (selectedWord === document.getElementById("myWord").value.toLowerCase().trim()) {
    alert("YES!");
    document.getElementById("unscrambled").innerHTML += `<div>${selectedWord}</div>`;
    document.getElementById("myWord").value = "";
    unscrambledCounter++;
    nextWord();
  } else {
    alert("WRONG!");
    giveUp();
  }
}

function giveUp() {
  document.getElementById("myWord").value = selectedWord;
  gameOver = true;
  alert("Game Over! You unscrambled " + unscrambledCounter + " words");
}

nextWord()