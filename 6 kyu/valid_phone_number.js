function validPhoneNumber(phoneNumber) {
	const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
	return phoneRegex.test(phoneNumber);
}
