let createUser = (userDataArr) => {
  let userDataObj = new User();
  userDataObj.create(userDataArr);

  if (userIndexCheck !== null) {
    usersDataArray[userIndexCheck] = userDataObj;
  } else {
    usersDataArray.push(userDataObj);
  }
};

let validateData = (userDataArr) => {
  createUser(userDataArr);
  form.reset();
  if (
    imgDisplay.src != "http://127.0.0.1:5500/Assets/images/default_profile.png"
  ) {
    imgDisplay.src = "http://127.0.0.1:5500/Assets/images/default_profile.png";
  }
};
