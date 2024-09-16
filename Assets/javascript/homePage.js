//Form Image display function

let imgInput = document.querySelector("#imageUpload");
let imgDisplay = document.querySelector("#form_img");

imgInput.onchange = () => {
  imgDisplay.src = URL.createObjectURL(imgInput.files[0]);
};

// Image information msg

let imgUploadBtn = document.querySelector(".choose_img_label");
let imgInfoMsg = document.querySelector("#img_info");
imgUploadBtn.addEventListener("mouseenter", () => {
  imgInfoMsg.style.opacity = 1;
});
imgUploadBtn.addEventListener("mouseleave", () => {
  imgInfoMsg.style.opacity = 0;
});

// Adding form Validation
// First Name Validation
let userFirstName = document.getElementById("user_Fname");
let form = document.querySelector(".data_form");
let errorMessage = document.querySelector(".error_msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (userFirstName.value == "" || userFirstName == null) {
    errorMessage.innerHTML = `Please fill the First Name`;
    errorMessage.style.display = "block";
  } else {
    if (!userFirstName.value.match(/^[a-zA-Z]{1,}$/)) {
      errorMessage.innerHTML = `Please match the given example`;
      userFirstName.value = "";
      errorMessage.style.display = "block";
    } else {
      errorMessage.innerHTML = "";
      errorMessage.style.display = "none";
      userFirstName.value = "";
    }
  }
});
