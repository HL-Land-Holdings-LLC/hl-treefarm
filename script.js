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

async function loadChristmasSeasonInfo() {
  const announcement = document.getElementById('season-announcement');
  const details = document.getElementById('season-details');
  if (!announcement && !details) return;

  try {
    const response = await fetch('christmas_season_info.html', { cache: 'no-cache' });
    if (!response.ok) throw new Error(`Could not load season info (${response.status})`);

    const html = await response.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');

    const announcementSource = doc.querySelector('[data-season="announcement"]');
    const detailsSource = doc.querySelector('[data-season="details"]');

    if (announcement && announcementSource) {
      announcement.innerHTML = announcementSource.innerHTML;
    }

    if (details && detailsSource) {
      details.innerHTML = detailsSource.innerHTML;
    }
  } catch (error) {
    console.error(error);
    if (announcement) {
      announcement.innerHTML = `
        <strong>Key information</strong>
        <span>Season details could not be loaded. Please contact the farm before visiting.</span>
        <a href="#contact">Contact us</a>
      `;
    }
    if (details) {
      details.innerHTML = `
        <p class="eyebrow">Before you come</p>
        <h3>Season details unavailable</h3>
        <p>Open dates, hours, and prices could not be loaded right now. Please use the contact information below, or try again later.</p>
      `;
    }
  }
}

loadChristmasSeasonInfo();
