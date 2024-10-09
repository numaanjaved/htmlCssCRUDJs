let formTextInputContent = createNewElement(["div", "form_input_content", form]);
let formTextContentContainer = createNewElement(["div", "form_text_content_container", formTextInputContent]);
let inputTypeContainer = createNewElement(["div", "type_input_container", formTextContentContainer]);
let inputArrayData = [
  {
    labelHeading: "First Name",
    forAttr: {
      for: "userF_name",
    },
    errorClass: "Fname_error",
    inputAttr: {
      type: "text",
      id: "user_Fname",
      name: "user_Fname",
      autocomplete: "off",
      placeholder: "e.g., John",
    },
  },
  {
    labelHeading: "Last Name",
    forAttr: {
      for: "userL_name",
    },
    errorClass: "Lname_error",
    inputAttr: {
      type: "text",
      id: "user_Lname",
      name: "user_Lname",
      autocomplete: "off",
      placeholder: "e.g., Smith",
    },
  },
  {
    labelHeading: "Email",
    forAttr: {
      for: "user_email",
    },
    errorClass: "email_error",
    inputAttr: {
      type: "text",
      id: "user_email",
      name: "user_email",
      autocomplete: "off",
      placeholder: "e.g., johnsmith@gmail.com",
    },
  },
  {
    labelHeading: "Contact Number",
    forAttr: {
      for: "user_contact",
    },
    errorClass: "contact_error",
    inputAttr: {
      type: "tel",
      id: "user_contact",
      name: "user_contact",
      autocomplete: "off",
      placeholder: "e.g., 921234567891",
    },
  },
  {
    labelHeading: "Address",
    forAttr: {
      for: "user_address",
    },
    errorClass: "address_error",
    inputAttr: {
      type: "text",
      id: "user_address",
      name: "user_address",
      autocomplete: "off",
      placeholder: "e.g., 123 Elm St, Springfield, IL",
    },
  },
];
inputArrayData.forEach((data, index) => {
  createNewElement(["label", "text_form_labels", inputTypeContainer, data.labelHeading, data.forAttr]);
  createNewElement(["span", ["error_msg", `${data.errorClass}`], inputTypeContainer]);
  createNewElement(["input", "user_inputs", inputTypeContainer, null, data.inputAttr]);
});
let textAreaTypeContainer = createNewElement(["div", "type_textArea_container", formTextContentContainer,]);
createNewElement(["label", "text_form_labels", textAreaTypeContainer, `Profile Description`, { for: "user_bio" }]);
createNewElement(["span", ["error_msg", "bio_error"], textAreaTypeContainer]);
textAreaAttributes = {
  id: "user_bio",
  name: "user_bio",
  spellcheck: "false",
  autocomplete: "off",
  placeholder: "Write 250-300 characters.....",
};
createNewElement(["textArea", "user_bio_input", textAreaTypeContainer, null, textAreaAttributes]);
let textAreaInfoMsgContainer = createNewElement(["div", "textArea_Info_msg_container", textAreaTypeContainer]);
let userTypeMainContainer = createNewElement(["div", "user_type_container", textAreaTypeContainer]);
let userTypeSubContainer = createNewElement(["div", "user_type_sub_container", userTypeMainContainer]);
createNewElement(["h3", "choose_user_text", userTypeSubContainer, `Choose User Type`]);
let chooseUserContainer = createNewElement(["div", "choose_user_container", userTypeSubContainer]);
let userRadioContainer = createNewElement(["div", "radio_container", chooseUserContainer]);
createNewElement(["input", "user_type", userRadioContainer, null, { type: "radio", id: "user_radio", name: "user_Check" }]);
createNewElement(["label", "user_type_label", userRadioContainer, `User`, { for: `user_radio` }]);
let adminRadioContainer = createNewElement(["div", "radio_container", chooseUserContainer]);
createNewElement(["input", "user_type", adminRadioContainer, null, { type: "radio", id: "admin_radio", name: "user_Check" }]);
createNewElement(["label", "user_type_label", adminRadioContainer, `Admin`, { for: "admin_radio" }]);
createNewElement(["span", "limit_exceed_text", textAreaInfoMsgContainer]);
createNewElement(["span", "limit_text", textAreaInfoMsgContainer, `0/300`]);