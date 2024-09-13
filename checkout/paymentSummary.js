import {getProduct} from '../Products.js'
import {carts, removeFromCart, updateDeliveryOption} from '../Cart.js'
import {getDeliveryOption} from '../delivery.js'

export function renderPaymentSummary() {

    var productPrice = 0;
    var shippingPrice = 0;

    carts.forEach((cartItem) => {
       var product = getProduct(cartItem.productId);
       productPrice += product.price * cartItem.quantity;

       var deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
       shippingPrice += deliveryOption.price;
    });
   
    var totalBeforeTax = productPrice + shippingPrice;
    var tax = totalBeforeTax * 0.1;
    var total = totalBeforeTax + tax;

let cartQuantity = 0;

  carts.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  var reviewOrderHTML = `<div>Review your order: Checkout(${cartQuantity})</div>`;

    var paymentSummaryHTML =

   
    `
        <div class="payment-summary-title">
                Order Summary
            </div>

            <div class="payment-summary-row">
                <div>Items (${cartQuantity}):</div>
                <div class="payment-summary-money">₱${productPrice.toFixed(2)}</div>
            </div>

            <div class="payment-summary-row">
                <div>Shipping &amp; handling:</div>
                <div class="payment-summary-money">₱${shippingPrice.toFixed(2)}</div>
            </div>

            <div class="payment-summary-row subtotal-row">
                <div>Total before tax:</div>
                <div class="payment-summary-money">₱${totalBeforeTax.toFixed(2)}</div>
            </div>

            <div class="payment-summary-row">
                <div>Estimated tax (10%):</div>
                <div class="payment-summary-money">₱${tax.toFixed(2)}</div>
            </div>

            <div class="payment-summary-row total-row">
                <div>Order total:</div>
                <div class="payment-summary-money">₱${total}</div>
            </div>

            <button class="place-order-button button-primary">
                Place your order
            </button>
    `;

    

    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

     document.querySelector('.js-checkout-value').innerHTML = reviewOrderHTML;
}





 




