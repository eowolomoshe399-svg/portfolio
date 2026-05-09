/* ============================================================
   CURSOR
   Custom dot cursor + lagging ring cursor with hover effects
   ============================================================ */

const cur  = document.getElementById('cur');
const curR = document.getElementById('curR');

// Track mouse position and ring's lagged position separately
let mx = 0, my = 0, rx = 0, ry = 0;

// Move the dot cursor instantly with the mouse
document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cur.style.left = mx + 'px';
  cur.style.top  = my + 'px';
});

// Animate the ring with a slight lag for a smooth trailing effect
(function animateRing() {
  rx += (mx - rx) * 0.11;
  ry += (my - ry) * 0.11;
  curR.style.left = rx + 'px';
  curR.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
})();

// Grow the cursor slightly when hovering over interactive elements
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cur.classList.add('big');
    curR.classList.add('big');
  });
  el.addEventListener('mouseleave', () => {
    cur.classList.remove('big');
    curR.classList.remove('big');
  });
});
