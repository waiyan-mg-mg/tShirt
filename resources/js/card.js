let original_state = [
  {
    id: 1,
    name: "itemName",
    price: 25000,
    imgPath: `./data/Shirt/allproduct/long/long1.jpeg`,
    amount: 1,
  },
  {
    id: 2,
    name: "itemName",
    price: 50000,
    imgPath: "./data/Shirt/allproduct/long/long2.jpeg",
    amount: 1,
  },
  {
    id: 3,
    name: "itemName",
    price: 10000,
    imgPath: "./data/Shirt/allproduct/long/long3.jpeg",
    amount: 1,
  },
  {
    id: 4,
    name: "itemName",
    price: 23000,
    imgPath: "./data/Shirt/allproduct/long/long4.jpeg",
    amount: 1,
  },
  {
    id: 5,
    name: "itemName",
    price: 10000,
    imgPath: "./data/Shirt/allproduct/long/long5.jpeg",
    amount: 1,
  },
  {
    id: 6,
    name: "itemName",
    price: 30000,
    imgPath: "./data/Shirt/allproduct/long/long6.jpeg",
    amount: 1,
  },
  {
    id: 7,
    name: "itemName",
    price: 60000,
    imgPath: "./data/Shirt/allproduct/long/long7.jpeg",
    amount: 1,
  },
  {
    id: 8,
    name: "itemName",
    price: 78000,
    imgPath: "./data/Shirt/allproduct/Office/office0.jpg",
    amount: 1,
  },
  {
    id: 9,
    name: "itemName",
    price: 40000,
    imgPath: "./data/Shirt/allproduct/Office/office1.jpg",
    amount: 1,
  },
  {
    id: 10,
    name: "itemName",
    price: 40000,
    imgPath: "./data/Shirt/allproduct/Office/office2.jpg",
    amount: 1,
  },
  {
    id: 11,
    name: "itemName",
    price: 4500,
    imgPath: "./data/Shirt/allproduct/short/short0.jpeg",
    amount: 1,
  },
  {
    id: 12,
    name: "itemName",
    price: 4500,
    imgPath: "./data/Shirt/allproduct/short/short1.jpeg",
    amount: 1,
  },
  {
    id: 13,
    name: "itemName",
    price: 4500,
    imgPath: "./data/Shirt/allproduct/short/short3.jpeg",
    amount: 1,
  },
  {
    id: 14,
    name: "itemName",
    price: 4500,
    imgPath: "./data/Shirt/allproduct/short/short4.jpeg",
    amount: 1,
  },
  {
    id: 15,
    name: "itemName",
    price: 4500,
    imgPath: "./data/Shirt/allproduct/short/short5.jpeg",
    amount: 1,
  },
  {
    id: 16,
    name: "itemName",
    price: 4500,
    imgPath: "./data/Shirt/allproduct/short/short6.jpeg",
    amount: 1,
  },
  {
    id: 17,
    name: "itemName",
    price: 4800,
    imgPath: "./data/Shirt/allproduct/Kids/kid1.jpeg",
    amount: 1,
  },
  {
    id: 18,
    name: "itemName",
    price: 3000,
    imgPath: "./data/Shirt/allproduct/Kids/kid2.jpeg",
    amount: 1,
  },
  {
    id: 19,
    name: "itemName",
    price: 4000,
    imgPath: "./data/Shirt/allproduct/Kids/kid3.jpeg",
    amount: 1,
  },
  {
    id: 20,
    name: "itemName",
    price: 3000,
    imgPath: "./data/Shirt/allproduct/Kids/kid4.jpeg",
    amount: 1,
  },
  {
    id: 21,
    name: "itemName",
    price: 2500,
    imgPath: "./data/Shirt/allproduct/Kids/kid5.jpeg",
    amount: 1,
  },
  {
    id: 22,
    name: "itemName",
    price: 2500,
    imgPath: "./data/Shirt/allproduct/Kids/kid6.jpeg",
    amount: 1,
  },
];

let selected_items = []; //this is our main data
// ================================================functions================================================
const updatecardNumber = (amount) => (cardNumber.textContent = amount);
function activeBtnState(
  btn_Inc_amount,
  btn_Dec_amount,
  amount_area,
  price_area
) {
  // when press +
  let In_length = btn_Inc_amount.length;
  for (let i = 0; i < In_length; i++) {
    btn_Inc_amount[i].addEventListener("click", () => {
      selected_items[i].amount += 1;
      amount_area[i].textContent = selected_items[i].amount;
      let normal_price = selected_items[i].price;
      selected_items[i].singalTotal = normal_price * +selected_items[i].amount;
      price_area[i].textContent = selected_items[i].singalTotal;
      // update total again
      let total_change = 0;
      selected_items.map((i) => {
        total_change += i.price * i.amount;
      });
      total_field.textContent = total_change;
    });
    // when press -
    btn_Dec_amount[i].addEventListener("click", () => {
      selected_items[i].amount > 1
        ? (selected_items[i].amount -= 1)
        : (selected_items[i].amount = 1);
      amount_area[i].textContent = selected_items[i].amount;
      let normal_price = selected_items[i].price;
      price_area[i].textContent = normal_price * +selected_items[i].amount;
      // update total again
      let total_change = 0;
      selected_items.map((i) => {
        total_change += i.price * i.amount;
      });
      total_field.textContent = total_change;
    });
  }
}
function updateTableBody(selected_items) {
  for (let i = 0; i < selected_items.length; i++) {
    total_cost += selected_items[i].price * selected_items[i].amount;
    node_string += `<tr>
    <td>
     <img
      src=${selected_items[i].imgPath}
       alt="image"
     class="img-fluid"
     />
     </td>
     <td>
     <i class="fas fa-plus-circle amountInc"></i
     ><span class="amount_area">${selected_items[i].amount}</span>
     <i class="fas fa-minus-circle amountDec"></i>
     </td>
     <td ><em class='price_area'>${
       selected_items[i].price * selected_items[i].amount
     }</em> <span>MMK</span></td>
     <td><i class="fas fa-trash-alt"></i></td>
     </tr>`;
  }
  //add lists to table body
  table_body.innerHTML = node_string;
  // add total cost to total field
  total_field.textContent = total_cost;

  // set to normal state
  node_string = "";
  total_cost = 0;
}
function deleteState(btn_delete) {
  for (let i = 0; i < btn_delete.length; i++) {
    btn_delete[i].addEventListener("click", () => {
      // update selected items (!filter)
      selected_items = selected_items.filter((item) => {
        // resolve unselected error
        if (item === selected_items[i]) {
          btn_add[item.id - 1].classList.remove("selected");
        }
        return item !== selected_items[i];
      });

      // update table body
      updateTableBody(selected_items);
      // run amount controller button
      const btn_Inc_amount = document.querySelectorAll(".amountInc");
      const btn_Dec_amount = document.querySelectorAll(".amountDec");
      const amount_area = document.querySelectorAll(".amount_area");
      const price_area = document.querySelectorAll(".price_area");
      // update
      activeBtnState(btn_Inc_amount, btn_Dec_amount, amount_area, price_area);
      added_item--;
      updatecardNumber(added_item);
      // btn_add[selected_items[i]].classList.remove("selected");
      const btn_delete = document.querySelectorAll(".fa-trash-alt");
      deleteState(btn_delete); //that is a crazy statement but keep in your mind
    });
  }
}
// ==================get elements==================
let cardNumber = document.querySelector("#cardNumber");
let price_area = document.querySelectorAll(".price");
let btn_add = document.querySelectorAll(".add_card");
// ================================================state variables================================================
let added_item = 0;
// set initial prices

let price_length = price_area.length;
for (let i = 0; i < price_length; i++) {
  price_area[i].textContent = `${original_state[i].price} MMK`;
}

// send data to total card
let add_length = btn_add.length;
for (let i = 0; i < add_length; i++) {
  btn_add[i].addEventListener("click", () => {
    let is_selected = btn_add[i].classList.contains("selected"); //check that the items is selected or unselected
    if (is_selected) {
      alert("already selected");
    } else {
      added_item++;
      updatecardNumber(added_item);
      selected_items.push(original_state[i]); //so we get selected items in here
      btn_add[i].classList.add("selected");
    }
  });
}
/* ________________________________________ */

//  append table row elment (with selected data) to total cart

const shopping_cart = document.querySelector(".fa-shopping-cart");
const table_body = document.querySelector("#totalTable tbody");
const total_field = document.getElementById("totalField");

let node_string = "";
let total_cost = 0;

shopping_cart.addEventListener("click", () => {
  updateTableBody(selected_items);
  // state in increase or decrease amount
  const btn_Inc_amount = document.querySelectorAll(".amountInc");
  const btn_Dec_amount = document.querySelectorAll(".amountDec");
  const amount_area = document.querySelectorAll(".amount_area");
  const price_area = document.querySelectorAll(".price_area");
  activeBtnState(btn_Inc_amount, btn_Dec_amount, amount_area, price_area);
  // delete state

  const btn_delete = document.querySelectorAll(".fa-trash-alt");
  deleteState(btn_delete);
});
