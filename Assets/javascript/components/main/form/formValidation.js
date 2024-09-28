let userIndexCheck = null;
let error = [
	[1, "Please fill data in the field"],
	[2, "Please match the given example"],
	[3, "Characters limit exceeded"]
];
// let errorContainer = [FnameErr, LnameErr, emailErr, contactErr, addressErr, bioErr];
let errorContainer = {
	user_Fname: FnameErr,
	user_Lname: LnameErr,
	user_email: emailErr,
	user_contact: contactErr,
	user_address: addressErr,
	user_bio: bioErr,
};

let successMsg = (errorMsgElem) => {
	let error = errorContainer[errorMsgElem.name];
	error.innerHTML = "";
	error.style.display = "none";
};
let errorMsg = (errorMsgElem, errorMsg_) => {
	let error = errorContainer[errorMsgElem.name];
	error.style.display = "block";
	error.innerHTML = errorMsg_;
};

let checkLength = (attribute, maxLen) => {
	let check = true;
	if (attribute.value.length > maxLen) {
		check = false;
	}
	return check;
};

let matchRegex = (attribute, regexSyn) => {
	let check = true
	if (!attribute.value.match(regexSyn)) {
		check = false;
	}
	return check;
}
let isNull = (attribute) => {
	let check = true;
	if (attribute.value == "" || attribute == null) {
		check = false;
	}
	return check;
};
// let profilePicValidation = (errorMsgElem) => {
// 	let imgCheck = true;
// 	if (
// 		!imgInput.files.length ||
// 		imgDisplay.src.includes("default_profile.png")
// 	) {
// 		imgCheck = false;
// 		errorMsg(errorMsgElem, `Please upload an image`);
// 	} else {
// 		successMsg(errorMsgElem);
// 		imgCheck = true;
// 	}
// 	return imgCheck;
// };
let elemValidationCheck = (attribute, regex, len) => {
	let checkVal = true;
	let maxLen = len;
	if (isNull(attribute)) {
		successMsg(attribute);
	}
	if (matchRegex(attribute, regex)) {
		successMsg(attribute);
	}
	if (checkLength(attribute)) {
		successMsg(attribute);
	}
	if (!isNull(attribute)) {

		errorMsg(attribute, error[0][1]);
		checkVal = false;

	}
	if (!matchRegex(attribute, regex)) {
		errorMsg(attribute, error[1][1]);
		checkVal = false;
	}
	if (!checkLength(attribute, maxLen)) {
		errorMsg(attribute, error[2][1]);
		checkVal = false;
	}
	return checkVal;
};

let Validation = () => {
	let validationCheck = true;
	// profilePicValidation(image_error_msg);
	elemValidationCheck(userFirstName, /^[a-zA-Z\s]*$/, 50);
	elemValidationCheck(userLastName, /^[a-zA-Z\s]*$/, 50);
	elemValidationCheck(userEmail, /^[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*@[A-Za-z]+\.[A-Za-z]{2,}$/, 100, emailErr);
	elemValidationCheck(userContactNumber, /^[0-9]{2,}[0-9]{7,}$/, 20);
	elemValidationCheck(userAddress, /^[a-zA-Z0-9\s,.'-]*$/, 150);
	elemValidationCheck(userBio, /^[a-zA-Z0-9,.!?'\s-]*$/, 300);

	let userData = [
		userFirstName.value,
		userLastName.value,
		userEmail.value,
		userContactNumber.value,
		userAddress.value,
		userBio.value,
		URL.createObjectURL(imgInput.files[0]),
	];
	if (validationCheck) {
		validateData(userData);
	}
	refreshRecords();
};
charLimitCheck();
