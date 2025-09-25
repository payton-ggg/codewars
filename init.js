const toFileName = (name) => {
  return name.toLowerCase().replaceAll(" ", "_");
};

console.log(toFileName("I love big nums and I cannot lie") + ".js");
