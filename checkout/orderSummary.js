import {carts, removeFromCart, updateDeliveryOption} from '../Cart.js'
import { Products, getProduct } from '../Products.js';
import {deliveryOptions, getDeliveryOption} from '../delivery.js'

// external library dayjs url https://unpkg.com/dayjs@1.11.10/esm/index.js
// realtime date
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { renderPaymentSummary } from './paymentSummary.js'; 

// create a variable today and equal it to dayjs
var today = dayjs();
var deliveryDate = today.add(7, 'days');

// create a function of all the code below

export function renderOrderSummary() {

// loop over the cart
// parameter cartItem
// each cartItem we generate HTML
// we have to find the ID product. so to do that we need to create a variable equals to cartItem.productId
// create a variable to save the result 'matchingProducts'
// loop throught product array
// parameter of product
// replace the name, image, priceCents from 'products' array. ex. ${matchingProduct.image}
// replace the quantity from 'cart' array ${cartItem.quantity}
// create a variable 'cartSummaryHTML' and += it to the `html`
// DOM the class 'js-order-summary' and innerHTML it to 'cartSummaryHTML'
// change the radio name to ${cartItem.productId}
// DOM the class 'js-delete-link' and addEventListener click then loop it.
// add 'data-product-id="${matchingProduct.id}"' after the class name
// link.dataset.productId; dataset to access the data attributes and access .productId
// import the removeFromCart(productId); and put it inside the delete DOM
// add class on cart item container 'js-cart-item-container-${matchingProduct.id}'
// use DOM on js-cart-item-container-${productId}`) and variable it to 'container'
// type 'container.remove();'




var cartSummaryHTML ='';

carts.forEach((cartItem) => {

    var productId = cartItem.productId;

    var matchingProduct = getProduct(productId);

    var deliveryOptionId = cartItem.deliveryOptionId;

    var deliveryOption = getDeliveryOption(deliveryOptionId);

   

    var today = dayjs();
    var deliveryDate = today.add(deliveryOption.deliveryDays,'days');
    var dateString = deliveryDate.format('dddd, MMMM D');
    

cartSummaryHTML += 

    ` <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">₱
                ${(matchingProduct.price).toFixed(2)
                }
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    
                  </span>
                  <span class="delete-quantity-link link-primary css-delete js-delete-link" data-product-id="${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                
                  ${deliveryOptionsHTML(matchingProduct, cartItem)}

              </div>
            </div>
          </div>`;
    
});

function deliveryOptionsHTML(matchingProduct, cartItem) {

  var html ='';



  deliveryOptions.forEach((deliveryOption) => {
    var today = dayjs();
    var deliveryDate = today.add(deliveryOption.deliveryDays,'days');
    var dateString = deliveryDate.format('dddd, MMMM D');
    var priceString = deliveryOption.price === 0
      ? 'FREE DELIVERY'
      : `₱${deliveryOption.price} -`;

      var isChecked = deliveryOption.id === cartItem.deliveryOptionId;

      html +=
                  `<div class="delivery-option js-delivery-option" data-product-id="${matchingProduct.id}" 
                  data-delivery-option-id="${deliveryOption.id}">
                          <input type="radio"
                          ${isChecked ? 'checked' :''}
                            class="delivery-option-input"
                            name="${matchingProduct.id}">
                          <div>
                            <div class="delivery-option-date">
                              ${dateString}
                            </div>
                            <div class="delivery-option-price">
                              ${priceString} - Shipping
                            </div>
                          </div>
                        </div>
                        `
  });

  return html;

};


document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;


document.querySelectorAll('.js-delete-link').forEach((link) => {
  link.addEventListener('click', () => {
    var productId = link.dataset.productId;
    removeFromCart(productId);
    
    var container = document.querySelector(`.js-cart-item-container-${productId}`);
    
    container.remove();

    renderPaymentSummary();


    
  });
});




document.querySelectorAll('.js-delivery-option').forEach((element) => {
  element.addEventListener('click', () => {

      var {productId, deliveryOptionId} = element.dataset;

      updateDeliveryOption(productId, deliveryOptionId);

     renderOrderSummary();
     renderPaymentSummary();
     
  });
});



}



