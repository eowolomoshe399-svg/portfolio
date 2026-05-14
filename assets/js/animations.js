// animations.js - scroll reveal
// watches for elements with the .reveal class and adds .in when they enter the viewport

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry, i) {
    if (entry.isIntersecting) {
      // slight delay between each element if multiple appear at once
      setTimeout(function() {
        entry.target.classList.add('in');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// attach to everything with the reveal class
document.querySelectorAll('.reveal').forEach(function(el) {
  observer.observe(el);
});
