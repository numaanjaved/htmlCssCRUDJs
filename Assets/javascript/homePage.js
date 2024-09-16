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
let userFirstName = document.getElementById("user_Fname");
let userLastName = document.getElementById("user_Lname");
let userEmail = document.getElementById("user_email");
let form = document.querySelector(".data_form");
let FnameErr = document.querySelector(".Fname_error");
let LnameErr = document.querySelector(".Lname_error");
let emailErr = document.querySelector(".email_error");
let contactErr = document.querySelector(".contact_error");
let addressErr = document.querySelector(".address_error");
let bioErr = document.querySelector(".bio_error");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //   First Name Validation
  if (userFirstName.value == "" || userFirstName == null) {
    FnameErr.innerHTML = `Please fill the First Name`;
    FnameErr.style.display = "block";
  } else {
    if (!userFirstName.value.match(/^[a-zA-Z]{1,}$/)) {
      FnameErr.innerHTML = `Please match the given example`;
      userFirstName.value = "";
      FnameErr.style.display = "block";
    } else {
      FnameErr.innerHTML = "";
      FnameErr.style.display = "none";
      userFirstName.value = "";
    }
  }
  // Last Name Validation
  if (userLastName.value == "" || userLastName == null) {
    LnameErr.innerHTML = `Please fill the Last Name`;
    LnameErr.style.display = "block";
  } else {
    if (!userLastName.value.match(/^[a-zA-Z]{1,}$/)) {
      LnameErr.innerHTML = `Please match the given example`;
      userLastName.value = "";
      LnameErr.style.display = "block";
    } else {
      LnameErr.innerHTML = "";
      LnameErr.style.display = "none";
      userLastName.value = "";
    }
  }
  //   Email Validation
  if (userEmail.value == "" || userEmail == null) {
    emailErr.innerHTML = `Please fill the Email field`;
    emailErr.style.display = "block";
  } else {
    if (
      !userEmail.value.match(
        /^[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*@[A-Za-z]+\.[A-Za-z]{2,}$/
      )
    ) {
      emailErr.innerHTML = `Please match the given example`;
      userEmail.value = "";
      emailErr.style.display = "block";
    } else {
      emailErr.innerHTML = "";
      emailErr.style.display = "none";
      userEmail.value = "";
    }
  }
});
