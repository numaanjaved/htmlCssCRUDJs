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

// Each user record elements:=>
// Main container:
let usersDataMainContainer = document.querySelector(
  ".individual_user_data_container"
);

let userDataContainer = document.createElement("div");
userDataContainer.classList.add("individual_user_data");
usersDataMainContainer.appendChild(userDataContainer);

let userTextRecordContainer = document.createElement("div");
userTextRecordContainer.classList.add("text_record");
userDataContainer.appendChild(userTextRecordContainer);

let userProfilePicContainer = document.createElement("div");
userProfilePicContainer.classList.add("user_profile_data");
userTextRecordContainer.appendChild(userProfilePicContainer);

let userProfilePicFigureTag = document.createElement("figure");
userProfilePicFigureTag.classList.add("profile_img_container");
userProfilePicContainer.appendChild(userProfilePicFigureTag);

let userProfilePicImgTag = document.createElement("img");
userProfilePicImgTag.classList.add("user_profile_img");
userProfilePicImgTag.setAttribute("alt", "Profile_img");
userProfilePicImgTag.setAttribute("src", "./Assets/images/human_icon.png");
userProfilePicFigureTag.appendChild(userProfilePicImgTag);

let userFullNameElem = document.createElement("p");
userFullNameElem.classList.add("user_profile_data");
userFullNameElem.setAttribute("id", "user_fullName_data");
userTextRecordContainer.appendChild(userFullNameElem);

let userFnameElem = document.createElement("span");
userFnameElem.setAttribute("id", "Fname");
userFullNameElem.appendChild(userFnameElem);
let userLnameElem = document.createElement("span");
userLnameElem.setAttribute("id", "Lname");
userFullNameElem.appendChild(userLnameElem);

let userEmailElem = document.createElement("p");
userEmailElem.classList.add("user_profile_data");
userEmailElem.setAttribute("id", "user_email_data");
userTextRecordContainer.appendChild(userEmailElem);
let userContactNumElem = document.createElement("p");
userContactNumElem.classList.add("user_profile_data");
userContactNumElem.setAttribute("id", "user_contactNumber_data");
userTextRecordContainer.appendChild(userContactNumElem);

// Individual buttons for each row
let ProfileBtnOpsContainer = document.createElement("div");
ProfileBtnOpsContainer.classList.add("profile_btns_container");
userDataContainer.appendChild(ProfileBtnOpsContainer);

let profileReadBtn = document.createElement("button");
profileReadBtn.classList.add("Ops_Buttons");
profileReadBtn.setAttribute("id", "read_btn");
profileReadBtn.innerHTML = "Read";
ProfileBtnOpsContainer.appendChild(profileReadBtn);
let profileUpdateBtn = document.createElement("button");
profileUpdateBtn.classList.add("Ops_Buttons");
profileUpdateBtn.setAttribute("id", "update_btn");
profileUpdateBtn.innerHTML = "Update";
ProfileBtnOpsContainer.appendChild(profileUpdateBtn);
let profileDelBtn = document.createElement("button");
profileDelBtn.classList.add("Ops_Buttons");
profileDelBtn.setAttribute("id", "delete_btn");
profileDelBtn.innerHTML = "Delete";
ProfileBtnOpsContainer.appendChild(profileDelBtn);

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
    usersDataArray.push(userDataObj);
  }
  form.reset();
  if (
    imgDisplay.src != "http://127.0.0.1:5500/Assets/images/default_profile.png"
  ) {
    imgDisplay.src = "http://127.0.0.1:5500/Assets/images/default_profile.png";
  }
  usersDataArray.forEach((data, index) => {
    userFirstNameDisplay.innerHTML = `${data.FirstName}`;
    userLastNameDisplay.innerHTML = `${data.LastName}`;
    userEmailDisplay.innerHTML = `${data.Email}`;
    userContactNumberDisplay.innerHTML = `${data.Contact}`;
    userImgDisplay.src = `${data.userPicture}`;
    // console.log(
    //   `${data.FirstName} ${data.LastName} ${data.Email} ${data.Contact} ${data.userPicture}`
    // );
  });
  console.log(usersDataArray);
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
