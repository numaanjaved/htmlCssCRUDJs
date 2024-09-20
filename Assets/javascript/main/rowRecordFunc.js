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
  let profileReadBtn = document.createElement("button");
  let profileUpdateBtn = document.createElement("button");
  let profileDelBtn = document.createElement("button");
  // Buttons functionality:
  profileReadBtn.addEventListener("click", () => {
    let modal = document.querySelector(`#prof00${id}`);
    if (modal) {
      modal.style.display = "block";
      usersDataMainContainer.style.minHeight = "600px";
    } else {
      console.log(`Modal not found`);
    }
  });
  profileDelBtn.addEventListener("click", () => {
    profileDelBtn.parentElement.parentElement.remove();
    let modal = document.querySelector(`#prof00${id}`);
    if (modal) {
      modal.remove();
    } else {
      console.log(`No record found with ID: prof00${id}`);
    }
  });
  profileUpdateBtn.addEventListener("click", () => {
    let UserData = document.querySelector(`#prof00${id}`);
    console.log(`selected element have id: ${UserData.id}`);
    usersDataArray[id - 1].FirstName = "Kahout";
    console.log(usersDataArray[id - 1].FirstName);
    console.log(usersDataArray[id - 1]);
    usersDataMainContainer.innerHTML = ``;
    usersDataArray.forEach((data, index) => {
      recordFunc(
        `${data.userPicture}`,
        `${data.FirstName} ${data.LastName}`,
        `${data.Email}`,
        `${data.Contact}`,
        index + 1
      );
      readModalFunc(
        `${data.userPicture}`,
        `${data.FirstName} ${data.LastName}`,
        `${data.Email}`,
        `${data.Contact}`,
        `${data.Address}`,
        `${data.Bio}`,
        index + 1
      );
    });
  });
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
