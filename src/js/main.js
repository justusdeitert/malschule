// Import styles
import 'normalize.css';
import '../scss/styles.scss';

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('%c DOM Ready!!', 'font-weight: bold;');
    console.log('%c Hello Visitor! :)', 'color: green; font-weight: bold; font-size: 2em');
});

// Window Load - all assets loaded
window.addEventListener('load', function() {
    console.log('All assets are loaded');
    
    const leftImage = document.querySelector('.left-image');
    const footer = document.querySelector('footer');
    const body = document.querySelector('body');
    
    if (leftImage && footer) {
        leftImage.style.top = footer.offsetHeight + 'px';
        body.classList.remove('loading');
    }
});

// Window Resize
window.addEventListener('resize', function() {
    const leftImage = document.querySelector('.left-image');
    const footer = document.querySelector('footer');
    
    if (leftImage && footer) {
        leftImage.style.top = footer.offsetHeight + 'px';
    }
});
