function setLanguage(lang) {
  localStorage.setItem('lang', lang);

  document.querySelectorAll('.lang').forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      el.textContent = text;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);
});