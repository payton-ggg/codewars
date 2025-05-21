const toFileName = (name) => {
	return name.toLowerCase().replaceAll(" ", "_");
};

console.log(toFileName("Sort the odd") + ".js");
