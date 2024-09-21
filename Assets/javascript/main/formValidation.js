let userIndexCheck = null;
let formValidationFunc = () => {
  let validationCheck = true;
  //   First Name Validation
  if (userFirstName.value == "" || userFirstName == null) {
    FnameErr.innerHTML = `Please fill the First Name field`;
    FnameErr.style.display = "block";
    validationCheck = false;
  } else {
    if (!userFirstName.value.match(/^[a-zA-Z\s]+$/)) {
      FnameErr.innerHTML = `Please match the given example`;
      FnameErr.style.display = "block";
      validationCheck = false;
    } else {
      FnameErr.innerHTML = "";
      FnameErr.style.display = "none";
    }
  }
  // Last Name Validation
  if (userLastName.value == "" || userLastName == null) {
    LnameErr.innerHTML = `Please fill the Last Name field`;
    LnameErr.style.display = "block";
    validationCheck = false;
  } else {
    if (!userLastName.value.match(/^[a-zA-Z\s]+$/)) {
      LnameErr.innerHTML = `Please match the given example`;
      LnameErr.style.display = "block";
      validationCheck = false;
    } else {
      LnameErr.innerHTML = "";
      LnameErr.style.display = "none";
    }
  }
  //   Email Validation
  if (userEmail.value == "" || userEmail == null) {
    emailErr.innerHTML = `Please fill the Email field`;
    emailErr.style.display = "block";
    validationCheck = false;
  } else {
    if (
      !userEmail.value.match(
        /^[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*@[A-Za-z]+\.[A-Za-z]{2,}$/
      )
    ) {
      emailErr.innerHTML = `Please match the given example`;
      emailErr.style.display = "block";
      validationCheck = false;
    } else {
      emailErr.innerHTML = "";
      emailErr.style.display = "none";
    }
  }
  //   Contact Number Validation
  if (userContactNumber.value == "" || userContactNumber == null) {
    contactErr.innerHTML = `Please fill the Contact Number field`;
    contactErr.style.display = "block";
    validationCheck = false;
  } else {
    if (!userContactNumber.value.match(/^[0-9]{2,}[0-9]{7,}$/)) {
      contactErr.innerHTML = `Please match the given example`;
      contactErr.style.display = "block";
      validationCheck = false;
    } else {
      contactErr.innerHTML = "";
      contactErr.style.display = "none";
    }
  }
  //   Address Validation
  if (userAddress.value == "" || userAddress == null) {
    addressErr.innerHTML = `Please fill the Address field`;
    addressErr.style.display = "block";
    validationCheck = false;
  } else {
    if (!userAddress.value.match(/^[a-zA-Z0-9\s,.'-]{3,}$/)) {
      addressErr.innerHTML = `Please match the given example`;
      addressErr.style.display = "block";
      validationCheck = false;
    } else {
      addressErr.innerHTML = "";
      addressErr.style.display = "none";
    }
  }
  //   Bio Validation
  if (userBio.value == "" || userBio == null) {
    bioErr.innerHTML = `Please fill the Profile description field`;
    bioErr.style.display = "block";
    validationCheck = false;
  } else {
    if (userBio.value.length > 300) {
      bioErr.innerHTML = `Your bio exceeds the 300 character limit`;
      bioErr.style.display = "block";
      bioLimitExceed.innerHTML = `Characters Limit Exceeded`;
    }
    bioErr.innerHTML = ``;
    bioErr.style.display = "none";
  }

  // creating img src:

  if (
    imgDisplay.src == "http://127.0.0.1:5500/Assets/images/default_profile.png"
  ) {
    image_error_msg.innerHTML = `Please upload an image`;
    image_error_msg.style.display = "block";
  } else {
    image_error_msg.innerHTML = ``;
    image_error_msg.style.display = "none";
  }
  let userDataObj = {
    FirstName: userFirstName.value,
    LastName: userLastName.value,
    Email: userEmail.value,
    Contact: userContactNumber.value,
    Address: userAddress.value,
    Bio: userBio.value,
    userPicture: URL.createObjectURL(imgInput.files[0]),
  };
  if (validationCheck) {
    if (userIndexCheck !== null) {
      usersDataArray[userIndexCheck] = userDataObj;
    } else {
      usersDataArray.push(userDataObj);
    }
    form.reset();
    if (
      imgDisplay.src !=
      "http://127.0.0.1:5500/Assets/images/default_profile.png"
    ) {
      imgDisplay.src =
        "http://127.0.0.1:5500/Assets/images/default_profile.png";
    }
  }
  refreshRecords();
};

let charLimitCheck = () => {
  userBio.addEventListener("input", () => {
    if (userBio.value.length > 300) {
      bioLimitExceed.innerHTML = `Characters Limit Exceeded`;
      userBio.style.outlineColor = "#a31b1b";
      userBio.style.border = "2px solid #a31b1b";
    } else {
      bioLimitExceed.innerHTML = ``;
      userBio.style.outlineColor = "#90c5cf";
      userBio.style.border = "2px solid #90c5cf";
    }
    bioLimitText.innerHTML = `${userBio.value.length}/300`;
  });
};
