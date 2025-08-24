
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

  // Fade-in effect for cards
document.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll('.fade-in');
  fadeEls.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('show');
    }, i * 300); // stagger effect
  });
});


