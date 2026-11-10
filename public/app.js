const iconPaths = {
  youtube: '<path d="M22 8.2a2.8 2.8 0 0 0-2-2C18.2 5.7 12 5.7 12 5.7s-6.2 0-8 .5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1.5 12 29 29 0 0 0 2 15.8a2.8 2.8 0 0 0 2 2c1.8.5 8 .5 8 .5s6.2 0 8-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-3.8 29 29 0 0 0-.5-3.8ZM10 15.2V8.8l5.5 3.2-5.5 3.2Z" fill="currentColor" stroke="none"/>',
  discord: '<path d="M19.7 5.4A17 17 0 0 0 15.5 4l-.5 1a15.5 15.5 0 0 0-6 0l-.5-1a17 17 0 0 0-4.2 1.4C1.7 9.3 1 13.1 1.3 16.9a17 17 0 0 0 5.2 2.6l1.1-1.8-1.7-.8.4-.3a12.2 12.2 0 0 0 11.4 0l.4.3-1.7.8 1.1 1.8a17 17 0 0 0 5.2-2.6c.4-4.4-.7-8.1-3-11.5ZM8.5 14.6c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm7 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" fill="currentColor" stroke="none"/>',
  whatsapp: '<path d="M20.5 3.5A11.8 11.8 0 0 0 2 17.7L.5 23.5l6-1.6A11.8 11.8 0 0 0 20.5 3.5ZM12 21a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.5.9.9-3.4-.2-.4A9.8 9.8 0 1 1 12 21Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z" fill="currentColor" stroke="none"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.7" r=".8" fill="currentColor" stroke="none"/>',
  tiktok: '<path d="M14 3v11.1a3.6 3.6 0 1 1-3-3.5V7.5a6.7 6.7 0 1 0 6.7 6.6V9.3c1.2.9 2.7 1.4 4.3 1.4V7.2c-3.3 0-5.5-1.8-5.9-4.2H14Z" fill="currentColor" stroke="none"/>',
  github: '<path d="M9 19c-4.5 1.4-4.5-2.5-6.3-3m12.6 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.8a5.3 5.3 0 0 0-1.4-3.7 4.9 4.9 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7.1 0C5.3.9 4.1 1.3 4.1 1.3A4.9 4.9 0 0 0 4 5a5.3 5.3 0 0 0-1.4 3.7c0 5.3 3.1 6.5 6.1 6.8a3.4 3.4 0 0 0-.9 2.6V22"/>',
  telegram: '<path d="m22 3-3.4 18-6.5-4.8-3.4 3.3.5-6.4L18 6.3 7.1 12.8 2 11 22 3Z" fill="currentColor" stroke="none"/>',
  website: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
  email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
  facebook: '<path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h1.7V1.4C17 1.2 15.9 1 14.5 1 11.5 1 9.5 2.8 9.5 6v3H6v4h3.5v8H14Z" fill="currentColor" stroke="none"/>',
  x: '<path d="M5 4 19 20M19 4 5 20"/>',
};

function createIcon(name) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.8');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');
  svg.innerHTML = iconPaths[name] || iconPaths.website;
  return svg;
}

function safeUrl(value) {
  try {
    const url = new URL(value);
    return ['https:', 'http:', 'mailto:', 'tel:'].includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value || '';
}

function renderProfile(site) {
  setText('name', site.name || 'Nama Kamu');
  setText('username', site.username || '');
  setText('description', site.description || '');
  setText('footer-text', site.footer || '');
  document.title = `${site.name || 'My Links'} — My Links`;

  const fallback = document.getElementById('avatar-fallback');
  const avatar = document.getElementById('avatar');
  const firstLetter = (site.name || 'M').trim().charAt(0).toUpperCase() || 'M';
  fallback.textContent = firstLetter;

  if (site.avatar) {
    avatar.src = site.avatar;
    avatar.hidden = false;
    fallback.hidden = true;
    avatar.onerror = () => {
      avatar.hidden = true;
      fallback.hidden = false;
    };
  }
}

function renderLinks(links) {
  const container = document.getElementById('links');
  container.replaceChildren();

  const visibleLinks = Array.isArray(links)
    ? links.filter((link) => link && link.enabled !== false && link.title && safeUrl(link.url))
    : [];

  if (visibleLinks.length === 0) {
    const message = document.createElement('p');
    message.className = 'empty-state';
    message.textContent = 'Belum ada tautan yang ditampilkan.';
    container.append(message);
    return;
  }

  visibleLinks.forEach((link) => {
    const anchor = document.createElement('a');
    anchor.className = 'link-card';
    anchor.href = safeUrl(link.url);
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';

    const iconWrap = document.createElement('span');
    iconWrap.className = 'link-icon';
    iconWrap.append(createIcon(String(link.icon || 'website').toLowerCase()));

    const copy = document.createElement('span');
    copy.className = 'link-copy';

    const title = document.createElement('span');
    title.className = 'link-title';
    title.textContent = link.title;
    copy.append(title);

    if (link.subtitle) {
      const subtitle = document.createElement('span');
      subtitle.className = 'link-subtitle';
      subtitle.textContent = link.subtitle;
      copy.append(subtitle);
    }

    const arrow = document.createElement('span');
    arrow.className = 'link-arrow';
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↗';

    anchor.append(iconWrap, copy, arrow);
    container.append(anchor);
  });
}

async function init() {
  const container = document.getElementById('links');
  try {
    const response = await fetch('/api/config', { cache: 'no-store' });
    if (!response.ok) throw new Error('Config tidak bisa dimuat');
    const data = await response.json();
    renderProfile(data.site || {});
    renderLinks(data.links || []);
  } catch (error) {
    container.replaceChildren();
    const message = document.createElement('p');
    message.className = 'error-state';
    message.textContent = 'Halaman belum bisa dimuat. Periksa konfigurasi server.';
    container.append(message);
    console.error(error);
  }
}

init();
