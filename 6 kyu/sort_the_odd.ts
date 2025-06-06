function sortArray(array: number[]) {
	const odds = array.filter((x) => x % 2).sort((a, b) => a - b);
	return array.map((x) => (x % 2 ? odds.shift() : x));
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
