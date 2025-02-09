document.addEventListener('DOMContentLoaded', () => {
  // Determine if the device is touch-enabled (mobile/tablet)
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // ========= Custom Cursor Setup (Desktop Only) =========
  if (!isTouchDevice) {
    // Create the custom cursor element and append it to the body
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    // Variables to track mouse and cursor positions
    let mouseX = window.innerWidth / 2,
        mouseY = window.innerHeight / 2;
    let cursorX = mouseX,
        cursorY = mouseY;

    // Update mouse position on mousemove
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Animate the custom cursor to follow the mouse with a slight delay
    function animateCursor() {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      requestAnimationFrame(animateCursor);
    }

    animateCursor();
  }

  // ========= Header Hide on Scroll (Mobile Only) =========
  let lastScrollY = window.scrollY;
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    // Only apply on mobile devices (viewport width <= 768px)
    if (window.innerWidth <= 768) {
      if (window.scrollY > lastScrollY) {
        // Scrolling down: hide the header
        header.classList.add('header--hidden');
      } else {
        // Scrolling up: show the header
        header.classList.remove('header--hidden');
      }
    }
    lastScrollY = window.scrollY;
  });
});

