let usersDataMainContainer = document.querySelector(".individual_user_data_container");
let usersDataArray = [];
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
let userTypeErr = document.querySelector(".userType_error");
let userNameErr = document.querySelector(".user_admin");
let userPassErr = document.querySelector(".user_admin_password");
let image_error_msg = document.getElementById("img_error");
if (usersDataArray.length === 0) {
  emptyRecord_msg.style.display = "block";
  emptyRecord_msg.innerHTML = `No Record Found!`;
}
let recordRow = (profilePic, userName, userEmail, userContactNum) => {
  let userDataContainer = createNewElement(["div", "individual_user_data", usersDataMainContainer]);
  let userTextRecordContainer = createNewElement(["div", "text_record", userDataContainer]);
  let userProfilePicContainer = createNewElement(["div", "user_profile_data", userTextRecordContainer]);
  let userProfilePicFigureTag = createNewElement(["figure", "profile_img_container",
    userProfilePicContainer]);
  createNewElement(["img", "user_profile_img", userProfilePicFigureTag, null, { src: `${profilePic}`, alt: "Profile Picture" }]);
  createNewElement(["p", "user_profile_data", userTextRecordContainer, `${userName}`, { id: "user_fullName_data" }]);
  createNewElement(["p", "user_profile_data", userTextRecordContainer, `${userEmail}`, { id: "user_email_data" }]);
  createNewElement(["p", "user_profile_data", userTextRecordContainer, `${userContactNum}`, { id: "user_contactNumber_data" }]);
  let ProfileBtnOpsContainer = createNewElement(["div", "profile_btns_container", userDataContainer]);
  readUpdateDelete(userDataContainer, ProfileBtnOpsContainer);
};
