const toFileName = (name) => {
  return name.toLowerCase().replaceAll(" ", "_");
};

console.log(toFileName("Objectify a URL Query String") + ".js");
