   //import array cart and array products from javascript files
    //export their variable name
    //special technique. we are just saving the productId of the 'products' and then we can use the productId to see the other details like name, image.
    //using JSON we can store our data after reloading
    // creating a function  saveMyStorage()
    



export var carts = JSON.parse(localStorage.getItem('carts'));

if (!carts) {
    carts = [{
    productId: 'b27a06e1-c0f6-4d51-b20c-deaf614862e9',
    quantity: 2,
    deliveryOptionId: '1'
},{
    productId: 'b51a2bf4-a6ba-4938-a50e-edf6d3ed56d3',
    quantity: 1,
    deliveryOptionId: '2'
},];
}

function saveMyStorage() {
    localStorage.setItem('carts', JSON.stringify(carts))
}

    
    //export addToCart to use in other files
    //create a function for clearer code then call the 'addToCart()' function inside '.js-add-to-cart'
    //add a parameter 'productId'. because the productId is outside the function below and we cant call it.
    // 'cart.push' to push a data everytime we click on add to cart product
    // 'cart.forEach' METHOD with a parameter of 'item' that contain 'productId' and 'quantity'
    // productId === item.productId if product name matched that means its already in the cart
    // create variable 'matchingItem' 
    // matchingItem = item; here we can figure out if the product is in the cart
    // if the product is in the cart. we can still increase it by 1 by using 'if' statement and matchingItem.quantity += 1;
    // put here the  saveMyStorage();

export function addToCart (productId) {
    
    var matchingItem;

       carts.forEach((cartItem) => {
           if (productId === cartItem.productId) {
               matchingItem = cartItem;
           }
       });

        // DOM the number selector

    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

       // convert string to number


    const quantity = Number(quantitySelector.value);

    // add to cart icon

let addedMessageTimeoutId;

    const addedMessage = document.querySelector(
        `.js-added-to-cart-${productId}`
      );
        addedMessage.classList.add ('added-to-cart-ON'); 

        if (addedMessageTimeoutId) {
            clearTimeout(addedMessageTimeoutId);
          }
    
          const timeoutId = setTimeout(() => {
            addedMessage.classList.remove('added-to-cart-ON');
          }, 1000);
    
          addedMessageTimeoutId = timeoutId;
        
    
    
       if (matchingItem) {
       matchingItem.quantity += quantity;
       } else {
           carts.push({
               productId: productId,
               quantity: quantity,
               deliveryOptionId: '1'
           });
       }

       saveMyStorage();
}

export function removeFromCart(productId) {
    var newCart = [];

    carts.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

carts = newCart

saveMyStorage();

}

export function updateDeliveryOption(productId, deliveryOptionId) {

    var matchingItem;

       carts.forEach((cartItem) => {
           if (productId === cartItem.productId) {
               matchingItem = cartItem;
           }
       });

       matchingItem.deliveryOptionId = deliveryOptionId;

       saveMyStorage();
       

}
