const toFileName = (name) => {
	return name.toLowerCase().replaceAll(" ", "_");
};

console.log(toFileName("Create Phone Number") + ".js");
