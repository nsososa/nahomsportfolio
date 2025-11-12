document.addEventListener("DOMContentLoaded", function() {
  const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    zoomable: true,
    closeButton: true,
    autoplayVideos: false,
    openEffect: 'fade',
    slideEffect: 'slide',
    moreText: 'View More'
  });

  // Manually close the lightbox if needed
  const closeButton = document.querySelector('.glightbox-close');
  if (closeButton) {
    closeButton.addEventListener('click', function() {
      lightbox.close();
    });
  }
});




  
  