let userIndexCheck = null;
let error = [
	[1, "Please fill data in the field"],
	[2, "Please match the given example"],
	[3, "Characters limit exceeded"]
];
let errorContainer = [FnameErr, LnameErr, emailErr, contactErr, addressErr, bioErr];
errorContainer.forEach((cont) => {
	console.log(cont)
})
let successMsg = (errorMsgElem) => {
	errorMsgElem.innerHTML = "";
	errorMsgElem.style.display = "none";
};
let errorMsg = (errorMsgElem, errorMsg_) => {
	errorMsgElem.innerHTML = errorMsg_;
	errorMsgElem.style.display = "block";
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
let profilePicValidation = (errorMsgElem) => {
	let imgCheck = true;
	if (
		!imgInput.files.length ||
		imgDisplay.src.includes("default_profile.png")
	) {
		imgCheck = false;
		errorMsg(errorMsgElem, `Please upload an image`);
	} else {
		successMsg(errorMsgElem);
		imgCheck = true;
	}
	return imgCheck;
};
let elemValidationCheck = (attribute, regex, len, errorMsgElem) => {
	let checkVal = true;
	let maxLen = len;
	if (isNull(attribute)) {
		successMsg(errorMsgElem);
	}
	if (matchRegex(attribute, regex)) {
		successMsg(errorMsgElem);
	}
	if (checkLength(attribute)) {
		successMsg(errorMsgElem);
	}
	if (!isNull(attribute) || !matchRegex(attribute, regex)) {
		errorMsg(errorMsgElem, `Please fill in a valid data`)
		checkVal = false;
	}
	if (!checkLength(attribute, maxLen)) {
		errorMsg(errorMsgElem, `Your bio exceeds the ${maxLen} character limit`);
		checkVal = false;
	}
	return checkVal;
};

let Validation = () => {
	let validationCheck = true;
	profilePicValidation(image_error_msg);
	elemValidationCheck(userFirstName, /^[a-zA-Z\s]+$/, 50, FnameErr);
	elemValidationCheck(userLastName, /^[a-zA-Z\s]+$/, 50, LnameErr);
	elemValidationCheck(userEmail, /^[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*@[A-Za-z]+\.[A-Za-z]{2,}$/, 100, emailErr);
	elemValidationCheck(userContactNumber, /^[0-9]{2,}[0-9]{7,}$/, 20, contactErr);
	elemValidationCheck(userAddress, /^[a-zA-Z0-9\s,.'-]{3,}$/, 150, addressErr);
	elemValidationCheck(userBio, /^[a-zA-Z0-9,.!?'\s-]+$/, 300, bioErr);

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
