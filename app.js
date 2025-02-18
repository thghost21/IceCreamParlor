//SECTION - Global
const iceCreams = [
  { name: 'Cookie Dough', price: 4, quantity: 0, type: 'scoop' },
  { name: 'Vanilla', price: 3, quantity: 0, type: 'scoop' },
  { name: 'Strawberry', price: 4, quantity: 0, type: 'scoop' },
  { name: 'Chocolate', price: 4, quantity: 0, type: 'scoop' },
  { name: 'Birthday Cake', price: 3, quantity: 0, type: 'scoop' },
  { name: 'Mint', price: 3, quantity: 0, type: 'scoop' },
  { name: 'Sprinkles', price: 2, quantity: 0, type: 'topping' },
  { name: 'Chocolate Chips', price: 3, quantity: 0, type: 'topping' },
  { name: 'Gummy Worms', price: 2, quantity: 0, type: 'topping' },
  { name: 'Waffle Cone', price: 3, quantity: 0, type: 'vessel' },
  { name: 'Waffle Bowl', price: 4, quantity: 0, type: 'vessel' },
  { name: 'Bowl', price: 2, quantity: 0, type: 'vessel' },

]
//!SECTION



//SECTION - Actions/Logic
function orderItem(indexNumber) {
  const iceCream = iceCreams[indexNumber]
  iceCream.quantity++
  console.log(iceCream.name);

  drawOrder()
  drawPrice()
}

function totalOrder() {
  let total = 0
  for (let i = 0; i < iceCreams.length; i++) {
    const iceCream = iceCreams[i];

    total += iceCream.price * iceCream.quantity

  }
  return total

}

function checkout() {
  if (totalOrder() <= 0) {
    window.alert("Please Add items to Checkout")
  } else {
    window.alert("Your Cart Total is $" + totalOrder())

  }
  clearCart()
  drawOrder()
  drawPrice()
}

function clearCart() {
  for (let i = 0; i < iceCreams.length; i++) {
    const clearCartElem = iceCreams[i];
    clearCartElem.quantity = 0
  }

}


//!SECTION



//SECTION - Draw



function drawOrder() {

  let orderContent = ''

  for (let i = 0; i < iceCreams.length; i++) {
    const orderElem = iceCreams[i];
    if (orderElem.quantity > 0) {
      orderContent += `<li>${orderElem.name} QTY: ${orderElem.quantity} PRICE: $${orderElem.price}</li>`
    }

  }
  const orderElem = document.getElementById('orderList')
  orderElem.innerHTML = orderContent

}

function drawPrice() {
  const priceElem = document.getElementById('orderPrice')
  const orderPrice = totalOrder()
  priceElem.innerText = orderPrice
}

//!SECTION
