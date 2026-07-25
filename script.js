const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

function loadChristmasSeasonInfo() {
  const announcement = document.getElementById('season-announcement');
  const details = document.getElementById('season-details');
  const info = window.CHRISTMAS_SEASON_INFO;

  if (!info) {
    console.error('christmas_season_info.js did not load.');
    return;
  }

  if (announcement && info.announcement) {
    announcement.innerHTML = info.announcement;
  }

  if (details && info.details) {
    details.innerHTML = info.details;
  }
}

loadChristmasSeasonInfo();
