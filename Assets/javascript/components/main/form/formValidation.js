let userIndexCheck = null;
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
	let maxLen=len;
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
	if (!checkLength(attribute,maxLen)) {
		errorMsg(errorMsgElem, `Your bio exceeds the ${maxLen} character limit`);
		checkVal = false;
	}
	return checkVal;
};

// errorMsgElem, errorMsg_
let Validation = () => {
	let validationCheck = true;
	profilePicValidation(image_error_msg);
	elemValidationCheck(userFirstName, /^[a-zA-Z\s]+$/, 50, FnameErr );
	elemValidationCheck(userLastName, /^[a-zA-Z\s]+$/, 50,LnameErr);
	elemValidationCheck(userEmail, /^[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*@[A-Za-z]+\.[A-Za-z]{2,}$/,100,emailErr);
	elemValidationCheck(userContactNumber, /^[0-9]{2,}[0-9]{7,}$/, 20, contactErr);
	elemValidationCheck(userAddress, /^[a-zA-Z0-9\s,.'-]{3,}$/,150,addressErr);
	elemValidationCheck(userBio, /^[a-zA-Z0-9,.!?'\s-]+$/,300,bioErr);

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








	// let result = elemValidationCheck(userFirstName, /^[a-zA-Z\s]+$/);
	// console.log(result)
	// elemValidationCheck()
	// FnameErr, `Please fill in a valid first name`
	//  LnameErr, `Please fill in a valid last name`
	// emailErr, `Please fill in a valid email`
	//  contactErr, `Please fill in a valid contact number`
	//  addressErr, `Please fill in a valid address`
	//  bioErr, `Please fill in profile description or bio`


	// jab values 2 hain 
	// errors are diff
	// enum




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


	// errorMsg(profilePicValidation(), image_error_msg, `Please upload an image`);