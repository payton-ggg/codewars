function duplicateCount(text) {
  const Obj = new Object();
  let count = 0;

  text
    .toLowerCase()
    .split("")
    .forEach((element) => {
      Obj[element] = element in Obj ? 1 : 0;
    });
  Object.values(Obj).forEach((el) => {
    el === 1 ? count++ : count;
  });
  return count;
}

console.log(duplicateCount("aabBcde"));
