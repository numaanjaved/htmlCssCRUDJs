let userIndexCheck = null;

let attrVal = (attribute, regex) => {
  let check = true;
  if (attribute.value == "" || attribute == null) {
    check = false;
  } else {
    if (!attribute.value.match(regex)) {
      check = false;
    }
  }
  return check;
};
let elemValidationCheck = (attribute, regex) => {
  if (attrVal(attribute, regex)) {
    return true;
  }
};
let errorMsg = (valCheck, errorMsgElem, errorMsg) => {
  if (valCheck) {
    errorMsgElem.innerHTML = "";
    errorMsgElem.style.display = "none";
  } else {
    errorMsgElem.innerHTML = errorMsg;
    errorMsgElem.style.display = "block";
  }
};
let Validation = () => {
  let validationCheck = true;

  let FNameValidation = elemValidationCheck(userFirstName, /^[a-zA-Z\s]+$/);

  errorMsg(FNameValidation, FnameErr, `Please fill in a valid first name`);
  let lNameValidation = () => {
    let lNameCheck = true;
    let lNameMatch = true;
    if (userLastName.value == "" || userLastName == null) {
      lNameCheck = false;
    } else {
      if (!userLastName.value.match(/^[a-zA-Z\s]+$/)) {
        lNameMatch = false;
      }
    }
    if (lNameCheck && lNameMatch) {
      return true;
    } else {
      return false;
    }
  };
  errorMsg(lNameValidation(), LnameErr, `Please fill in a valid first name`);

  let emailValidation = () => {
    let emailCheck = true;
    let emailMatch = true;
    if (userEmail.value == "" || userEmail == null) {
      emailCheck = false;
    } else {
      if (
        !userEmail.value.match(
          /^[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*@[A-Za-z]+\.[A-Za-z]{2,}$/
        )
      ) {
        emailMatch = false;
      }
    }
    if (emailCheck && emailMatch) {
      return true;
    } else {
      return false;
    }
  };

  errorMsg(emailValidation(), emailErr, `Please fill in a valid email`);
  let contactNumValidation = () => {
    let contactCheck = true;
    let contactMatch = true;
    if (userContactNumber.value == "" || userContactNumber == null) {
      contactCheck = false;
    } else {
      if (!userContactNumber.value.match(/^[0-9]{2,}[0-9]{7,}$/)) {
        contactMatch = false;
      }
    }
    if (contactCheck && contactMatch) {
      return true;
    } else {
      return false;
    }
  };

  errorMsg(
    contactNumValidation(),
    contactErr,
    `Please fill in a valid contact number`
  );
  let addressValidation = () => {
    let addressCheck = true;
    let addressMatch = true;
    if (userAddress.value == "" || userAddress == null) {
      addressCheck = false;
    } else {
      if (!userAddress.value.match(/^[a-zA-Z0-9\s,.'-]{3,}$/)) {
        addressMatch = false;
      }
    }
    if (addressCheck && addressMatch) {
      return true;
    } else {
      return false;
    }
  };

  errorMsg(addressValidation(), addressErr, `Please fill in a valid address`);
  let bioValidation = () => {
    let bioCheck = true;
    let bioLimit = true;
    if (userBio.value == "" || userBio == null) {
      bioCheck = false;
    } else {
      if (userBio.value.length > 300) {
        bioLimit = false;
      }
    }
    if (bioCheck && bioLimit) {
      return true;
    } else {
      return false;
    }
  };
  if (bioValidation()) {
    bioErr.innerHTML = ``;
    bioErr.style.display = "none";
  } else {
    if (userBio.value.length > 300) {
      bioErr.innerHTML = `Your bio exceeds the 300 character limit`;
      bioErr.style.display = "block";
      bioLimitExceed.innerHTML = `Characters Limit Exceeded`;
    } else {
      bioErr.innerHTML = `Please fill in profile description or bio`;
      bioErr.style.display = "block";
    }
  }

  let profilePicValidation = () => {
    let imgCheck = true;
    if (
      !imgInput.files.length ||
      imgDisplay.src.includes("default_profile.png")
    ) {
      imgCheck = false;
    }
    if (imgCheck) {
      return true;
    } else {
      return false;
    }
  };

  errorMsg(profilePicValidation(), image_error_msg, `Please upload an image`);
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
