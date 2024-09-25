let ReadUpdateDeleteFunc = (userDataContainer, ProfileBtnOpsContainer, id) => {
  console.log(`I'm from buttons Id: ${id}`);
  let profileReadBtn = createNewElement([
    "button",
    "Ops_Buttons",
    ProfileBtnOpsContainer,
    `Read`,
    { id: "read_btn" },
  ]);

  let profileUpdateBtn = createNewElement([
    "button",
    "Ops_Buttons",
    ProfileBtnOpsContainer,
    `Update`,
    { id: "update_btn" },
  ]);
  let profileDelBtn = createNewElement([
    "button",
    "Ops_Buttons",
    ProfileBtnOpsContainer,
    `Delete`,
    { id: "delete_btn" },
  ]);

  // Buttons functionality:
  profileReadBtn.addEventListener("click", () => {
    let modal = document.getElementById(`prof00${id}`);
    if (modal) {
      modal.style.display = "block";
      usersDataMainContainer.style.minHeight = "600px";
    } else {
      console.log(`Modal not found with the id: prof00${id}`);
    }
  });

  profileDelBtn.addEventListener("click", () => {
    profileDelBtn.parentElement.parentElement.remove();
    let modal = document.getElementById(`${id}`);
    if (modal) {
      modal.remove();
    } else {
      console.log(`No record found with ID: prof00${id}`);
    }
  });

  profileUpdateBtn.addEventListener("click", () => {
    let formSubmitBtn = document.getElementById(`submit_btn`);
    formSubmitBtn.innerHTML = `Update`;
    window.scrollTo(200, 0);
    userIndexCheck = id - 1;
    console.log(userIndexCheck);
    let selectedUser = usersDataArray[id - 1];
    userFirstName.value = selectedUser.getFirstName();
    userLastName.value = selectedUser.getLastName();
    userEmail.value = selectedUser.getEmail();
    userContactNumber.value = selectedUser.getContactNum();
    userAddress.value = selectedUser.getAddress();
    userBio.value = selectedUser.getBio();
    imgDisplay.src = selectedUser.getProfilePic();
  });
};
