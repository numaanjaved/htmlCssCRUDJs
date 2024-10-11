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

let Validation = () => {
	let validationCheck = true;
	let newForm = new FormValidation();
	let userData;
	if (!newForm.elemValidationCheck(userFirstName, /^[a-zA-Z\s]*$/, 30)) { validationCheck = false; }
	if (!newForm.elemValidationCheck(userLastName, /^[a-zA-Z\s]*$/, 30)) { validationCheck = false; }
	if (!newForm.elemValidationCheck(userEmail, /^[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*@[A-Za-z]+\.[A-Za-z]{2,}$/, 100)) { validationCheck = false; }
	if (!newForm.elemValidationCheck(userContactNumber, /^[0-9]{2,}[0-9]{7,}$/, 20)) { validationCheck = false; }
	if (!newForm.elemValidationCheck(userAddress, /^[a-zA-Z0-9\s,.'-]*$/, 150)) { validationCheck = false; }
	if (!newForm.elemValidationCheck(userBio, /^[a-zA-Z0-9,.!?'\s-]*$/, 300)) { validationCheck = false; }
	if (!newForm.profilePicValidation(imgInput)) { validationCheck = false; }

	if (selectUserType.value === "Admin") {
		if (!newForm.elemValidationCheck(userName, /^[a-zA-Z0-9_]*$/, 30)) { validationCheck = false; }
		if (!newForm.elemValidationCheck(userPassword, /^[0-9]*$/, 30)) { validationCheck = false; }
	}
	if (selectUserType.value === "Admin") {
		userData = [
			userFirstName.value,
			userLastName.value,
			userEmail.value,
			userContactNumber.value,
			userAddress.value,
			userBio.value,
			URL.createObjectURL(imgInput.files[0]),
			userName.value,
			userPassword.value
		];
	} else {
		userData = [
			userFirstName.value,
			userLastName.value,
			userEmail.value,
			userContactNumber.value,
			userAddress.value,
			userBio.value,
			URL.createObjectURL(imgInput.files[0])
		];
	}
	if (validationCheck) {
		if (selectUserType.value === "Admin") {
			if (userIndexCheck === null) {
				newForm.createAdmin(userData);
			} else { newForm.updateAdmin(userData); }
		} else {
			if (userIndexCheck === null) {
				newForm.createUser(userData);
			} else { newForm.updateUser(userData); }
		}
		form.reset();
		adminAttContainer.style.display = "none";
		admin_heading.style.display = "none";
		imgDisplay.src = "./Assets/images/default_profile.png";
	}
	console.log(usersDataArray);
	refreshRecords();
};
charLimitCheck();




// if (!elemValidationCheck(userFirstName, /^[a-zA-Z\s]*$/, 50)) { validationCheck = false; }