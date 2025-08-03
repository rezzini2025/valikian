window.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => {
    el.style.animationDelay = '0.2s';
  });
});


const toggleBtn = document.getElementById('theme-toggle');
toggleBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
