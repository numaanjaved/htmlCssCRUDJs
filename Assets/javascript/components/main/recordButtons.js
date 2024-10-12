let readProfile = (readProfileBtn) => {
	let clickedBtnId = readProfileBtn.parentElement.parentElement.nextSibling.id;
	let modal = usersDataArray.find((user) => user.getID() === clickedBtnId);
	if (modal) { modal.read(); }
};
let delProfile = (delProfileBtn) => {
	let clickedBtnId = delProfileBtn.parentElement.parentElement.nextSibling.id;
	let user = usersDataArray.find((user) => user.getID() === clickedBtnId);
	if (user) { user.delete(); }
};

let updateProfile = (updateProfileBtn) => {
	window.scrollTo(200, 0);
	let clickedBtnId = updateProfileBtn.parentElement.parentElement.nextSibling.id;
	let selectedUser = usersDataArray.findIndex((user) => user.getID() === clickedBtnId);
	userIndexCheck = selectedUser;
	userFirstName.value = usersDataArray[selectedUser].getFirstName();
	userLastName.value = usersDataArray[selectedUser].getLastName();
	userEmail.value = usersDataArray[selectedUser].getEmail();
	userContactNumber.value = usersDataArray[selectedUser].getContactNum();
	userAddress.value = usersDataArray[selectedUser].getAddress();
	userBio.value = usersDataArray[selectedUser].getBio();
	imgDisplay.src = usersDataArray[selectedUser].getProfilePic();
	userName.value = usersDataArray[selectedUser].getAdminName();
	userPassword.value = usersDataArray[selectedUser].getPassword();
};

let readUpdateDelete = (userDataContainer, ProfileBtnOpsContainer, id) => {
	let profileReadBtn = createNewElement(["button", "Ops_Buttons", ProfileBtnOpsContainer, `Read`, { id: "read_btn" }]);
	let profileUpdateBtn = createNewElement(["button", "Ops_Buttons", ProfileBtnOpsContainer, `Update`, { id: "update_btn" }]);
	let profileDelBtn = createNewElement(["button", "Ops_Buttons", ProfileBtnOpsContainer, `Delete`, { id: "delete_btn" }]);
	profileReadBtn.addEventListener("click", e => readProfile(profileReadBtn));
	profileDelBtn.addEventListener("click", e => delProfile(profileDelBtn));
	profileUpdateBtn.addEventListener("click", e => updateProfile(profileUpdateBtn));
};
