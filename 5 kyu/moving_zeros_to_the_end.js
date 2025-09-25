function moveZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(0) !== -1) {
      arr.splice(arr.indexOf(0), 1);
      arr.push(0);
    } else {
      break;
    }
  }
  return arr;
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
