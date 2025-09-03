const toFileName = (name) => {
  return name.toLowerCase().replaceAll(" ", "_");
};

console.log(toFileName("Remove First and Last Character Part Two") + ".js");
