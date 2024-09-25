let validData = () => {
  let userData = [
    userFirstName.value,
    userLastName.value,
    userEmail.value,
    userContactNumber.value,
    userAddress.value,
    userBio.value,
    URL.createObjectURL(imgInput.files[0]),
  ];
  let userDataObj = new User();
  userDataObj.create(userData);
  if (userIndexCheck !== null) {
    usersDataArray[userIndexCheck] = userDataObj;
  } else {
    usersDataArray.push(userDataObj);
  }
  console.log(userDataObj);
  form.reset();
  if (
    imgDisplay.src != "http://127.0.0.1:5500/Assets/images/default_profile.png"
  ) {
    imgDisplay.src = "http://127.0.0.1:5500/Assets/images/default_profile.png";
  }
};
