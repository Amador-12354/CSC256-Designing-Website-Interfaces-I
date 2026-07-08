/* 
        Naruto - 6 letters, (across - tr)
        One Piece - 8 letters, (across - tr)
        Attack on Titan - 13 letters, (down - td)
        Fullmetal Alchemist - 18 letters, (across - td)
        Dragon Ball - 10 letters, (down - td)
        Jujutsu Kaisen - 13 letters (down - tr) */

/*
            <table>
                <tr>
                    <td><td>
                    <td><td>  
                </tr>
            </table> 
        */

function buildPuzzle(cols, rows) {
  // Will create the table in the HTML
  let puzzle = document.getElementById("puzzle");

  // nested loop to build out the table rows and columns (down)
  for (let i = 0; i < rows; i++) {
    // Build a row each time we loop through the outer loop
    let tr = document.createElement("tr");

    // Inner loop that creates each column/cell/td (across)
    for (let j = 0; j < cols; j++) {
      // Build a column in the table every time loop runs
      let td = document.createElement("td");
      // then adds column to the row in the outer loop
      tr.appendChild(td);
    }

    // after inner loop but before end of outer loop add row to the table
    puzzle.appendChild(tr);
  }
}

// Function will build a textbox for each letter in the word that starts at the specified area
function buildLetters(
  startingRow,
  startingCol,
  direction,
  word,
  table,
  showAnswer,
  clueNumber,
) {
  // Need to loop through word to build out each letter text box
  for (let i = 0; i < word.length; i++) {
    // set up variables to keep track of what row & column I am working with
    let rowIndex = 0;
    let colIndex = 0;

    // Configure the row or column counters
    if (direction == "across") {
      // if word goes across, code will keep same row number for whole build
      rowIndex = startingRow;
      // colIndex needs to increase by 1 every time loop runs
      colIndex = startingCol + i;
    }
    // If word goes down, do opposite
    else {
      // rowIndex needs to increase by 1 every time loop runs
      rowIndex = startingRow + i;
      // if word goes down, code will keep same column number for whole build
      colIndex = startingCol;
    }

    // Get current table row
    let tr = table.rows[rowIndex];
    // get current table data
    let td = tr.cells[colIndex];

    // configure clue number, if 1st letter
    if (i == 0) {
      // Make sure to give span a diff name than clue number
      let spnClueNumber = document.createElement("span");
      spnClueNumber.className = "clue-number";
      spnClueNumber.textContent = clueNumber;
      td.appendChild(spnClueNumber);
    }

    // Need to check and see if there is already a textbox in current cell
    if (!td.querySelector("input")) {
      // Create the textbox input that will be added to cell
      let input = document.createElement("input");
      input.setAttribute("type", "text");
      // Only allow 1 letter per textbox
      input.setAttribute("maxLength", "1");

      // variable to check if letter user adds is correct letter
      const correctLetter = word[i].toUpperCase();
      input.dataset.correct = correctLetter;
      // If showAnswer is true, add current letter to textbox
      if (showAnswer) {
        // Add the correct letter to input
        input.value = correctLetter;
      }

      // this will just add a class for where there is input to be white and not have like an outline of green from background color
      td.classList.add("letter-cell");
      // add new input textbox to cell
      td.appendChild(input);

      // Will detect if letter is wrong
      input.addEventListener("input", () => {
        const wrongLetter = input.value.toUpperCase();
        td.classList.toggle(
          "wrong",
          wrongLetter !== "" && wrongLetter !== input.dataset.correct,
        );
      });
    }
  }
}

// Set up array to hold list of words
let arrWords = [
  "Naruto",
  "OnePiece",
  "FullmetalAlchemist",
  "JujutsuKaisen",
  "AttackonTitan",
  "DragonBall",
];

// Will not show answers
let answersShown = false;

// this will show answers
document.getElementById("toggleAnswerBtn").addEventListener("click", () => {
  answersShown = !answersShown;
  document.getElementById("toggleAnswerBtn").textContent = answersShown
    ? "Hide Answers"
    : "Show Answers";
  renderPuzzle();
});

// Function will render table, letters, position, etc basically everything done in class will be under a function
function renderPuzzle() {
  // Clear table
  document.getElementById("puzzle").innerHTML = "";

  // Calls the function to build puzzle table structure
  // 18 columns because Fullmetal Alchemist has 18 letters
  // 13 rows because Attack on Titan has 13 letters
  buildPuzzle(18, 13);

  // Set up for shortcut/nickname to title
  const table = document.getElementById("puzzle");

  // Call the buildLetters function for each word
  buildLetters(6, 12, "across", arrWords[0], table, answersShown, 1); //Naruto
  buildLetters(12, 0, "across", arrWords[1], table, answersShown, 2); //OnePiece
  buildLetters(1, 0, "across", arrWords[2], table, answersShown, 3); //FullmetalAlchemist
  buildLetters(0, 1, "down", arrWords[3], table, answersShown, 1); //JujutsuKaisen
  buildLetters(0, 17, "down", arrWords[4], table, answersShown, 2); //AttackonTitan
  buildLetters(3, 9, "down", arrWords[5], table, answersShown, 3); //DragonBall
}

renderPuzzle();
