const toFileName = (name) => {
  return name.toLowerCase().replaceAll(" ", "_");
};

console.log(toFileName("Odder Than the Rest") + ".js");
