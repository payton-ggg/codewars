function digPow(n: number, p: number) {
	let x = String(n)
		.split("")
		.reduce((s, d, i) => s + Math.pow(Number(d), p + i), 0);
	return x % n ? -1 : x / n;
}

console.log(digPow(89, 1));
