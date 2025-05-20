function validPhoneNumber(phoneNumber) {
	return phoneNumber.split(" ").length === 2
		? phoneNumber.split("-").length === 2
		: false;
}

console.log(validPhoneNumber("abc(123) 456-7890)"));
