"use strict";

var updateBtns = document.getElementsByClassName('update-cart');

for (var i = 0; i < updateBtns.length; i++) {
  updateBtns[i].addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện

    var productId = this.dataset.product;
    var action = this.dataset.action;
    console.log('productId', productId, 'action', action);
    console.log("user", user);

    if (user === "AnonymousUser") {
      console.log("Moi dang nhap");
    } else {
      updateUserOrder(productId, action);
    }
  });
}

function updateUserOrder(productId, action) {
  console.log('user logged in ,success add  ');
  fetch('/update_item/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken
    },
    body: JSON.stringify({
      'productId': productId,
      'action': action
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log("data", data);
    location.reload();
  });
}