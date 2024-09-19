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
// Each user record elements:=>
// Main container:

let usersDataMainContainer = document.querySelector(
  ".individual_user_data_container"
);

let readModalFunc = (
  profilePic,
  userName,
  userEmail,
  userContactNum,
  userAddress,
  userBio,
  id = null
) => {
  let modalMainContainer = document.createElement("div");
  modalMainContainer.classList.add("modal_container");
  usersDataMainContainer.appendChild(modalMainContainer);
  modalMainContainer.setAttribute("id", `prof00${id}`);
  modalMainContainer.style.display = "block";
  let modalContentContainer = document.createElement("div");
  modalContentContainer.classList.add("modal_content_container");
  modalMainContainer.appendChild(modalContentContainer);

  let ModalPictureContainer = document.createElement("div");
  ModalPictureContainer.classList.add("modal_picture_container");
  modalContentContainer.appendChild(ModalPictureContainer);

  let ModalPicFigureTag = document.createElement("figure");
  ModalPicFigureTag.classList.add("profile_figure_tag");
  ModalPictureContainer.appendChild(ModalPicFigureTag);

  let ModalPic = document.createElement("img");
  ModalPic.setAttribute("src", `${profilePic}`);
  ModalPicFigureTag.appendChild(ModalPic);

  let ModalTextContainer = document.createElement("div");
  ModalTextContainer.classList.add("modal_text_content_container");
  modalContentContainer.appendChild(ModalTextContainer);

  let profIDHeading = document.createElement("p");
  profIDHeading.classList.add("modal_data_headings");
  ModalTextContainer.appendChild(profIDHeading);
  profIDHeading.innerHTML = `Profile ID:`;

  let profID = document.createElement("p");
  profID.classList.add("modal_data");
  ModalTextContainer.appendChild(profID);
  profID.innerHTML = `${id}`;

  let modalFullNameHeading = document.createElement("p");
  modalFullNameHeading.classList.add("modal_data_headings");
  ModalTextContainer.appendChild(modalFullNameHeading);
  modalFullNameHeading.innerHTML = `Full Name:`;
  let modalFullName = document.createElement("p");
  modalFullName.classList.add("modal_data");
  ModalTextContainer.appendChild(modalFullName);
  modalFullName.innerHTML = `${userName}`;

  let modalEmailHeading = document.createElement("p");
  modalEmailHeading.classList.add("modal_data_headings");
  ModalTextContainer.appendChild(modalEmailHeading);
  modalEmailHeading.innerHTML = `Email:`;
  let modalEmail = document.createElement("p");
  modalEmail.classList.add("modal_data");
  ModalTextContainer.appendChild(modalEmail);
  modalEmail.innerHTML = `${userEmail}`;

  let modalContactNumHeading = document.createElement("p");
  modalContactNumHeading.classList.add("modal_data_headings");
  ModalTextContainer.appendChild(modalContactNumHeading);
  modalContactNumHeading.innerHTML = `Contact Number:`;
  let modalContactNum = document.createElement("p");
  modalContactNum.classList.add("modal_data");
  ModalTextContainer.appendChild(modalContactNum);
  modalContactNum.innerHTML = `${userContactNum}`;
  let modalAddressHeading = document.createElement("p");
  modalAddressHeading.classList.add("modal_data_headings");
  ModalTextContainer.appendChild(modalAddressHeading);
  modalAddressHeading.innerHTML = `Address:`;
  let modalAddress = document.createElement("p");
  modalAddress.classList.add("modal_data");
  ModalTextContainer.appendChild(modalAddress);
  modalAddress.innerHTML = `${userAddress}`;
  let modalBioHeading = document.createElement("p");
  modalBioHeading.classList.add("modal_data_headings");
  ModalTextContainer.appendChild(modalBioHeading);
  modalBioHeading.innerHTML = `Profile Description or Bio:`;
  let modalBio = document.createElement("p");
  modalBio.classList.add("modal_data");
  ModalTextContainer.appendChild(modalBio);
  modalBio.innerHTML = `${userBio}`;
  let modalCloseBtn = document.createElement("button");
  modalCloseBtn.classList.add("modal_close_btn");
  modalCloseBtn.innerHTML = `Close`;
  modalContentContainer.appendChild(modalCloseBtn);
};

let recordFunc = (
  profilePic,
  userName,
  userEmail,
  userContactNum,
  id = null
) => {
  // Defining Elements
  let userDataContainer = document.createElement("div");
  let userTextRecordContainer = document.createElement("div");
  let userProfilePicContainer = document.createElement("div");
  let userProfilePicFigureTag = document.createElement("figure");
  let userProfilePicImgTag = document.createElement("img");
  let userFullNameElem = document.createElement("p");
  let userEmailElem = document.createElement("p");
  let userContactNumElem = document.createElement("p");
  let ProfileBtnOpsContainer = document.createElement("div");
  let profileReadBtn = document.createElement("button");
  let profileUpdateBtn = document.createElement("button");
  let profileDelBtn = document.createElement("button");

  //   Adding Classes and appending
  userDataContainer.classList.add("individual_user_data");
  userDataContainer.setAttribute("id", `${id}`);
  usersDataMainContainer.appendChild(userDataContainer);

  userTextRecordContainer.classList.add("text_record");
  userDataContainer.appendChild(userTextRecordContainer);

  userProfilePicContainer.classList.add("user_profile_data");
  userTextRecordContainer.appendChild(userProfilePicContainer);

  userProfilePicFigureTag.classList.add("profile_img_container");
  userProfilePicContainer.appendChild(userProfilePicFigureTag);

  userProfilePicImgTag.classList.add("user_profile_img");
  userProfilePicImgTag.setAttribute("alt", "Profile_img");
  userProfilePicImgTag.setAttribute("src", `${profilePic}`);
  userProfilePicFigureTag.appendChild(userProfilePicImgTag);

  userFullNameElem.classList.add("user_profile_data");
  userFullNameElem.setAttribute("id", "user_fullName_data");
  userFullNameElem.innerHTML = `${userName}`;
  userTextRecordContainer.appendChild(userFullNameElem);

  userEmailElem.classList.add("user_profile_data");
  userEmailElem.setAttribute("id", "user_email_data");
  userEmailElem.innerHTML = `${userEmail}`;
  userTextRecordContainer.appendChild(userEmailElem);

  userContactNumElem.classList.add("user_profile_data");
  userContactNumElem.setAttribute("id", "user_contactNumber_data");
  userContactNumElem.innerHTML = `${userContactNum}`;
  userTextRecordContainer.appendChild(userContactNumElem);

  // Individual buttons for each row
  ProfileBtnOpsContainer.classList.add("profile_btns_container");
  userDataContainer.appendChild(ProfileBtnOpsContainer);
  profileReadBtn.classList.add("Ops_Buttons");
  profileReadBtn.setAttribute("id", "read_btn");
  profileReadBtn.innerHTML = "Read";
  ProfileBtnOpsContainer.appendChild(profileReadBtn);
  profileUpdateBtn.classList.add("Ops_Buttons");
  profileUpdateBtn.setAttribute("id", "update_btn");
  profileUpdateBtn.innerHTML = "Update";
  ProfileBtnOpsContainer.appendChild(profileUpdateBtn);
  profileDelBtn.classList.add("Ops_Buttons");
  profileDelBtn.setAttribute("id", "delete_btn");
  profileDelBtn.innerHTML = "Delete";
  ProfileBtnOpsContainer.appendChild(profileDelBtn);
};
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

let emptyRecord_msg = document.createElement("p");
emptyRecord_msg.classList.add("empty_msg");
usersDataMainContainer.appendChild(emptyRecord_msg);
if (usersDataArray.length == 0) {
  emptyRecord_msg.style.display = "block";
  emptyRecord_msg.innerHTML = `No Record Found!`;
}
// Error messages
let FnameErr = document.querySelector(".Fname_error");
let LnameErr = document.querySelector(".Lname_error");
let emailErr = document.querySelector(".email_error");
let contactErr = document.querySelector(".contact_error");
let addressErr = document.querySelector(".address_error");
let bioErr = document.querySelector(".bio_error");
let image_error_msg = document.getElementById("img_error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
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
    usersDataArray.push(userDataObj);
    form.reset();
    if (
      imgDisplay.src !=
      "http://127.0.0.1:5500/Assets/images/default_profile.png"
    ) {
      imgDisplay.src =
        "http://127.0.0.1:5500/Assets/images/default_profile.png";
    }
  }

  usersDataMainContainer.innerHTML = ``;
  usersDataArray.forEach((data, index) => {
    recordFunc(
      `${data.userPicture}`,
      `${data.FirstName} ${data.LastName}`,
      `${data.Email}`,
      `${data.Contact}`,
      `prof00${index + 1}`
    );
    readModalFunc(
      `${data.userPicture}`,
      `${data.FirstName} ${data.LastName}`,
      `${data.Email}`,
      `${data.Contact}`,
      `${data.Address}`,
      `${data.Bio}`,
      `prof00${index + 1}`
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
