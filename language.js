function setLanguage(lang) {
  localStorage.setItem('lang', lang);

  document.querySelectorAll('.lang').forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      el.classList.remove('show');
      el.offsetWidth;
      el.textContent = text;
      el.classList.add('show');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);
});