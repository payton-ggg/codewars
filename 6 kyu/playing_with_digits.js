function digPow(n, p) {
  const num =
    n
      .toString()
      .split("")
      .map((i) => Number(i))
      .map((num) => {
        return num ** p++;
      })
      .reduce((accumulator, currentValue) => accumulator + currentValue) / n;
  return Number.isInteger(num) ? num : -1;
}

console.log(digPow(89, 1));
