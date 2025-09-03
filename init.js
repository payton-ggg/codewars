const toFileName = (name) => {
  return name.toLowerCase().replaceAll(" ", "_");
};

console.log(toFileName("Is this a valid Tic Tac Toe position") + ".js");
