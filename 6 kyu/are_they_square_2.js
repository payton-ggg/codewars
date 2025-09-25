function square(arr) {
  if (arr.length === 0) return undefined;

  arr = arr.flat(Infinity);

  return arr.some((el) => Math.sqrt(el).toString().split(".").length !== 1)
    ? false
    : true;
}

console.log(square([4, 9, [121], [16, [64], [8]]]));
