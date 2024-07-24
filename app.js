// app.js

// Get references to the list items
const appleLink = document.querySelector('a[href="apple.txt"]');
const mangoLink = document.querySelector('a[href="mango.txt"]');
const bananaLink = document.querySelector('a[href="banana.txt"]');
const carrotLink = document.querySelector('a[href="carrot.txt"]');
const potatoLink = document.querySelector('a[href="potato.txt"]');
const saladLink = document.querySelector('a[href="salad.txt"]');

// Add event listeners to the links
appleLink.addEventListener('click', () => {
    console.log('Apple link clicked!');
    // Add your custom logic here
});

mangoLink.addEventListener('click', () => {
    console.log('Mango link clicked!');
    // Add your custom logic here
});

bananaLink.addEventListener('click', () => {
    console.log('Banana link clicked!');
    // Add your custom logic here
});

carrotLink.addEventListener('click', () => {
    console.log('Carrot link clicked!');
    // Add your custom logic here
});

potatoLink.addEventListener('click', () => {
    console.log('Potato link clicked!');
    // Add your custom logic here
});

saladLink.addEventListener('click', () => {
    console.log('Salad link clicked!');
    // Add your custom logic here
});

// Add functionality to the "next page" button
const nextPageButton = document.querySelector('button');
nextPageButton.addEventListener('click', () => {
    console.log('click');
    // Add your custom logic here
});
