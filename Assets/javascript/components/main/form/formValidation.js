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
	image: image_error_msg
};


let successMsg = (statusMsgElem) => {
	let error = errorContainer[statusMsgElem.name];
	error.innerHTML = "";
	error.style.display = "none";
};
let errorMsg = (statusMsgElem, errorMsg_) => {
	let error = errorContainer[statusMsgElem.name];
	error.style.display = "block";
	error.innerHTML = errorMsg_;
};
let validation = [

	{
		isNull: (attribute) => {
			let check = true;
			if (attribute.value == "" || attribute == null) {
				check = false;
			}
			return check;
		}
	},
	{
		matchRegex: (attribute, regexSyn) => {
			let check = true
			if (!attribute.value.match(regexSyn)) {
				check = false;
			}
			return check;
		}
	},
	{
		checkLength: (attribute, maxLen) => {
			let check = true;
			if (attribute.value.length > maxLen) {
				check = false;
			}
			return check;
		}
	}


];

// let checkLength =
// let matchRegex =
// let isNull = 
let profilePicValidation = (attribute) => {
	let imgCheck = true;

	if (
		!attribute.files.length ||
		imgDisplay.src.includes("default_profile.png")
	) {
		imgCheck = false;
		errorMsg(attribute, `${error[3].errorName}: ${error[3].errorMessage}`);
	} else {
		successMsg(attribute);
		imgCheck = true;
	}
	return imgCheck;
};
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

		errorMsg(attribute, `${error[0].errorName}: ${error[0].errorMessage}`);
		checkVal = false;

	}
	if (!matchRegex(attribute, regex)) {
		errorMsg(attribute, `${error[1].errorName}: ${error[1].errorMessage}`);
		checkVal = false;
	}
	if (!checkLength(attribute, maxLen)) {
		errorMsg(attribute, `${error[2].errorName}: ${error[2].errorMessage}`);
		checkVal = false;
	}
	return checkVal;
};

let Validation = () => {
	let validationCheck = true;
	profilePicValidation(imgInput);
	elemValidationCheck(userFirstName, /^[a-zA-Z\s]*$/, 50);
	elemValidationCheck(userLastName, /^[a-zA-Z\s]*$/, 50);
	elemValidationCheck(userEmail, /^[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*@[A-Za-z]+\.[A-Za-z]{2,}$/, 100);
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
