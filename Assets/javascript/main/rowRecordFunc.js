let usersDataMainContainer = document.querySelector(
  ".individual_user_data_container"
);
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
// Error messages
let FnameErr = document.querySelector(".Fname_error");
let LnameErr = document.querySelector(".Lname_error");
let emailErr = document.querySelector(".email_error");
let contactErr = document.querySelector(".contact_error");
let addressErr = document.querySelector(".address_error");
let bioErr = document.querySelector(".bio_error");
let image_error_msg = document.getElementById("img_error");
if (usersDataArray.length == 0) {
  emptyRecord_msg.style.display = "block";
  emptyRecord_msg.innerHTML = `No Record Found!`;
}
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
  userDataContainer.appendChild(ProfileBtnOpsContainer);

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
  ReadUpdateDeleteFunc(userDataContainer, ProfileBtnOpsContainer, id);
};
