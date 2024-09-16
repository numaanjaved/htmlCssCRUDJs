//Form Image display function

let imgInput = document.querySelector("#imageUpload");
let imgDisplay = document.querySelector("#form_img");

imgInput.onchange = () => {
  imgDisplay.src = URL.createObjectURL(imgInput.files[0]);
};
