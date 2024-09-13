 //import array cart, addToCart and array products from javascript files
    //export their variable name

    import {carts, addToCart} from './Cart.js'
    import {Products} from './Products.js'
    
    updateCartQuantity ();
    
        //creating a variable 'productsHTML' to generate html in javascript
    
    var productsHTML = '';
    
        // 'Products.forEach' METHOD
        // param is 'Product'
        // 'forEach' for each product to saves in 'Product'
        // 'var html' creating a variable named html to generate the html using javascript. putting all the html inside 'html' `"html text"`
        // replacing the 'image' html into forEach of the product using the parameter 'Product' and dollar sign ${Product.image}
        // parameter 'Product' hv access to the var 'Products' now. ex. Product.image, Product.PriceCents, Product.name
    
        
    
    Products.forEach((Product) => {

        
        
        productsHTML = productsHTML + 
        `<div class="Corset-Item-Products">
            <a href=""><img src="${Product.image}" alt="" class="Corset-Images-Size"></a>
                <div class="Product-Text-Margin">
                    <div class="Name-Corset-Style js-Name-Corset-Style"><a href="">${Product.name}</a>
                    </div>
                    <div class="Price-Corset-Style">₱${Product.price}
                    </div>
                        <div class="Product-Quantity-Style">
                            <select class= "js-quantity-selector-${Product.id}">
                            <option selected value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            </select>
                        </div>
                    <div class="Product-Spacer"></div>
                    <button class="Button-Add-To-Cart JS-Button-Add-To-Cart" data-product-id="${Product.id}">Add To Cart</button>
                     
    <div class="sectionAddtocart js-added-to-cart-${Product.id}">
    <img class="imagecheck" src="./Images/check.png" alt="" height="30">
     <div class="greenChecked"> 
            Added
    </div>
    </div>
    
    
                </div>
               
        </div>`;
    
    });
        // using DOM on grid to generate exactly where it belong using innerHTML = variable 'productsHTML'
        // benefits of generating the html here is that we can put data on array instead of creating them manually on html file
    
    document.querySelector('.JS-Corset-Item-Grid').innerHTML = productsHTML;


   
    
        // using DOM on button add to cart to add 'event listener'
        // choosing querySelectorAll for all the button cart
        // using 'forEach' METHOD to loop all the button. Everytime we add data products, we can click the button
        // parameter is the 'button' element that we got on the page/html
        // 'button.addEventListener' and the first parameter is 'click'
        // button.dataset.'productId' - from the data-product-id (kebab case) to (camel case) productId with capital I
        // create a variable productId to save 'button.dataset.productId'
        // call the other function to operate addToCart(productId); and updateCartQuantity();
    
    document.querySelectorAll('.JS-Button-Add-To-Cart').forEach((button, productId) => {
        button.addEventListener('click', () => {
            var productId = button.dataset.productId;

            addToCart(productId);
            
            updateCartQuantity();

        });
    });
    
    
    
    
        //create a function called updateCartQuantity ()
        //inside of this function is the update of cart
        //creating variable 'cartQuantity' equal to 0
        // 'cart.forEach' loop through each product with a variable cartQuantity. Everytime we click add to cart button. it adds on cartQuantity
        // using DOM on 'cart-quantity' to convert it to html = cartQuantity
    
export function updateCartQuantity () {
        var cartQuantity = 0;

       
       
            carts.forEach((cartItem) => {
                cartQuantity += cartItem.quantity
            });
             var cartupdatequantityHTML = `<div>${cartQuantity}</div>`;
                document.querySelector('.cart-quantity').innerHTML = cartupdatequantityHTML; 

            const quantityofCart = document.querySelector('.cart-quantity').innerHTML = cartQuantity;
                 
            
    }

    

   




   
    







