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

	// validationResult(
	// 	bioValidation,
	// 	bioErr,
	// 	`Your bio exceeds the 300 character limit`
	// );

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

// `Ahmed`,
// `Ali`,
// `ahmed12@gmail.com`,
// `0333333333`,
// `Lahore`,
// `Developer`,
// `src`,

// let lNameValidation = () => {
//   let lNameCheck = true;
//   let lNameMatch = true;
//   if (userLastName.value == "" || userLastName == null) {
//     lNameCheck = false;
//   } else {
//     if (!userLastName.value.match(/^[a-zA-Z\s]+$/)) {
//       lNameMatch = false;
//     }
//   }
//   if (lNameCheck && lNameMatch) {
//     return true;
//   } else {
//     return false;
//   }
// };

// let emailValidation = () => {
//   let emailCheck = true;
//   let emailMatch = true;
//   if (userEmail.value == "" || userEmail == null) {
//     emailCheck = false;
//   } else {
//     if (
//       !userEmail.value.match(
//         /^[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*@[A-Za-z]+\.[A-Za-z]{2,}$/
//       )
//     ) {
//       emailMatch = false;
//     }
//   }
//   if (emailCheck && emailMatch) {
//     return true;
//   } else {
//     return false;
//   }
// };

// let contactNumValidation = () => {
//   let contactCheck = true;
//   let contactMatch = true;
//   if (userContactNumber.value == "" || userContactNumber == null) {
//     contactCheck = false;
//   } else {
//     if (!userContactNumber.value.match(/^[0-9]{2,}[0-9]{7,}$/)) {
//       contactMatch = false;
//     }
//   }
//   if (contactCheck && contactMatch) {
//     return true;
//   } else {
//     return false;
//   }
// };

// let addressValidation = () => {
//   let addressCheck = true;
//   let addressMatch = true;
//   if (userAddress.value == "" || userAddress == null) {
//     addressCheck = false;
//   } else {
//     if (!userAddress.value.match(/^[a-zA-Z0-9\s,.'-]{3,}$/)) {
//       addressMatch = false;
//     }
//   }
//   if (addressCheck && addressMatch) {
//     return true;
//   } else {
//     return false;
//   }
// };
// slack test