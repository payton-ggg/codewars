function digPow(n, p) {
  return Number.isInteger(
    n
      .toString()
      .split("")
      .map((i) => Number(i))
      .map((num) => {
        return num ** p++;
      })
      .reduce((accumulator, currentValue) => accumulator + currentValue) / n
  )
    ? n
        .toString()
        .split("")
        .map((i) => Number(i))
        .map((num) => {
          return num ** p++;
        })
        .reduce((accumulator, currentValue) => accumulator + currentValue) / n
    : -1;
}

console.log(digPow(89, 1));
