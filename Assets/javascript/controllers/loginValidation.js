let adminAcc = new Admin();
adminAcc.setAdminName(`ahmed_tahiri`);
adminAcc.setPassword(`Ahmed123`);
adminAcc.setFirstName("Ahmed");
adminAcc.setLastName("Tahiri");
adminAcc.setEmail("ahmedtahri@gmail.com");
adminAcc.setContactNum("03335910691");
adminAcc.setAddress("Jail Road Lahore");
adminAcc.setBio("I'm Professional Web developer");
adminAcc.setProfilePic("./Assets/images/default_profile.png");
adminAcc.setUserType("Admin");
adminAcc.setID();
usersDataArray.push(adminAcc);




let loginFromReset = () => {
    loginForm.reset();
};

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let testValidation = new LoginValidation();
    testValidation.checkLoginValidation(loginUserName);
    testValidation.checkLoginValidation(loginUserPassword);
    loginFromReset();
});
