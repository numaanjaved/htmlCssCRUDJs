//Form Image display function

let imgInput = document.querySelector("#imageUpload");
let imgDisplay = document.querySelector("#form_img");
imgInput.addEventListener("change", () => {
  imgDisplay.src = URL.createObjectURL(imgInput.files[0]);
});
// Image information msg
let imgUploadBtn = document.querySelector(".choose_img_label");
let imgInfoMsg = document.querySelector("#img_info");
imgUploadBtn.addEventListener("mouseenter", () => {
  imgInfoMsg.style.opacity = 1;
});
imgUploadBtn.addEventListener("mouseleave", () => {
  imgInfoMsg.style.opacity = 0;
});

// Each user record elements:=>
// Main container:

// Adding form Validation=>

// Error messages
let FnameErr = document.querySelector(".Fname_error");
let LnameErr = document.querySelector(".Lname_error");
let emailErr = document.querySelector(".email_error");
let contactErr = document.querySelector(".contact_error");
let addressErr = document.querySelector(".address_error");
let bioErr = document.querySelector(".bio_error");
let image_error_msg = document.getElementById("img_error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidationFunc();
  usersDataMainContainer.innerHTML = ``;
  usersDataArray.forEach((data, index) => {
    recordFunc(
      `${data.userPicture}`,
      `${data.FirstName} ${data.LastName}`,
      `${data.Email}`,
      `${data.Contact}`,
      index + 1
    );
    readModalFunc(
      `${data.userPicture}`,
      `${data.FirstName} ${data.LastName}`,
      `${data.Email}`,
      `${data.Contact}`,
      `${data.Address}`,
      `${data.Bio}`,
      index + 1
    );
  });
});
charLimitCheck();
// Character limit functionality
