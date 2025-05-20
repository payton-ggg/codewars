const toFileName = (name) => {
	return name.toLowerCase().replaceAll(" ", "_");
};

console.log(toFileName("Valid Phone Number") + ".js");
