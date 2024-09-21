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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidationFunc();

  // console.log(userDataContainer.id);

  // console.log(usersDataArray);
});
charLimitCheck();
// Character limit functionality
