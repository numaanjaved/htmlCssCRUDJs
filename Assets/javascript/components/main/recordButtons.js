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
	if (usersDataArray[selectedUser].getUserType() === "Admin") {
		let select = document.getElementById(`select_user`);
		let selectUserHeading = document.getElementById(`choose_user_heading`);
		select.style.display = "none";
		selectUserHeading.style.display = "none";
		let adminOption = document.getElementById(`admin_option`);
		adminOption.setAttribute("selected", "selected");
		adminAttContainer.style.display = "flex";
		admin_heading.style.display = "block";
		userName.value = usersDataArray[selectedUser].getAdminName();
		userPassword.value = usersDataArray[selectedUser].getPassword();
	}
	if (usersDataArray[selectedUser].getUserType() === "User") {
		let select = document.getElementById(`select_user`);
		let selectUserHeading = document.getElementById(`choose_user_heading`);
		select.style.display = "none";
		selectUserHeading.style.display = "none";
	}
};

let readUpdateDelete = (userDataContainer, ProfileBtnOpsContainer, id) => {
	let profileReadBtn = createNewElement(["button", "Ops_Buttons", ProfileBtnOpsContainer, `Read`, { id: "read_btn" }]);
	let profileUpdateBtn = createNewElement(["button", "Ops_Buttons", ProfileBtnOpsContainer, `Update`, { id: "update_btn" }]);
	let profileDelBtn = createNewElement(["button", "Ops_Buttons", ProfileBtnOpsContainer, `Delete`, { id: "delete_btn" }]);
	profileReadBtn.addEventListener("click", e => readProfile(profileReadBtn));
	profileDelBtn.addEventListener("click", e => delProfile(profileDelBtn));
	profileUpdateBtn.addEventListener("click", e => updateProfile(profileUpdateBtn));
};
