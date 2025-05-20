function validPhoneNumber(phoneNumber) {
	return phoneNumber.split(" ").length === 2
		? phoneNumber.split("-").length === 2
			? isNaN(Number(phoneNumber[1]))
				? false
				: true
			: false
		: false;
}

console.log(validPhoneNumber("(123) 456-7890"));
