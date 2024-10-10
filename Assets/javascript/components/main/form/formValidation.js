let userIndexCheck = null;
class FormValidation {
	#attribute;
	#regex;
	#len;
	constructor() { console.log(`constructor called`); }
	setAttribute(attr) { this.#attribute = attr; };
	getAttribute() { return this.#attribute; };
	setRegex(reg) { this.#regex = reg; };
	getRegex() { return this.#regex; };
	setLength(length) { this.#len = length; };
	getLength() { return this.#len; };

	isNull(attribute) {
		let check = true;
		if (attribute.value == "" || attribute == null) {
			check = false;
		}
		return check;
	};
	matchRegex(attribute, regexSyn) {
		let check = true
		if (!attribute.value.match(regexSyn)) {
			check = false;
		}
		return check;
	};
	checkLength(attribute, maxLen) {
		let check = true;
		if (attribute.value.length > maxLen) {
			check = false;
		}
		return check;
	};

	elemValidationCheck(attribute, regex, len) {
		this.setAttribute(attribute);
		this.setRegex(regex);
		this.setLength(len);
		if (!this.isNull(this.getAttribute())) {
			errorMsg(this.getAttribute(), `${error[0].errorName}: ${error[0].errorMessage}`);
			return false;
		} else { successMsg(this.getAttribute()); }
		if (!this.matchRegex(this.getAttribute(), this.getRegex())) {
			errorMsg(this.getAttribute(), `${error[1].errorName}: ${error[1].errorMessage}`);
			return false;
		} else { successMsg(this.getAttribute()); }
		if (!this.checkLength(this.getAttribute(), this.getLength())) {
			errorMsg(this.getAttribute(), `${error[2].errorName}: ${error[2].errorMessage}`);
			return false;
		} else { successMsg(this.getAttribute()); }
		return true;
	};

	createUser(userDataArr) {
		let userDataObj = new User();
		userDataObj.create(userDataArr);
		if (userIndexCheck === null) {
			usersDataArray.push(userDataObj);
		}
	};
	updateUser(userDataArr) {
		if (userIndexCheck !== null) {
			usersDataArray[userIndexCheck].update(userDataArr);
			userIndexCheck = null;
		}
	};

};
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

let profilePicValidation = (attribute) => {
	let imgCheck = true;
	if (!attribute.files.length || imgDisplay.src.includes("default_profile.png")) {
		imgCheck = false;
		errorMsg(attribute, `${error[3].errorName}: ${error[3].errorMessage}`)
	} else {
		successMsg(attribute);
		imgCheck = true;
	}
	return imgCheck;
};


let Validation = () => {
	let validationCheck = true;
	let newForm = new FormValidation();
	if (!profilePicValidation(imgInput)) { validationCheck = false; }
	if (!newForm.elemValidationCheck(userFirstName, /^[a-zA-Z\s]*$/, 30)) { validationCheck = false; }
	if (!newForm.elemValidationCheck(userLastName, /^[a-zA-Z\s]*$/, 30)) { validationCheck = false; }
	if (!newForm.elemValidationCheck(userEmail, /^[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*@[A-Za-z]+\.[A-Za-z]{2,}$/, 100)) { validationCheck = false; }
	if (!newForm.elemValidationCheck(userContactNumber, /^[0-9]{2,}[0-9]{7,}$/, 20)) { validationCheck = false; }
	if (!newForm.elemValidationCheck(userAddress, /^[a-zA-Z0-9\s,.'-]*$/, 150)) { validationCheck = false; }
	if (!newForm.elemValidationCheck(userBio, /^[a-zA-Z0-9,.!?'\s-]*$/, 300)) { validationCheck = false; }
	let userData = [
		userFirstName.value,
		userLastName.value,
		userEmail.value,
		userContactNumber.value,
		userAddress.value,
		userBio.value,
		URL.createObjectURL(imgInput.files[0])
	];
	if (validationCheck) {
		if (userIndexCheck === null) {
			newForm.createUser(userData);
		} else { newForm.updateUser(userData); }
		form.reset();
		imgDisplay.src = "./Assets/images/default_profile.png";
	}
	refreshRecords();
};
charLimitCheck();




// if (!elemValidationCheck(userFirstName, /^[a-zA-Z\s]*$/, 50)) { validationCheck = false; }