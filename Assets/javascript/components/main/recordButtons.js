let readUpdateDelete = (userDataContainer, ProfileBtnOpsContainer, id) => {
	let profileReadBtn = createNewElement(["button", "Ops_Buttons", ProfileBtnOpsContainer, `Read`, { id: "read_btn" }]);
	let profileUpdateBtn = createNewElement(["button", "Ops_Buttons", ProfileBtnOpsContainer, `Update`, { id: "update_btn" }]);
	let profileDelBtn = createNewElement(["button", "Ops_Buttons", ProfileBtnOpsContainer, `Delete`, { id: "delete_btn" }]);

	profileReadBtn.addEventListener("click", (e) => {
		let clickedBtnId = profileReadBtn.parentElement.parentElement.nextSibling.id;
		let currentModal = usersDataArray.find((user) => user.getID() === clickedBtnId);
		console.log(currentModal)
		if (currentModal) {
			currentModal.read();
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
