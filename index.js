// index.js
document.getElementById('year').textContent = new Date().getFullYear();

const navLinks = [...document.querySelectorAll('.navlinks a')];
function markCurrent(){
  const hash = location.hash || '#work';
  navLinks.forEach(a => a.setAttribute('aria-current',
    a.getAttribute('href') === hash ? 'page' : 'false'
  ));
}
window.addEventListener('hashchange', markCurrent, { passive: true });
markCurrent();
