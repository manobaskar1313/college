
  // Set active nav based on body data attribute
  document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page;  // e.g., "vision", "principal", "history"
    document.querySelectorAll('[data-nav]').forEach(link => {
      if(link.dataset.nav === page){ link.classList.add('active'); }
    });

    // Current year in footer
    const y = document.getElementById('year');
    if(y) y.textContent = new Date().getFullYear();
  });

// Fade-in on scroll (intersection observer)
document.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  fadeEls.forEach(el => observer.observe(el));
});
