function solution(str) {
	let i = [];
	if (str.length % 2 === 0) {
		for (let j = 0; j <= str.length - 1; j += 2) {
			i.push(str[j] + str[j + 1]);
		}
	} else {
		for (let j = 0; j <= str.length - 2; j += 2) {
			i.push(str[j] + str[j + 1]);
		}
		i.push(str[str.length - 1] + "_");
	}

	return i;
}
