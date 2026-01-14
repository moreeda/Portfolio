function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Change navbar background on scroll for better visibility
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.9)';
    }
});
(function () {
    const heroVideo = document.getElementById("hero-video-bg-player");
    if (!heroVideo) return;
  
    heroVideo.play().catch(() => {
      document.addEventListener(
        "click",
        () => {
          heroVideo.play();
        },
        { once: true }
      );
    });
  })();
  