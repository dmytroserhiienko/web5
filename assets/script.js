let popup = document.getElementById("popup");
let btn = document.getElementById("section_button");
let span = document.getElementsByClassName("popup_close")[0];

btn.onclick = function () {
  popup.classList.add("open");
};
span.onclick = function () {
  popup.classList.remove("open");
};
window.onclick = function (event) {
  if (event.target == popup) {
    popup.classList.remove("open");
  }
};

let form = document.getElementsByTagName("form")[0];
let email = document.getElementById("mail");
let error = document.querySelector(".error");
let tel = document.getElementById("tel");
let button = document.getElementById("btn");
function validate() {
  if (!email.value) {
    email.style.border = "2px solid red";
    return false;
  } else {
    email.style.border = "2px solid black";
  }
  if (!tel.value) {
    tel.style.border = "2px solid red";
    return false;
  } else {
    tel.style.border = "2px solid black";
  }
}
