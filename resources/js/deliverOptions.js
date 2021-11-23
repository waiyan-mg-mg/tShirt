"use strict";
let shippingForm = document.getElementById("shippingForm");
let btn_choosePayment = document.getElementById("choosePayment");
btn_choosePayment.style.display = "none";
function onSubmit(event) {
  event.preventDefault();
  btn_choosePayment.style.display = "inline";
}
shippingForm.addEventListener("submit", onSubmit);
