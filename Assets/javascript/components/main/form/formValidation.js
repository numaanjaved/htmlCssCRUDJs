let userIndexCheck = null;
let Validation = () => {
  let validationCheck = true;

  let FNameValidation = () => {
    let fNameCheck = true;
    let fNameMatch = true;
    if (userFirstName.value == "" || userFirstName == null) {
      fNameCheck = false;
    } else {
      if (!userFirstName.value.match(/^[a-zA-Z\s]+$/)) {
        fNameMatch = false;
      }
    }

    if (fNameCheck && fNameMatch) {
      return true;
    } else {
      return false;
    }
  };
  if (FNameValidation()) {
    FnameErr.innerHTML = "";
    FnameErr.style.display = "none";
  } else {
    FnameErr.innerHTML = `Please fill in a valid first name`;
    FnameErr.style.display = "block";
  }
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
  if (lNameValidation()) {
    LnameErr.innerHTML = "";
    LnameErr.style.display = "none";
  } else {
    LnameErr.innerHTML = `Please fill in a valid last name`;
    LnameErr.style.display = "block";
  }

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
  if (emailValidation()) {
    emailErr.innerHTML = "";
    emailErr.style.display = "none";
  } else {
    emailErr.innerHTML = `Please fill in a valid email`;
    emailErr.style.display = "block";
  }
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
  if (contactNumValidation()) {
    contactErr.innerHTML = "";
    contactErr.style.display = "none";
  } else {
    contactErr.innerHTML = `Please fill in a valid contact number`;
    contactErr.style.display = "block";
  }
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
  if (addressValidation()) {
    addressErr.innerHTML = "";
    addressErr.style.display = "none";
  } else {
    addressErr.innerHTML = `Please fill in a valid address`;
    addressErr.style.display = "block";
  }
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
      bioErr.innerHTML = `Please fill in a valid address`;
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
  if (profilePicValidation()) {
    image_error_msg.innerHTML = ``;
    image_error_msg.style.display = "none";
  } else {
    image_error_msg.innerHTML = `Please upload an image`;
    image_error_msg.style.display = "block";
  }
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
