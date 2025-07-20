const toFileName = (name) => {
  return name.toLowerCase().replaceAll(" ", "_");
};

console.log(toFileName("Counting Duplicates") + ".js");
