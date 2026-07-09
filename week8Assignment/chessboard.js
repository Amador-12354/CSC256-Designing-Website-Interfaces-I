// Function that builds the chessboard
function buildChessboard() {
  // Nickname/shortcut to the html div
  let chessBoard = document.getElementById("divChessboard");

  // outer loop that creates 8 rows
  for (let i = 0; i < 8; i++) {
    // inner loop to create 8 columns
    for (let j = 0; j < 8; j++) {
      // create a div for each of the squares
      let chessSquare = document.createElement("div");

      // adds css class to div
      chessSquare.className = "chessSquare";

      // use modulus to alternate the colors of oyr squares
      // divide number by 2 and if remainder is 0 then number is even
      if ((i + j) % 2 == 0) {
        // Change every ither square to have a black background
        chessSquare.style.backgroundColor = "black";
      }

      // adds square to board
      chessBoard.appendChild(chessSquare);
    }
  }
}

// calls funcion to build chessboard
buildChessboard();
