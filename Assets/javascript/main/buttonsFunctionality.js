let ReadUpdateDeleteFunc = (userDataContainer, ProfileBtnOpsContainer, id) => {
  let profileReadBtn = document.createElement("button");
  let profileUpdateBtn = document.createElement("button");
  let profileDelBtn = document.createElement("button");

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
    let formSubmitBtn = document.getElementById(`submit_btn`);
    formSubmitBtn.innerHTML = `Update`;
    window.scrollTo(200, 0);
    userIndexCheck = id - 1;
    let selectedUser = usersDataArray[id - 1];
    userFirstName.value = selectedUser.FirstName;
    userLastName.value = selectedUser.LastName;
    userEmail.value = selectedUser.Email;
    userContactNumber.value = selectedUser.Contact;
    userAddress.value = selectedUser.Address;
    userBio.value = selectedUser.Bio;
    console.log(`Editing record at index: ${selectedUser}`);
  });
};
