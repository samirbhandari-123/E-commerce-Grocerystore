let cartCount = 0;

// This function will run when the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all buttons with class 'add-to-cart-btn'
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    // Loop through each button and add a click event listener
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Function to add item to cart
    function addToCart(event) {
        const button = event.target;
        const product = button.parentElement.parentElement;
        const productName = product.querySelector('h3').innerText;
        const productPrice = product.querySelector('.price').innerText;
        const productQuantity = product.querySelector('input').value;

        addItemToCart(productName, productPrice, productQuantity);
    }

    // Function to add item to cart
    function addItemToCart(name, price, quantity) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        const cartItems = document.getElementById('cart-items');
        const cartItemContent = `
            <div>
                <h4>${name}</h4>
                <p>${price}</p>
                <p>Quantity: ${quantity}</p>
            </div>
        `;
        cartItem.innerHTML = cartItemContent;
        cartItems.appendChild(cartItem);

        // Increase cart count and update
        cartCount += parseInt(quantity);
        updateCartCount();
    }

    // Function to update cart count
    function updateCartCount() {
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.innerText = cartCount;
    }
});

// Function to navigate to cart page
function goToCart() {
    window.location.href = "cart.html";
}
function goToHome() {
    window.location.href = "product.html";
}