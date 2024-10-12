let userIndexCheck = null;
let error = [
	{ errorName: "Null Error", errorMessage: "Please fill data in the field" },
	{ errorName: "Format Error", errorMessage: "Please match the requested format" },
	{ errorName: "Limit Exceed", errorMessage: "Characters limit exceeded" },
	{ errorName: "No picture", errorMessage: "Please Upload an Image" }
];
let errorContainer = {
	user_Fname: FnameErr,
	user_Lname: LnameErr,
	user_email: emailErr,
	user_contact: contactErr,
	user_address: addressErr,
	user_bio: bioErr,
	admin_name: userNameErr,
	admin_password: userPassErr,
	image: image_error_msg
};
let reset = () => {
	form.reset();
	adminAttContainer.style.display = "none";
	admin_heading.style.display = "none";
	imgDisplay.src = "./Assets/images/default_profile.png";
};
let formValidation = () => {
	let validationCheck = true;
	let userInstance = new User();
	if (!userInstance.validator.elemValidationCheck(userFirstName, /^[a-zA-Z\s]*$/, 30)) { validationCheck = false; }
	if (!userInstance.validator.elemValidationCheck(userLastName, /^[a-zA-Z\s]*$/, 30)) { validationCheck = false; }
	if (!userInstance.validator.elemValidationCheck(userEmail, /^[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*@[A-Za-z]+\.[A-Za-z]{2,}$/, 100)) { validationCheck = false; }
	if (!userInstance.validator.elemValidationCheck(userContactNumber, /^[0-9]{2,}[0-9]{7,}$/, 20)) { validationCheck = false; }
	if (!userInstance.validator.elemValidationCheck(userAddress, /^[a-zA-Z0-9\s,.'-]*$/, 150)) { validationCheck = false; }
	if (!userInstance.validator.elemValidationCheck(userBio, /^[a-zA-Z0-9,.!?'\s-]*$/, 300)) { validationCheck = false; }
	if (!userInstance.validator.profilePicValidation(imgInput)) { validationCheck = false; }

	if (selectUserType.value === "Admin") {
		if (!userInstance.validator.elemValidationCheck(userName, /^[a-zA-Z0-9_]*$/, 30)) { validationCheck = false; }
		if (!userInstance.validator.elemValidationCheck(userPassword, /^[0-9]*$/, 30)) { validationCheck = false; }
	}
	let userData = [
		userFirstName.value,
		userLastName.value,
		userEmail.value,
		userContactNumber.value,
		userAddress.value,
		userBio.value,
		URL.createObjectURL(imgInput.files[0])
	];

	if (selectUserType.value === "Admin") {
		userData.push(userName.value, userPassword.value);
	}
	if (validationCheck) {
		if (selectUserType.value === "Admin") {
			if (userIndexCheck === null) {
				userInstance.validator.createAdmin(userData);
			} else { userInstance.validator.updateAdmin(userData); }
		} else {
			if (userIndexCheck === null) {
				userInstance.validator.createUser(userData);
			} else { userInstance.validator.updateUser(userData); }
		}
		reset();
	}
	console.log(usersDataArray);
	refreshRecords();
};
charLimitCheck();