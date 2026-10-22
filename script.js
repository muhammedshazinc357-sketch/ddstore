const menuButton = document.querySelector('.menu-toggle');
const header = document.querySelector('.site-header');
menuButton.addEventListener('click', () => {
  const opened = header.classList.toggle('nav-open');
  menuButton.setAttribute('aria-expanded', String(opened));
  menuButton.textContent = opened ? '×' : '☰';
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  header.classList.remove('nav-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();
