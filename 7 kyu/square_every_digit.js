function squareDigits(num) {
	return Number(num.toString().split("").map((num) => num * num).join(""))
}
