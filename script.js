// Grab the two cursor elements
const cur = document.getElementById('cur');
const curR = document.getElementById('curR');

// Track mouse position and the ring's lagged position separately
let mx = 0, my = 0, rx = 0, ry = 0;

// Move the dot cursor instantly with the mouse
document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cur.style.left = mx + 'px';
  cur.style.top = my + 'px';
});

// Animate the ring cursor with a slight lag for a smooth trailing effect
(function animateRing() {
  rx += (mx - rx) * 0.11;
  ry += (my - ry) * 0.11;
  curR.style.left = rx + 'px';
  curR.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
})();

// Make the cursor grow slightly when hovering over links and buttons
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

// Scroll reveal — adds the 'in' class when elements enter the viewport
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Slight stagger if multiple elements reveal at once
      setTimeout(() => entry.target.classList.add('in'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
