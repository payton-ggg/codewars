const toFileName = (name) => {
	return name.toLowerCase().replaceAll(" ", "_");
};

console.log(toFileName("Square Every Digit") + ".js");
