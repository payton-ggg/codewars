function oddOne(arr) {
  return arr.findIndex((element) => element % 2 !== 0);
}

console.log(oddOne([2, 4, 6, 7, 10]));
