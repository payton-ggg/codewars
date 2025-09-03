function array(string) {
  string = string.split(",");
  string.shift();
  string.pop();
  return string.length > 0 ? string.join(",") : null;
}

console.log(array("A1,B2,C3,D4,E5"));
