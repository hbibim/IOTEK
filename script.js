document.addEventListener('DOMContentLoaded', () => {
  const timeEl = document.getElementById('updated-time');

  if (timeEl) {
    const now = new Date();
    const formatted = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });

    timeEl.textContent = formatted;
  }

  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      navItems.forEach((nav) => nav.classList.remove('active'));
      item.classList.add('active');
    });
  });
});
