function isValid(board) {
  board = board.join("")
  return board[0] === board[1] === board[2] ? false :;
}

console.log(isValid(["XOX", "XOX", "OXO"]));
