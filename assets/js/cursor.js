// cursor.js - custom dot and ring cursor
// the dot follows instantly, the ring lags slightly behind

const dot  = document.getElementById('cur');
const ring = document.getElementById('curR');

// update both cursor positions on mouse move
document.addEventListener('mousemove', function(e) {
  dot.style.left  = e.clientX + 'px';
  dot.style.top   = e.clientY + 'px';
  ring.style.left = e.clientX + 'px';
  ring.style.top  = e.clientY + 'px';
});

// make the cursor grow when hovering over clickable things
const clickables = document.querySelectorAll('a, button, .tag, .skill-card, .project-card, .cert-card, .contact-link-item, .stat-block');

clickables.forEach(function(el) {
  el.addEventListener('mouseenter', function() {
    dot.classList.add('big');
    ring.classList.add('big');
  });
  el.addEventListener('mouseleave', function() {
    dot.classList.remove('big');
    ring.classList.remove('big');
  });
});
