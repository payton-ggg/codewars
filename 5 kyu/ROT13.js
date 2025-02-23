function rot13(str) {
  const a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return str.replace(/[a-z]/gi, (c) => a[b.indexOf(c)]);
}

console.log(rot13("This is my first ROT13 excercise!"));
