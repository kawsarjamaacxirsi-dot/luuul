const themeToggle = document.getElementById('themeToggle');
const currentTime = document.getElementById('currentTime');

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

function updateTime() {
  const now = new Date();
  currentTime.textContent = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
}

updateTime();
setInterval(updateTime, 1000);
