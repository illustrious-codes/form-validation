"use strict";
const submit = document.querySelector("form");
const userName = document.querySelector(".username");
const email = document.querySelector(".email");
const number = document.querySelector(".number");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm_password");
const open = document.querySelector(".open");

open.addEventListener("click", (e) => {
  e.preventDefault();
  password.type = "text";
  confirmPassword.type = "text";
});

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.userName.value);
  console.log(e.target.email.value);
  console.log(e.target.number.value);
  const password = e.target.password.value;
  const confirmPassword = e.target.confirmPassword.value;
  if (password === confirmPassword) {
    console.log(e.target.password.value);
    console.log(e.target.confirmPassword.value);
  } else {
    alert("Password does not marge");
  }
});
