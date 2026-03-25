/* ==============================================
   MAIN SCRIPT - PORTFOLIO + LINKS + CV
   ============================================== */

/**
 * DATA IN SEPARATE FILES:
 * - data/links.js (social media links)
 * - data/bio.js (CV/bio content)
 * - data/gallery.js (portfolio artwork)
 */

// Tracks which portfolio type is currently selected
let currentPortfolioType = 'all';
// Tracks which image is currently displayed in the modal
let currentImageIndex = 0;

// Function to display filtered artwork in a grid based on currently selected portfolio type
function renderPortfolioGallery() {
  const gallery = document.getElementById('portfolio-grid');
  if (!gallery) return;

  const filteredWorks = currentPortfolioType === 'all'
    ? portfolio
    : portfolio.filter(work => work.type === currentPortfolioType);

  gallery.innerHTML = filteredWorks
    .map(work => `
      <figure class="portfolio-item" data-id="${work.id}">
        <img src="${work.image}" alt="${work.title}" class="portfolio-image">
        <figcaption>
          <h3>${work.title}</h3>
          <p>${work.description}</p>
        </figcaption>
      </figure>
    `)
    .join('');

  gallery.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
      currentImageIndex = filteredWorks.findIndex(work => work.id === item.dataset.id);
      openImageModal(filteredWorks[currentImageIndex]);
    });
  });
}

// Function to render portfolio filter buttons
function renderPortfolioFilters() {
  const container = document.getElementById('portfolio-filters');
  if (!container) return;

  container.innerHTML = Object.entries(portfolioTypes)
    .map(([key, label]) =>
      `<button class="portfolio-filter ${currentPortfolioType === key ? 'active' : ''}" data-type="${key}">${label}</button>`
    )
    .join('');

  container.querySelectorAll('.portfolio-filter').forEach(button => {
    button.addEventListener('click', () => {
      currentPortfolioType = button.dataset.type;
      renderPortfolioFilters();
      renderPortfolioGallery();
    });
  });
}

// Function to open the modal with a specific portfolio item
function openImageModal(item) {
  const modal = document.getElementById('image-modal');
  if (!modal) return;

  modal.querySelector('.modal-image').src = item.image;
  modal.querySelector('.modal-title').textContent = item.title;
  modal.querySelector('.modal-description').textContent = item.description;
  modal.hidden = false;
}

// Function to close the modal
function closeImageModal() {
  const modal = document.getElementById('image-modal');
  if (modal) modal.hidden = true;
}

// Function to render Linktree-style social media buttons
function renderLinks() {
  const element = document.getElementById('links');
  if (!element) return;

  element.innerHTML = links
    .map(link => `<a class="link-button" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`)
    .join('');
}

// Function to render featured illustrations in right sidebar widget
function renderFeaturedIllustrations() {
  const container = document.getElementById('featured-illustrations');
  if (!container) return;

  const featured = portfolio.filter(item => item.featured);
  const items = featured.length ? featured.slice(0, 3) : portfolio.slice(0, 3);

  if (items.length === 0) {
    container.innerHTML = '<p style="color: var(--text-tertiary); font-size: 0.9rem;">Zatím zde nejsou ilustrace.</p>';
    return;
  }

  container.innerHTML = items
    .map(art => `
      <div class="featured-illustration-item" data-id="${art.id}">
        <img src="${art.image}" alt="${art.title}" class="featured-illustration-image">
        <div class="featured-illustration-title">${art.title}</div>
      </div>
    `)
    .join('');

  container.querySelectorAll('.featured-illustration-item').forEach(item => {
    item.addEventListener('click', () => {
      const art = portfolio.find(portfolioItem => portfolioItem.id === item.dataset.id);
      if (art) openImageModal(art);
    });
  });
}

// Function to render full bio/CV page
function renderBioPage() {
  const bioPage = document.getElementById('bio-page');
  const portfolioContent = document.getElementById('portfolio-content');
  if (!bioPage) return;

  if (portfolioContent) portfolioContent.hidden = true;
  bioPage.hidden = false;

  const educationHTML = bioData.education.map(education => `
    <div class="cv-item">
      <h3>${education.degree}</h3>
      <p class="cv-institution">${education.institution}</p>
      <p class="cv-date">${education.date}</p>
      ${education.description ? `<p class="cv-description">${education.description}</p>` : ''}
    </div>
  `).join('');

  const workHTML = bioData.work.map(job => `
    <div class="cv-item">
      <h3>${job.title}</h3>
      <p class="cv-institution">${job.institution}</p>
      <p class="cv-date">${job.date}</p>
      ${job.description ? `<p class="cv-description">${job.description}</p>` : ''}
    </div>
  `).join('');

  const editedHTML = bioData.publications.edited.map(item => `<li>${item}</li>`).join('');
  const articlesHTML = bioData.publications.articles.map(item => `<li>${item}</li>`).join('');
  const illustrationsHTML = bioData.publications.illustrations.map(item => `<li>${item}</li>`).join('');
  const skillsHTML = bioData.skills.map(skill => `<li>${skill}</li>`).join('');

  bioPage.innerHTML = `
    <article class="bio-page">
      <h1>Curriculum Vitae</h1>

      <section class="bio-section bio-intro">
        <p>${bioData.about}</p>
      </section>

      <section class="bio-section">
        <h2>Vzdělání</h2>
        ${educationHTML}
      </section>

      <section class="bio-section">
        <h2>Pracovní zkušenosti</h2>
        ${workHTML}
      </section>

      <section class="bio-section">
        <h2>Publikovaná díla</h2>

        <h3 class="subsection-title">Editace a korekce</h3>
        <ul class="publication-list">
          ${editedHTML}
        </ul>

        <h3 class="subsection-title">Vlastní články a recenze</h3>
        <ul class="publication-list">
          ${articlesHTML}
        </ul>

        <h3 class="subsection-title">Ilustrace</h3>
        <ul class="publication-list">
          ${illustrationsHTML}
        </ul>
      </section>

      <section class="bio-section">
        <h2>Odborné zaměření</h2>
        <ul class="skills-list">
          ${skillsHTML}
        </ul>
      </section>

      <p><a class="back-button" href="#home">← Zpět na hlavní stránku</a></p>
    </article>
  `;
}

// Router function: handles URL hash changes
function router() {
  const hash = window.location.hash || '#home';

  renderLinks();
  renderFeaturedIllustrations();

  if (hash === '#bio') {
    renderBioPage();
    return;
  }

  const bioPage = document.getElementById('bio-page');
  const portfolioContent = document.getElementById('portfolio-content');

  if (bioPage) bioPage.hidden = true;
  if (portfolioContent) portfolioContent.hidden = false;

  renderPortfolioFilters();
  renderPortfolioGallery();

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('hashchange', router);
document.addEventListener('DOMContentLoaded', router);

// Helper function to reset homepage filters
function resetAllFilters() {
  currentPortfolioType = 'all';
  renderPortfolioFilters();
  renderPortfolioGallery();

  const portfolioContent = document.getElementById('portfolio-content');
  if (portfolioContent) portfolioContent.hidden = false;
}

// Set up avatar click handler to act like home button
document.addEventListener('DOMContentLoaded', () => {
  const avatarLink = document.querySelector('.profile-image a');
  if (!avatarLink) return;

  avatarLink.addEventListener('click', () => {
    resetAllFilters();
  });
});

// ============================================
// Cursor Particle Animation
// ============================================

const symbols = ['\u2728', '\u2726', '\u2605', '\u2727', '\u2022', '\u25e6', '\u25cb'];
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', event => {
  mouseX = event.clientX;
  mouseY = event.clientY;

  if (Math.random() < 0.1) {
    createParticle(mouseX, mouseY);
  }
});

function createParticle(x, y) {
  const particle = document.createElement('span');
  particle.classList.add('particle');
  particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  const colors = ['#8e1f45', '#b56a35', '#c7a45e', '#5a3a4d'];
  particle.style.color = colors[Math.floor(Math.random() * colors.length)];
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;

  const angle = Math.random() * Math.PI * 2;
  const velocity = 30 + Math.random() * 50;
  const tx = Math.cos(angle) * velocity;
  const ty = Math.sin(angle) * velocity - 30;

  particle.style.setProperty('--tx', `${tx}px`);
  particle.style.setProperty('--ty', `${ty}px`);

  document.getElementById('cursor-particles').appendChild(particle);
  setTimeout(() => particle.remove(), 1500);
}

/* ==============================================
   DARK MODE TOGGLE FUNCTIONALITY
   ============================================== */

function initDarkMode() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const savedTheme = localStorage.getItem('theme');
  const isDarkMode = savedTheme === 'dark';

  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    const label = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode';
    themeToggle.setAttribute('aria-label', label);
  });
}

// ==============================================
// SCROLL TO TOP BUTTON
// ==============================================

function setupScrollToTop() {
  const scrollButton = document.getElementById('scroll-to-top');
  if (!scrollButton) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollButton.classList.add('visible');
    } else {
      scrollButton.classList.remove('visible');
    }
  });

  scrollButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ==============================================
// IMAGE LOADING EFFECTS
// ==============================================

function setupImageLoading() {
  const images = document.querySelectorAll('img, .portfolio-image, .featured-illustration-image');

  images.forEach(image => {
    if (image.complete) {
      image.classList.add('loaded');
    } else {
      image.addEventListener('load', () => {
        image.classList.add('loaded');
      });
    }
  });

  const observer = new MutationObserver(() => {
    const newImages = document.querySelectorAll('img:not(.loaded)');
    newImages.forEach(image => {
      if (image.complete) {
        image.classList.add('loaded');
      } else {
        image.addEventListener('load', () => {
          image.classList.add('loaded');
        });
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  setupThemeToggle();
  setupScrollToTop();
  setupImageLoading();
});
