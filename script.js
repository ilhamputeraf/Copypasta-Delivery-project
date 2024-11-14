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

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
    }

    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark');
        
        if (body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            themeToggleButton.textContent = '🌞';
        } else {
            localStorage.removeItem('theme');
            themeToggleButton.textContent = '🌙';
        }
    });
});



