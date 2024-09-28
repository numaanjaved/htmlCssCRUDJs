let readUpdateDelete = (userDataContainer, ProfileBtnOpsContainer, id) => {
	let profileReadBtn = createNewElement(["button", "Ops_Buttons", ProfileBtnOpsContainer, `Read`, { id: "read_btn" }]);
	let profileUpdateBtn = createNewElement(["button", "Ops_Buttons", ProfileBtnOpsContainer, `Update`, { id: "update_btn" }]);
	let profileDelBtn = createNewElement(["button", "Ops_Buttons", ProfileBtnOpsContainer, `Delete`, { id: "delete_btn" }]);

	profileReadBtn.addEventListener("click", (e) => {
		let clickedBtnId = profileReadBtn.parentElement.parentElement.nextSibling.id;
		let modal = usersDataArray.find((user) => user.getID() === clickedBtnId);
		if (modal) { currentModal.read() }
	});

	profileDelBtn.addEventListener("click", () => {
		let clickedBtnId = profileDelBtn.parentElement.parentElement.nextSibling.id;
		let user = usersDataArray.find((user) => user.getID() === clickedBtnId);
		if (user) { user.delete(); }
	});

	profileUpdateBtn.addEventListener("click", () => {
		window.scrollTo(200, 0);
		let clickedBtnId = profileDelBtn.parentElement.parentElement.nextSibling.id;
		let selectedUser = usersDataArray.findIndex((user) => user.getID() === clickedBtnId);
		userIndexCheck = selectedUser;
		userFirstName.value = usersDataArray[selectedUser].getFirstName();
		userLastName.value = usersDataArray[selectedUser].getLastName();
		userEmail.value = usersDataArray[selectedUser].getEmail();
		userContactNumber.value = usersDataArray[selectedUser].getContactNum();
		userAddress.value = usersDataArray[selectedUser].getAddress();
		userBio.value = usersDataArray[selectedUser].getBio();
		imgDisplay.src = usersDataArray[selectedUser].getProfilePic();
	});
};
