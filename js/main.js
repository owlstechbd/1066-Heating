var elem = document.querySelector('.testimonial-container');
var msnry = new Masonry(elem, {
    itemSelector: '.testimonial-item',
    columnWidth: '.testimonial-item',
    percentPosition: true,
    gutter: 10 // Adjust as needed
});

// Initialize Masonry after all images are loaded
imagesLoaded(elem, function() {
    msnry.layout();
});

// Re-layout Masonry when the window is resized
window.addEventListener('resize', function() {
    msnry.layout();
});

  new WOW().init();