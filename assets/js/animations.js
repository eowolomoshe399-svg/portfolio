/* ============================================================
   ANIMATIONS
   Scroll reveal — adds 'in' class when elements enter viewport
   ============================================================ */

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
