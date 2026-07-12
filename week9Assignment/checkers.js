// Nickname/shortcut to the html div
let divCheckersBoard = document.getElementById("divCheckersBoard");

//2 dimensional array builds game board
// null - no piece on square
// w or b will add related CSS class
let arrPieces = [
  [null, "r", null, "r", null, "r", null, "r"],
  ["r", null, "r", null, "r", null, "r", null],
  [null, "r", null, "r", null, "r", null, "r"],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["b", null, "b", null, "b", null, "b", null],
  [null, "b", null, "b", null, "b", null, "b"],
  ["b", null, "b", null, "b", null, "b", null],
];

// Function that builds the Checkers board
function buildCheckersBoard() {
  // outer loop that creates 8 rows
  for (let i = 0; i < 8; i++) {
    // inner loop to create 8 columns
    for (let j = 0; j < 8; j++) {
      // create a div for each of the squares
      let divCheckersSquare = document.createElement("div");

      // Add id attribute for each square
      divCheckersSquare.setAttribute("id", "div" + i + j);

      // sets the default class for each square
      divCheckersSquare.className = "checkersSquare";

      // use modulus to alternate the colors of oyr squares
      // divide number by 2 and if remainder is 0 then number is even
      if ((i + j) % 2 == 0) {
        // Change every ither square to have a black background
        divCheckersSquare.style.backgroundColor = "black";
      }
      // Make it si it is only legal/available to move pieces on the light squares
      else {
        // add the event listener so when user clicks on the square they can move piece
        divCheckersSquare.addEventListener("click", movePiece);
      }

      // adds square to board
      divCheckersBoard.appendChild(divCheckersSquare);

      // checks to see if it needs to build a piece on square - if value in corresponding piece array is not null, build piece
      if (arrPieces[i][j]) {
        // specifiy the id for the piecem the css class for the piece and square where piece will be placed
        createPiece(
          "piece" + i + j,
          "checker-piece-" + arrPieces[i][j],
          divCheckersSquare,
        );
      }
    }
  }
}

// specifiy the id for the piecem the css class for the piece and square where piece will be placed
function createPiece(pieceId, pieceClass, theSquare) {
  // creates a div for new piece
  let divNewPiece = document.createElement("div");
  // Specifies the id for the new div
  divNewPiece.setAttribute("id", pieceId);
  // Specifies the css class to build round piece
  divNewPiece.classList.add("checker-piece");
  // Specifies the cs class to determine color
  divNewPiece.classList.add(pieceClass);
  // Add event handling so savePieceId function is called when piece is clicked
  divNewPiece.addEventListener("click", savePieceId);
  // add the round piece to the square div
  theSquare.appendChild(divNewPiece);
}

// Function to save piece id
function savePieceId(event) {
  // create a variable to store Id of the clicked piece
  let selectedPieceId = event.target.id;

  // removes word piece from id
  selectedPieceId = selectedPieceId.replace("piece", "");

  // store the id in secret span
  let spnSelectedSquare = document.getElementById("spnSelectedSquare");

  // store id in the secret span
  spnSelectedSquare.dataset.value = selectedPieceId;

  console.log("selectedPieceId=" + selectedPieceId);
}

// Function to handle the moving of the piece
function movePiece(event) {
  // get what square was clicked
  let newSquareId = event.target.id;

  // Remove any words than the actual number id
  newSquareId = newSquareId.replace("piece", "").replace("div", "");

  // shortcut to the secret span
  let spnSelectedSquare = document.getElementById("spnSelectedSquare");

  // Get the id from the secret span of the piece to move
  let pieceToMoveId = spnSelectedSquare.dataset.value;

  // Make sure that the user is not trying to move the piece to the same square
  if (newSquareId != pieceToMoveId) {
    // sets a pointers to old square
    let oldSquare = document.getElementById("div" + pieceToMoveId);

    // set a pointer to old piece
    let oldPiece = document.getElementById("piece" + pieceToMoveId);

    // get the class name of the old piece before removing it
    let oldPieceCSScolor = oldPiece.classList[1];

    // remove the old piece from the board
    oldSquare.removeChild(oldPiece);

    // create a pointer to new sqaure
    let divNewSquare = document.getElementById("div" + newSquareId);

    // create a new piece on the new square with same css class as old piece
    createPiece("piece" + newSquareId, oldPieceCSScolor, divNewSquare);

    // Resets the secret span to empty so new pieces can be moved without any issues
    spnSelectedSquare.dataset.value = "";
  }
}

// calls funcion to build Checkers
buildCheckersBoard();
