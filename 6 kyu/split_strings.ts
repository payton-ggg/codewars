function solution(str: string): string[] {
	const result: string[] = [];
	if (str.length % 2 === 0) {
		for (let j = 0; j <= str.length - 1; j += 2) {
			result.push(str[j] + str[j + 1]);
		}
	} else {
		for (let j = 0; j <= str.length - 2; j += 2) {
			result.push(str[j] + str[j + 1]);
		}
		result.push(str[str.length - 1] + "_");
	}

	return result;
}
