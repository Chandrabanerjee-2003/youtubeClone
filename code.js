// Get the DOM elements
const menuIcon = document.getElementById('menu-icon');
const sidebar = document.querySelector('.sidebar');
const videoGrid = document.querySelector('.video-grid');

// Add a click event listener to the menu icon
menuIcon.addEventListener('click', () => {
    // Toggle the 'small-sidebar' class on the sidebar
    sidebar.classList.toggle('small-sidebar');
    
    // By toggling the class, the CSS rules for .small-sidebar will apply/unapply,
    // which changes its width and hides the text.
});