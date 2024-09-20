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
  profID.innerHTML = `prof00${id}`;

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
  modalCloseBtn.addEventListener("click", () => {
    modalMainContainer.style.display = "none";
    usersDataMainContainer.style.minHeight = "";
  });
};
