//Form Image display function

let imgInput = document.querySelector("#imageUpload");
let imgDisplay = document.querySelector("#form_img");
imgInput.addEventListener("change", () => {
  imgDisplay.src = URL.createObjectURL(imgInput.files[0]);
});
// Image information msg
let imgUploadBtn = document.querySelector(".choose_img_label");
let imgInfoMsg = document.querySelector("#img_info");
imgUploadBtn.addEventListener("mouseenter", () => {
  imgInfoMsg.style.opacity = 1;
});
imgUploadBtn.addEventListener("mouseleave", () => {
  imgInfoMsg.style.opacity = 0;
});

// Adding form Validation=>
let usersDataArray = [];
let form = document.querySelector(".data_form");
let userFirstName = document.getElementById("user_Fname");
let userLastName = document.getElementById("user_Lname");
let userEmail = document.getElementById("user_email");
let userContactNumber = document.getElementById("user_contact");
let userAddress = document.getElementById("user_address");
let userBio = document.getElementById("user_bio");
let bioLimitText = document.querySelector(".limit_text");
let bioLimitExceed = document.querySelector(".limit_exceed_text");
let individualUserDataContainer = document.querySelector(
  ".individual_user_data_container"
);

// Error messages
let FnameErr = document.querySelector(".Fname_error");
let LnameErr = document.querySelector(".Lname_error");
let emailErr = document.querySelector(".email_error");
let contactErr = document.querySelector(".contact_error");
let addressErr = document.querySelector(".address_error");
let bioErr = document.querySelector(".bio_error");
let image_error_msg = document.getElementById("img_error");

// Testing Values:
let userFirstNameDisplay = document.getElementById("Fname");
let userLastNameDisplay = document.getElementById("Lname");
let userEmailDisplay = document.getElementById("user_email_data");
let userContactNumberDisplay = document.getElementById(
  "user_contactNumber_data"
);
let userImgDisplay = document.querySelector(".user_profile_img");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let validationCheck = true;
  //   First Name Validation
  if (userFirstName.value == "" || userFirstName == null) {
    FnameErr.innerHTML = `Please fill the First Name field`;
    FnameErr.style.display = "block";
    validationCheck = false;
  } else {
    if (!userFirstName.value.match(/^[a-zA-Z]{1,}$/)) {
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
    if (!userLastName.value.match(/^[a-zA-Z\s]{1,}$/)) {
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
    if (!userContactNumber.value.match(/^\+[0-9]{2,}[0-9]{7,}$/)) {
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
  console.log(URL.createObjectURL(imgInput.files[0]));
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
    usersDataArray.push(userDataObj);
  }
  form.reset();
  if (
    imgDisplay.src != "http://127.0.0.1:5500/Assets/images/default_profile.png"
  ) {
    imgDisplay.src = "http://127.0.0.1:5500/Assets/images/default_profile.png";
  }
  console.log(usersDataArray);
  usersDataArray.forEach((data, index) => {
    userFirstNameDisplay.innerHTML = `${data.FirstName}`;
    userLastNameDisplay.innerHTML = `${data.LastName}`;
    userEmailDisplay.innerHTML = `${data.Email}`;
    userContactNumberDisplay.innerHTML = `${data.Contact}`;
    userImgDisplay.src = `${data.userPicture}`;
    console.log(
      `${data.FirstName} ${data.LastName} ${data.Email} ${data.Contact} ${data.userPicture}`
    );
  });
});
// Character limit functionality
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
