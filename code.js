let headLog = document.querySelector(".loginBtn");
let formPopUp = document.querySelector(".formPOPup");
let closeBtn = document.querySelector(".close");
let buttLink = document.querySelector(".link ");
let realLogin = document.querySelector(".login");
let signLink = document.querySelector(".signUp");
formBox = document.querySelector(".formBox");
let loginButonLink = document.querySelector(".showLogin");
console.log(loginButonLink);

// headLog.addEventListener("click", () => {k
//   formPopUp.style.opacity = "1";
// });
headLog.addEventListener("click", () => {
  formPopUp.classList.toggle("formpo2");
});
closeBtn.addEventListener("click", () => {
  formPopUp.classList.toggle("formpo2");
});
buttLink.addEventListener("click", () => {
  realLogin.style.display = "none";

  signLink.style.display = "flex";
});
loginButonLink.addEventListener("click", () => {
  realLogin.style.display = "flex";
  signLink.style.display = "none";
});
$(document).keypress(function (event) {
  $("h1").text(event.key);
});
