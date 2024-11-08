const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeButton = document.getElementById('close-btn');
const menuItems = document.querySelectorAll('#mobile-menu a');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden'); 
});

closeButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden'); 
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.add('hidden'); 
    });
});