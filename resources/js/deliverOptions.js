"use strict";
// layer for payment
let shippingForm = document.getElementById("shippingForm");
let btn_choosePayment = document.getElementById("choosePayment");
btn_choosePayment.style.display = "none";
function onSubmit(event) {
  event.preventDefault();
  btn_choosePayment.style.display = "inline";
}
shippingForm.addEventListener("submit", onSubmit);

// activate btn in township modal

const town_btns = document.getElementsByClassName("townBtn");
const next_btn = document.getElementById("nextBtn");
next_btn.classList.add("d-none");
const town = document.querySelectorAll(".townBtn .town");
const price = document.querySelectorAll(".townBtn .deli_price");
const town_length = town_btns.length;
let pre_active = 0;
for (let i = 0; i < town_length; i++) {
  town_btns[i].addEventListener("click", function () {
    // show next button
    next_btn.classList.remove("d-none");
    // toggle btn active
    town_btns[pre_active].classList.remove("bg-primary");
    town_btns[pre_active].classList.remove("text-white");
    town[pre_active].classList.remove("marked_town");
    price[pre_active].classList.remove("marked_price");
    town_btns[i].classList.add("bg-primary");
    town_btns[i].classList.add("text-white");
    // mark town and price for next section
    town[i].classList.add("marked_town");
    price[i].classList.add("marked_price");
    pre_active = i;
  });
}

//render shipping table in info box
const total_items = document.getElementById("totalField");
const clothsTotal_area = document.getElementById("clothsTotal");
const deliTownship_area = document.getElementById("deliTownship");
const deliPrice_area = document.getElementById("deliPrice");
const FinalTotal_area = document.getElementById("FinalTotal");

next_btn.addEventListener("click", function () {
  deliTownship_area.textContent =
    document.querySelector(".marked_town").textContent;
  deliPrice_area.textContent =
    document.querySelector(".marked_price").textContent;
    clothsTotal_area.textContent=total_items.textContent
  const FinalTotal = +total_items.textContent + +deliPrice_area.textContent;
  FinalTotal_area.textContent = FinalTotal;
});
