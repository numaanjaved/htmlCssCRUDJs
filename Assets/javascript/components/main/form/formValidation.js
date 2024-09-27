let userIndexCheck = null;
let successMsg = (errorMsgElem) => {
	errorMsgElem.innerHTML = "";
	errorMsgElem.style.display = "none";
};
let errorMsg = (errorMsgElem, errorMsg_) => {
	console.log(errorMsg_);

	errorMsgElem.innerHTML = errorMsg_;
	errorMsgElem.style.display = "block";


};

let charLengthCheck = (attr) => {
	let check = true;
	if (attr.value.length > 300) {
		console.log(`limit exceeded`);
		check = false;
	}
	return check;
};

let attrVal = (attribute, regex) => {
	let check = true;
	if (attribute.value == "" || attribute == null) {
		check = false;
	} else {
		if (!attribute.value.match(regex)) {
			check = false;
		} else if (!charLengthCheck(attribute)) {
			errorMsg(attribute, `Character Limit Increased`)
			check = false;
		}
	}
	return check;
};

let elemValidationCheck = (attribute, regex, errorMsgElem, _errorMsg) => {
	let ValidationCheck = true;
	if (attrVal(attribute, regex)) {
		ValidationCheck = true;
		successMsg(errorMsgElem);
	} else {
		errorMsg(errorMsgElem, _errorMsg);
	}
	return ValidationCheck;
};

let Validation = () => {
	let validationCheck = true;

	elemValidationCheck(userFirstName, /^[a-zA-Z\s]+$/, FnameErr, `Please fill in a valid first name`);
	elemValidationCheck(userLastName, /^[a-zA-Z\s]+$/, LnameErr, `Please fill in a valid last name`);
	elemValidationCheck(userEmail, /^[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*@[A-Za-z]+\.[A-Za-z]{2,}$/, emailErr, `Please fill in a valid email`);
	elemValidationCheck(userContactNumber, /^[0-9]{2,}[0-9]{7,}$/, contactErr, `Please fill in a valid contact number`);
	elemValidationCheck(userAddress, /^[a-zA-Z0-9\s,.'-]{3,}$/, addressErr, `Please fill in a valid address`);
	elemValidationCheck(userBio, /^[a-zA-Z0-9,.!?'\s-]+$/, bioErr, `Please fill in profile description or bio`);

	// , `Your bio exceeds the 300 character limit`
	// let bioValidation = () => {
	// 	let bioCheck = true;
	// 	let bioLimit = true;
	// 	if (userBio.value == "" || userBio == null) {
	// 		bioCheck = false;
	// 	} else {
	// 		if (userBio.value.length > 300) {
	// 			bioLimit = false;
	// 		}
	// 	}
	// 	if (bioCheck && bioLimit) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// };


	// if (bioValidation()) {
	// 	bioErr.innerHTML = ``;
	// 	bioErr.style.display = "none";
	// } else {
	// 	if (userBio.value.length > 300) {
	// 		bioErr.innerHTML = `Your bio exceeds the 300 character limit`;
	// 		bioErr.style.display = "block";
	// 		bioLimitExceed.innerHTML = `Characters Limit Exceeded`;
	// 	} else {
	// 		bioErr.innerHTML = `Please fill in profile description or bio`;
	// 		bioErr.style.display = "block";
	// 	}
	// }

	let profilePicValidation = (errorMsgElem, errorMsg_) => {
		let imgCheck = true;
		if (
			!imgInput.files.length ||
			imgDisplay.src.includes("default_profile.png")
		) {
			imgCheck = false;
			errorMsg(errorMsgElem, errorMsg_);
		} else {
			successMsg(errorMsgElem);
			imgCheck = true;
		}
		return imgCheck;
	};
	profilePicValidation(image_error_msg, `Please upload an image`)
	// errorMsg(profilePicValidation(), image_error_msg, `Please upload an image`);
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

// console.log();
// {
//   FirstName: userFirstName.value,
//   LastName: userLastName.value,
//   Email: userEmail.value,
//   Contact: userContactNumber.value,
//   Address: userAddress.value,
//   Bio: userBio.value,
//   userPicture: URL.createObjectURL(imgInput.files[0]),
// };
