let userTypeMainContainer = createNewElement(["div", "user_type_container", textAreaTypeContainer]);
let userTypeSubContainer = createNewElement(["div", "user_type_sub_container", userTypeMainContainer]);
createNewElement(["h3", "choose_user_text", userTypeSubContainer, `Choose User Type`]);
let chooseUserContainer = createNewElement(["div", "choose_user_container", userTypeSubContainer]);
let userRadioContainer = createNewElement(["div", "radio_container", chooseUserContainer]);
let userRadioBtn = createNewElement(["input", "user_type", userRadioContainer, null, { type: "radio", id: "user_radio", name: "user_Check" }]);
let radioBtnLabel = createNewElement(["label", "user_type_label", userRadioContainer, `User`, { for: `user_radio` }]);
let adminRadioContainer = createNewElement(["div", "radio_container", chooseUserContainer]);
let adminRadioBtn = createNewElement(["input", "user_type", adminRadioContainer, null, { type: "radio", id: "admin_radio", name: "user_Check" }]);
createNewElement(["label", "user_type_label", adminRadioContainer, `Admin`, { for: "admin_radio" }]);
let adminAttContainer = createNewElement(["div", "admin_attr_container", userTypeSubContainer]);
createNewElement(["label", "admin_label", adminAttContainer, `Username`, { for: "admin_name" }]);
createNewElement(["input", "admin_input", adminAttContainer, null, {
    type: "text",
    id: "admin_name_input",
    name: "admin_name",
    autocomplete: "off",
    placeholder: "e.g., john_smith",
}]);
createNewElement(["label", "admin_label", adminAttContainer, `Password`, { for: "admin_password" }]);
createNewElement(["input", "admin_input", adminAttContainer, null, {
    type: "password",
    id: "admin_password_input",
    name: "admin_password",
    autocomplete: "off",
    placeholder: "Enter password here.....",
}]);


userRadioBtn.addEventListener("click", () => {
    adminAttContainer.style.display = "none";
});
adminRadioBtn.addEventListener("click", () => {
    adminAttContainer.style.display = "flex";
});