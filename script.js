const works = [
  { category: 'builds', title: 'Floating Island', file: 'contruction/Captura de tela 2026-07-05 000041.png', alt: 'Floating island environment with stone arches and trees' },
  { category: 'builds', title: 'Garden Island', file: 'contruction/Captura de tela 2026-08-01 213224.png', alt: 'Colorful floating garden environment viewed from above' },
  { category: 'builds', title: 'Desert Arena', file: 'contruction/IMG-20250421-WA00081.jpg', alt: 'Top-down view of a sandy arena build' },
  { category: 'builds', title: 'Desert Environment', file: 'contruction/IMG-20250421-WA00091.jpg', alt: 'Desert themed Roblox environment' },
  { category: 'builds', title: 'Volcanic Landscape', file: 'contruction/IMG-20250820-WA00191.jpg', alt: 'Stylized volcanic landscape with lava and dark cliffs' },
  { category: 'builds', title: 'Tropical Shore', file: 'contruction/IMG-20250901-WA00131.jpg', alt: 'Tropical beach with palm trees and bright blue water' },
  { category: 'builds', title: 'Moonlit Castle', file: 'contruction/IMG-20250908-WA00161.jpg', alt: 'Moonlit castle surrounded by purple water' },
  { category: 'builds', title: 'Colorful Arena', file: 'contruction/IMG-20251012-WA0004.jpg', alt: 'Colorful symmetrical game arena viewed from above' },
  { category: 'builds', title: 'Woodland Hub', file: 'contruction/IMG-20260204-WA00281.jpg', alt: 'Green woodland game hub with portals' },
  { category: 'builds', title: 'Jungle Waterfall', file: 'contruction/IMG-20260531-WA0021.jpg', alt: 'Stylized jungle environment with waterfall' },
  { category: 'builds', title: 'Sky Laboratory', file: 'contruction/IMG-20260609-WA0007.jpg', alt: 'Bright laboratory environment floating in the sky' },
  { category: 'models', title: 'Creature Collection', file: 'model/Captura de tela 2026-04-11 221835.png', alt: 'Collection of stylized grass, slime, and stone creature models' },
  { category: 'models', title: 'Rocket Asset', file: 'model/Captura de tela 2026-05-21 231407.png', alt: 'Green and red stylized rocket model' },
  { category: 'models', title: 'Animal Duo', file: 'model/Captura de tela 2026-05-30 192012.png', alt: 'Blocky brown animal riding a green crocodile model' },
  { category: 'models', title: 'Green Creature', file: 'model/Captura de tela 2026-05-31 153658.png', alt: 'Bright green robotic creature model' },
  { category: 'models', title: 'Forest Guardian', file: 'model/Captura de tela 2026-07-25 141822.png', alt: 'Large grassy forest monster with glowing orange face' },
  { category: 'models', title: 'Woodland Beast', file: 'model/Captura de tela 2026-07-25 231734.png', alt: 'Dark blocky woodland creature with glowing red eyes' },
  { category: 'models', title: 'Electric Runes', file: 'model/Captura de tela 2026-09-05 192523.png', alt: 'Two glowing blue rune assets in a game world' },
  { category: 'models', title: 'Time Rune', file: 'model/Captura de tela 2026-09-07 152230.png', alt: 'Glowing gold hourglass rune surrounded by a clock motif' },
  { category: 'models', title: 'Solar Rune', file: 'model/Captura de tela 2026-09-08 230035.png', alt: 'Glowing yellow sun rune with radiating light' },
  { category: 'models', title: 'Void Rune', file: 'model/Captura de tela 2026-09-09 114438.png', alt: 'Purple glowing rune asset' },
  { category: 'models', title: 'Crystal Creature', file: 'model/Captura de tela 2026-09-10 215504.png', alt: 'Spiky purple crystal creature model' },
  { category: 'models', title: 'Lava Characters', file: 'model/Captura de tela 2026-09-19 205049.png', alt: 'Pair of orange and black lava themed character models' },
  { category: 'models', title: 'Character Model', file: 'model/Captura de tela 2026-09-22 235142.png', alt: 'White stylized character model in a sky scene' },
  { category: 'models', title: 'Character Pair', file: 'model/IMG-20260609-WA0008.jpg', alt: 'Robot and scientist character models' },
  { category: 'graphics', title: 'Runes Studios Logo', file: 'icons and thumbnails/42fcqz.jpg', alt: 'Blue Runes Studios logo with a glowing crystal' },
  { category: 'graphics', title: 'Neafro Studios Logo', file: 'icons and thumbnails/IMG-20260421-WA0048.jpg', alt: 'Neafro Studios frog logo in brown and pink' },
  { category: 'graphics', title: 'Runes Studios Banner', file: 'icons and thumbnails/IMG-20260709-WA0067.jpg', alt: 'Blue Runes Studios banner with glowing crystal logo' },
  { category: 'graphics', title: 'Runes Thumbnail', file: 'icons and thumbnails/RunesThumb_20260820_155854_0000.png', alt: 'Sun and moon themed Roblox game thumbnail' }
];

const categoryNames = { builds: 'ENVIRONMENT', models: '3D MODEL', graphics: 'GRAPHIC' };
const gallery = document.getElementById('gallery');
const filterButtons = [...document.querySelectorAll('.filter')];
const count = document.getElementById('gallery-count');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxCategory = document.getElementById('lightbox-category');
const lightboxCounter = document.getElementById('lightbox-counter');
let visibleWorks = works;
let currentIndex = 0;
let previousFocus = null;

function imagePath(file) {
  return `imgs/${file.split('/').map(encodeURIComponent).join('/')}`;
}

function renderGallery(filter = 'all') {
  visibleWorks = filter === 'all' ? works : works.filter(work => work.category === filter);
  gallery.replaceChildren(...visibleWorks.map((work, index) => {
    const card = document.createElement('article');
    card.className = 'gallery-card';
    card.dataset.category = work.category;
    const button = document.createElement('button');
    button.className = 'gallery-open';
    button.type = 'button';
    button.setAttribute('aria-label', `View ${work.title} larger`);
    const imageWrap = document.createElement('span');
    imageWrap.className = 'gallery-image';
    const img = document.createElement('img');
    img.src = imagePath(work.file);
    img.alt = work.alt;
    img.loading = 'lazy';
    img.decoding = 'async';
    imageWrap.append(img);
    const zoom = document.createElement('span');
    zoom.className = 'gallery-zoom';
    zoom.setAttribute('aria-hidden', 'true');
    zoom.textContent = '↗';
    imageWrap.append(zoom);
    const info = document.createElement('span');
    info.className = 'gallery-info';
    const title = document.createElement('strong');
    title.textContent = work.title;
    const category = document.createElement('small');
    category.textContent = categoryNames[work.category];
    info.append(title, category);
    button.append(imageWrap, info);
    button.addEventListener('click', () => openLightbox(index));
    card.append(button);
    return card;
  }));
  const groupNames = { builds: 'builds', models: 'models', graphics: 'artworks' };
  count.textContent = filter === 'all'
    ? `Showing all ${visibleWorks.length} pieces`
    : `Showing ${visibleWorks.length} ${groupNames[filter]}`;
  filterButtons.forEach(button => {
    const active = button.dataset.filter === filter;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

function showLightboxImage() {
  const work = visibleWorks[currentIndex];
  lightboxImage.src = imagePath(work.file);
  lightboxImage.alt = work.alt;
  lightboxTitle.textContent = work.title;
  lightboxCategory.textContent = categoryNames[work.category];
  lightboxCounter.textContent = `${currentIndex + 1} / ${visibleWorks.length}`;
}

function openLightbox(index) {
  previousFocus = document.activeElement;
  currentIndex = index;
  showLightboxImage();
  lightbox.showModal();
  document.body.classList.add('dialog-open');
  document.querySelector('.lightbox-close').focus();
}

function moveLightbox(direction) {
  currentIndex = (currentIndex + direction + visibleWorks.length) % visibleWorks.length;
  showLightboxImage();
}

filterButtons.forEach(button => button.addEventListener('click', () => renderGallery(button.dataset.filter)));
document.querySelectorAll('[data-filter-link]').forEach(link => link.addEventListener('click', () => renderGallery(link.dataset.filterLink)));
document.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
document.querySelector('.lightbox-prev').addEventListener('click', () => moveLightbox(-1));
document.querySelector('.lightbox-next').addEventListener('click', () => moveLightbox(1));
lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
lightbox.addEventListener('close', () => { document.body.classList.remove('dialog-open'); previousFocus?.focus(); });
document.addEventListener('keydown', event => {
  if (!lightbox.open) return;
  if (event.key === 'ArrowRight') moveLightbox(1);
  if (event.key === 'ArrowLeft') moveLightbox(-1);
});

const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mobileNav.hidden = !open;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
}));
const discordButton = document.getElementById('copy-discord');
const discordStatus = document.getElementById('discord-status');
discordButton.addEventListener('click', async () => {
  const username = 'theneapolitanman';
  try {
    await navigator.clipboard.writeText(username);
    discordStatus.textContent = 'Copied!';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(discordButton.querySelector('strong'));
    selection.removeAllRanges();
    selection.addRange(range);
    discordStatus.textContent = 'Select and copy the highlighted name';
  }
  window.setTimeout(() => { discordStatus.textContent = 'Copy username'; }, 3500);
});
renderGallery();
if (location.hash) {
  const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: 'instant' }));
}
