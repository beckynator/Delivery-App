// Sample products data (can be fetched from a server in real scenario)
const products = [
    { id: 1, name: "Apple", price: 10 },
    { id: 2, name: "Orange", price: 10 },
    { id: 3, name: "Banana", price: 10 },
    { id: 4, name: "Pear", price: 10 },
    { id: 5, name: "Grapes", price: 10 },
    { id: 6, name: "Strawberry", price: 10 },
    { id: 7, name: "Watermelon", price: 10 },
    { id: 8, name: "Pineapple", price: 10 },
    { id: 9, name: "Mango", price: 10 },
    { id: 10, name: "Kiwi", price: 10 },
    { id: 11, name: "Blueberry", price: 10 },
    { id: 12, name: "Raspberry", price: 10 },
    { id: 13, name: "Cherry", price: 10 },
    { id: 14, name: "Lemon", price: 10 },
    { id: 15, name: "Lime", price: 10 },
    { id: 16, name: "Plum", price: 10 },
    { id: 17, name: "Avocado", price: 10 },
    { id: 18, name: "Blackberry", price: 10 },
    { id: 19, name: "Gooseberry", price: 10 }    
];

// Initialize cart items and total
let cartItems = [];
let cartTotal = 0.00;

// DOM elements
const productList = document.getElementById('product-list');
const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

// Function to display products in the UI
function displayProducts() {
    productList.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
        cartItems.push(productToAdd);
        cartTotal += productToAdd.price;
        displayCart();
    } else {
        console.error('Product not found');
    }
}

// Function to display cart items and total in the UI
function displayCart() {
    cartItemsElement.innerHTML = '';
    cartItems.forEach(item => {
        const cartItemElement = document.createElement('li');
        cartItemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(cartItemElement);
    });

    cartTotalElement.textContent = cartTotal.toFixed(2);
}

// Function to simulate checkout (clearing cart)
function checkout() {
    alert(`Checkout - Total: $${cartTotal.toFixed(2)}`);
    resetCart();
}

// Reset cart items and total
function resetCart() {
    cartItems = [];
    cartTotal = 0.00;
    displayCart();
}

// Event listener for add to cart buttons
productList.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const productId = parseInt(event.target.getAttribute('data-id'));
        addToCart(productId);
    }
});

// Initial setup
displayProducts();
displayCart();
