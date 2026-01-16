
/* ==============================================
   MAIN SCRIPT - LOGIC AND RENDERING
   ============================================== */

/**
 * DATA IS NOW IN SEPARATE FILES:
 * - data/links.js (social media links)
 * - data/posts.js (blog posts)
 * - data/gallery.js (portfolio artwork)
 * 
 * This file contains ONLY the logic/code
 * The data arrays (links, posts, portfolio, etc.) are loaded first
 * Then this file uses those arrays
 * 
 * WHY? Cleaner organization - data separate from code
 */

// NOTE: links, posts, portfolio, portfolioTypes are defined in data files
// JavaScript loads them before this script runs
// So we can use them here without redefining them

// Sleduje, které portfolio je aktuálně vybráno (výchozí: 'all')
let currentPortfolioType = 'all';
// Sleduje, který obrázek je aktuálně zobrazen v modálním okně
let currentImageIndex = 0;

// Objekt mapující klíče kategorií blogu na české zobrazované štítky
// Používá se k vytvoření tlačítek pro filtrování blogových příspěvků
const categories = {
  all: "Domů", // Zobrazit všechny příspěvky (domovská stránka)
  personal: "Osobní", // Osobní/deníkové příspěvky
  illustration: "Ilustrace", // Příspěvky o ilustraci
  reviews: "Recenze", // Recenze knih/medií
  writing: "Psaní" // Příspěvky související s psaním
};

// Sleduje, která kategorie blogu je aktuálně vybrána (výchozí: 'all')
let currentCategory = 'all';

// Funkce pro zobrazení filtrovaného uměleckého díla v mřížce na základě aktuálně vybraného typu portfolia
// Zobrazuje filtrované umělecké dílo v mřížce na základě aktuálně vybraného typu portfolia
function renderPortfolioGallery() {
  const gallery = document.getElementById('portfolio-grid'); // Získat element kontejneru galerie
  if (!gallery) return; // Ukončit, pokud element neexistuje (bezpečnostní kontrola)
  
  // Filtrovat položky portfolia na základě aktuálního výběru
  // Pokud je vybráno 'all', zobrazit vše; jinak filtrovat podle typu
  const filteredWorks = currentPortfolioType === 'all'
    ? portfolio // Zobrazit všechny položky
    : portfolio.filter(w => w.type === currentPortfolioType); // Zobrazit pouze vybraný typ
  
  // Postavit HTML pro každou položku ve filtrovaném seznamu
  // Použít mapování k vytvoření HTML stringu pro každý prvek
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
    .join(''); // Spojit všechny HTML řetězce do jednoho
  
  // Přidat posluchače událostí kliknutí na každou položku portfolia
  gallery.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
      // Najít index kliknuté položky ve filtrovaném poli (potřebné pro navigaci v modálním okně)
      currentImageIndex = filteredWorks.findIndex(w => w.id === item.dataset.id);
      // Otevřít modální okno s daty kliknuté položky
      openImageModal(filteredWorks[currentImageIndex]);
    });
  });
}

// Funkce pro nastavení přepínače zobrazení/skrytí galerie portfolia
// Řídí rozbalování a sbalování sekce galerie
function setupPortfolioToggle() {
  const toggle = document.getElementById('portfolio-toggle'); // Získat tlačítko přepínače
  const content = document.getElementById('portfolio-content'); // Získat obsah galerie pro zobrazení/skrytí
  if (!toggle || !content) return; // Ukončit, pokud elementy neexistují
  
  // Přidat událost kliknutí na tlačítko přepínače
  toggle.addEventListener('click', () => {
    // Zkontrolovat aktuální stav: je galerie právě rozbalená/viditelná?
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    // Aktualizovat atribut aria-expanded pro přístupnost (přepnout true/false)
    toggle.setAttribute('aria-expanded', !isExpanded);
    // Přepnout viditelnost: pokud je rozbalená, skrýt ji; pokud je skrytá, zobrazit ji
    content.hidden = isExpanded;
  });
}

// Funkce pro vykreslení tlačítek filtru portfolia (Vše, Postavy, Krajiny, atd.)
// Vytváří klikací tlačítka pro filtrování uměleckých děl podle typu
function renderPortfolioFilters() {
  const container = document.getElementById('portfolio-filters'); // Získat kontejner filtrů
  if (!container) return; // Ukončit, pokud kontejner neexistuje
  
  // Převést objekt portfolioTypes na pole [klíč, štítek] a vytvořit tlačítka
  container.innerHTML = Object.entries(portfolioTypes)
    .map(([key, label]) => 
      // Vytvořit tlačítko s třídou 'active', pokud je aktuálně vybráno
      `<button class="portfolio-filter ${currentPortfolioType === key ? 'active' : ''}" data-type="${key}">${label}</button>`
    )
    .join(''); // Spojit všechny HTML řetězce tlačítek dohromady
  
  // Přidat posluchače událostí kliknutí na všechna tlačítka filtru
  container.querySelectorAll('.portfolio-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      // Aktualizovat aktuální filtr na typ kliknutého tlačítka
      currentPortfolioType = btn.dataset.type;
      // Znovu vykreslit filtry pro aktualizaci třídy 'active'
      renderPortfolioFilters();
      // Znovu vykreslit galerii pro zobrazení filtrovaných položek
      renderPortfolioGallery();
    });
  });
}

// Funkce pro otevření modálního okna s konkrétní položkou portfolia
// Zobrazuje větší náhled uměleckého díla s detaily
function openImageModal(item) {
  const modal = document.getElementById('image-modal'); // Získat element modálního okna
  if (!modal) return; // Ukončit, pokud modální okno neexistuje
  
  // Aktualizovat obsah modálního okna daty vybrané položky
  modal.querySelector('.modal-image').src = item.image; // Nastavit zdroj obrázku
  modal.querySelector('.modal-title').textContent = item.title; // Nastavit text názvu
  modal.querySelector('.modal-description').textContent = item.description; // Nastavit text popisu
  modal.hidden = false; // Zobrazit modální okno odstraněním atributu hidden
}

// Funkce pro zavření modálního okna
// Skryje detailní zobrazení uměleckého díla
function closeImageModal() {
  const modal = document.getElementById('image-modal'); // Získat element modálního okna
  if (modal) modal.hidden = true; // Skrýt modální okno přidáním atributu hidden
}

// Funkce pro vykreslení tlačítek sociálních médií ve stylu Linktree
// Vytváří klikací odkazy na sociální platformy a externí stránky
function renderLinks() {
    const el = document.getElementById('links'); // Získat kontejner odkazů
    if (!el) return; // Ukončit, pokud element neexistuje

    // Vytvořit HTML: namapovat každý odkaz na element anchor, poté je spojit do jednoho řetězce
    el.innerHTML = links
        .map((l) => 
      // Vytvořit odkaz s target="_blank" (otevře v novém okně) a rel pro bezpečnost
      `<a class="link-button" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label}</a>`
    )
    .join(""); // Spojit všechny HTML řetězce
}

// Funkce pro vykreslení seznamu blogových příspěvků (karta)
// Zobrazuje náhledové karty příspěvků filtrovaných podle kategorie
function renderBlogList() {
    const list = document.getElementById("blog-list"); // Získat kontejner seznamu blogu
    const view = document.getElementById("post-view"); // Získat kontejner zobrazení příspěvku

    if (!list) return; // Ukončit, pokud element seznamu neexistuje

    view.hidden = true; // Skrýt zobrazení celého příspěvku při zobrazování seznamu
    
    // Filtrovat příspěvky podle aktuálně vybrané kategorie
    const filteredPosts = currentCategory === 'all' 
      ? posts // Zobrazit všechny příspěvky, pokud je vybráno 'all'
      : posts.filter(p => p.category === currentCategory); // Filtrovat podle kategorie
    
    // Vytvořit HTML pro karty příspěvků: namapovat každý příspěvek na element article
    list.innerHTML = filteredPosts
    .map((p) =>
      `<article class="post-card">
        <span class="category-badge category-${p.category}">${categories[p.category]}</span>
        <h3>${p.title}</h3>
        <div class="meta">${new Date(p.date).toLocaleDateString()}</div>
        <p>${p.summary}</p>
        <a class="read-link" href="#post/${p.id}">Číst více →</a>
      </article>`
    )
    .join(""); // Spojit všechny HTML řetězce
}

// Funkce pro vykreslení tlačítek filtru kategorií blogu (Vše, Osobní, Ilustrace, atd.)
// Vytváří klikací tlačítka pro filtrování příspěvků podle kategorie
function renderCategoryFilters() {
  const container = document.getElementById('category-filters'); // Získat kontejner filtrů
  if (!container) return; // Ukončit, pokud kontejner neexistuje
  
  // Převést objekt kategorií na pole [klíč, štítek] a vytvořit tlačítka
  container.innerHTML = Object.entries(categories)
    .map(([key, label]) => 
      // Vytvořit tlačítko s třídou 'active', pokud odpovídá aktuální kategorii
      `<button class="category-filter ${currentCategory === key ? 'active' : ''}" data-category="${key}">${label}</button>`
    )
    .join(''); // Spojit všechny HTML řetězce tlačítek
  
  // Přidat posluchače událostí kliknutí na všechna tlačítka filtru kategorií
  container.querySelectorAll('.category-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      // Aktualizovat aktuální kategorii na kategorii kliknutého tlačítka
      currentCategory = btn.dataset.category;
      // Znovu vykreslit filtry pro aktualizaci třídy 'active'
      renderCategoryFilters();
      // Znovu vykreslit seznam blogu pro zobrazení filtrovaných příspěvků
      renderBlogList();
      
      // NOVÉ: Když je kliknuto na "Domů" (kategorie 'all'), zavřít galerii
      // Tímto zajistíme, že se vždy vrátí na domovskou stránku bez galerie
      if (currentCategory === 'all') {
        const portfolioContent = document.getElementById('portfolio-content');
        const portfolioToggle = document.getElementById('portfolio-toggle');
        
        // Pokud galerie existuje a je otevřena, zavřít ji
        if (portfolioContent && portfolioToggle) {
          portfolioContent.hidden = true; // Skrýt obsah galerie
          portfolioToggle.setAttribute('aria-expanded', 'false'); // Aktualizovat přístupnostní atribut
        }
      }
    });
  });
}

// Funkce pro vykreslení jednoho blogového příspěvku v plném zobrazení
// Zobrazuje celý příspěvek s názvem, datem a plným obsahem
function renderPost(id) {
    const list = document.getElementById("blog-list"); // Získat kontejner seznamu blogu
    const view = document.getElementById("post-view"); // Získat kontejner zobrazení příspěvku

    if (!list || !view) return; // Ukončit, pokud některý z elementů neexistuje
    
    // Najít příspěvek s odpovídajícím id v poli příspěvků
    const post = posts.find((p) => p.id === id);

    // Pokud příspěvek neexistuje, zobrazit místo toho seznam blogu
    if (!post) {
        renderBlogList();
        return;
    }

    list.innerHTML = ""; // Vymazat seznam blogu (zobrazujeme jeden příspěvek)
    view.hidden = false; // Zobrazit zobrazení příspěvku
    // Vytvořit HTML pro plné zobrazení příspěvku
    view.innerHTML = `
    <article>
        <h2>${post.title}</h2>
        <div class="meta">${new Date(post.date).toLocaleDateString()}</div>
        ${post.content}
        <p><a class="back-button" href="#home">← Zpět na seznam příspěvků</a></p>
    </article>
    `;
}

// Router function: zpracovává změny URL hash pro navigaci mezi stránkami
// Spravuje navigaci mezi stránkami na základě URL hash (např. #home, #post/welcome)
function router() {
  const hash = window.location.hash || "#home"; // Získat aktuální URL hash, výchozí "#home"
  
  // Zkontrolovat, zda je hash URL příspěvku (formát: #post/post-id)
  if (hash.startsWith("#post/")) {
    const id = hash.split("/")[1];  // Extrahuje id příspěvku z hashe
    renderPost(id); // Zobrazit plné zobrazení příspěvku
  } else {
    // Pro jakýkoli jiný hash (včetně #home) zobrazit hlavní stránku se všemi komponentami
    renderLinks(); // Vykreslit odkazy na sociální média
    setupPortfolioToggle(); // Nastavit funkci pro zobrazení/skrytí galerie
    renderPortfolioFilters(); // Vykreslit tlačítka filtrů portfolia
    renderPortfolioGallery(); // Vykreslit mřížku galerie portfolia
    renderCategoryFilters(); // Vykreslit tlačítka filtrů kategorií blogu
    renderBlogList(); // Vykreslit karty blogových příspěvků
  }
}

// Listen for hash changes in URL (when user clicks links or uses back/forward buttons)
// Spouští funkci router při každé změně URL hashe
window.addEventListener("hashchange", router);

// Run router when page first loads (DOM is ready)
// Inicializuje stránku s odpovídajícím obsahem na základě URL
document.addEventListener("DOMContentLoaded", router);

// ============================================
// Animace animace kurzoru s částicemi
// ============================================

// Pole Unicode symbolů používaných pro částice kurzoru
// Různé dekorativní symboly, které se vznášejí od kurzoru
const symbols = ['\u2728', '\u2726', '\u2605', '\u2727', '\u2022', '\u25e6', '\u25cb'];
// Proměnné pro sledování aktuální pozice myši
let mouseX = 0;
let mouseY = 0;

// Posluchač události pohybu myši
// Vytváří efekty částic při pohybu kurzoru
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX; // Aktualizovat pozici X (vodorovně)
  mouseY = e.clientY; // Aktualizovat pozici Y (svisle)
  
  // Náhodně vytvořit částice (10% šance při každé události pohybu myši)
  // Math.random() vrací 0-1, takže < 0.1 znamená 10% pravděpodobnost
  if (Math.random() < 0.1) {
    createParticle(mouseX, mouseY); // Vytvořit částici na pozici kurzoru
  }
});

// Funkce pro vytvoření a animaci jedné částice kurzoru
// Generuje dekorativní symbol, který se vznáší od kurzoru
function createParticle(x, y) {
  const particle = document.createElement('span'); // Vytvořit nový element span
  particle.classList.add('particle'); // Přidat třídu 'particle' pro CSS stylování
  
  // Vybrat náhodný symbol z pole symbols
  particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  
  // Vybrat náhodnou barvu z palety
  const colors = ['#667eea', '#764ba2', '#6b7280', '#9ca3af'];
  particle.style.color = colors[Math.floor(Math.random() * colors.length)];
  
  // Umístit částici na pozici kurzoru
  particle.style.left = x + 'px'; // Nastavit vodorovnou pozici
  particle.style.top = y + 'px'; // Nastavit svislou pozici
  
  // Vypočítat náhodný směr driftu pomocí trigonometrie
  const angle = Math.random() * Math.PI * 2; // Náhodný úhel v radiánech (0 až 2π)
  const velocity = 30 + Math.random() * 50; // Náhodná rychlost mezi 30-80 pixely
  const tx = Math.cos(angle) * velocity; // Vypočítat pohyb X (vodorovný drift)
  const ty = Math.sin(angle) * velocity - 30; // Vypočítat pohyb Y (svislý drift s biasem nahoru)
  
  // Nastavit vlastní CSS vlastnosti pro animaci (používá se v CSS @keyframes)
  particle.style.setProperty('--tx', tx + 'px'); // Cílová pozice X
  particle.style.setProperty('--ty', ty + 'px'); // Cílová pozice Y
  
  // Přidat částici do DOM (uvnitř kontejneru cursor-particles)
  document.getElementById('cursor-particles').appendChild(particle);
  
  // Odebrat částici z DOM po dokončení animace (1500ms = 1,5 sekundy)
  // Tím se zabrání hromadění paměti z tisíců částic
  setTimeout(() => particle.remove(), 1500);
}

/* ==============================================
   DARK MODE TOGGLE FUNCTIONALITY
   ============================================== */

/**
 * WHAT IS THIS?
 * This code enables dark mode toggle on your page
 * Users can click the 🌙 button to switch between light and dark themes
 * 
 * WHY IS IT PROFESSIONAL?
 * - Reduces eye strain for users browsing at night
 * - Modern feature expected on professional websites
 * - Shows accessibility awareness
 * - Remembers user preference (localStorage)
 * - Respects system dark mode preference initially
 */

/**
 * WHAT HAPPENS WHEN DARK MODE IS ON?
 * 1. CSS variables change (defined in :root and body.dark-mode)
 * 2. All colors automatically update throughout the page
 * 3. Class "dark-mode" is added to <body> element
 * 4. Preference is saved to localStorage (persists across sessions)
 * 5. Moon emoji (🌙) rotates to indicate active mode
 */

// Initialize dark mode on page load
function initDarkMode() {
  /* Initialize dark mode on page load */
  /* Runs once when page first loads */
  
  const themeToggle = document.getElementById('theme-toggle');
  /* Get the toggle button element */
  /* This is the button with id="theme-toggle" we added to HTML */
  
  if (!themeToggle) return;
  /* Safety check: exit if button doesn't exist */
  
  // Check if user has previously saved a dark mode preference
  const savedTheme = localStorage.getItem('theme');
  /* localStorage.getItem() retrieves saved data from browser memory */
  /* Key 'theme' = what we labeled our preference as */
  /* Returns null if nothing was saved yet */
  
  // If no saved preference, check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  /* window.matchMedia() checks CSS media queries in JavaScript */
  /* prefers-color-scheme: dark = user's OS/browser dark mode setting */
  /* .matches = true if dark mode is preferred, false if light */
  /* WHY? Respects user's system settings (privacy-conscious & user-friendly) */
  
  // Determine if dark mode should be active
  const isDarkMode = savedTheme ? savedTheme === 'dark' : prefersDark;
  /* Ternary operator: savedTheme ? true_case : false_case */
  /* If savedTheme exists: use that preference */
  /* If not: use system preference (prefersDark) */
  /* This ensures: Saved preference > System preference */
  
  // Apply dark mode if needed
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    /* Add 'dark-mode' class to <body> element */
    /* This triggers all the CSS variables to change */
    /* Cascading: body.dark-mode selector overrides :root variables */
  }
}

// Add event listener to toggle button
function setupThemeToggle() {
  /* Setup click handler for the dark mode toggle button */
  
  const themeToggle = document.getElementById('theme-toggle');
  /* Get the toggle button element */
  
  if (!themeToggle) return;
  /* Safety check: exit if button doesn't exist */
  
  // Add click event listener
  themeToggle.addEventListener('click', () => {
    /* 'click' event = when user clicks the button */
    /* Arrow function executes this code when click happens */
    
    // Toggle dark mode class on body
    document.body.classList.toggle('dark-mode');
    /* .toggle() = add class if not present, remove if present */
    /* One line handles both "turn on" and "turn off" cases */
    /* WHY? This is cleaner than if/else checking current state */
    
    // Get the current state (is dark mode now active?)
    const isDarkMode = document.body.classList.contains('dark-mode');
    /* .contains() = true if class exists on element, false otherwise */
    /* This lets us know what mode we just switched to */
    
    // Save preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    /* setItem('key', 'value') saves data in browser's local storage */
    /* Persists even after browser closes */
    /* WHY? Remember user's preference on future visits */
    
    // Optional: Update button label for screen readers
    const label = isDarkMode ? 'Přepnout na světlý režim' : 'Přepnout na tmavý režim';
    /* Change accessible label based on current mode */
    /* Screen reader users know which mode they'll switch to */
    
    themeToggle.setAttribute('aria-label', label);
    /* Set the aria-label attribute to new label */
    /* aria-label = text read aloud by screen readers */
  });
}

// Initialize dark mode when page loads
document.addEventListener('DOMContentLoaded', () => {
  /* DOMContentLoaded = fires when HTML is fully loaded */
  /* Important: CSS and JavaScript must be loaded before this */
  
  initDarkMode();
  /* Run dark mode initialization */
  /* Checks saved preference and system preference */
  /* Applies dark mode if needed */
  
  setupThemeToggle();
  /* Setup the click handler for toggle button */
  /* Now button is ready to respond to clicks */
});

