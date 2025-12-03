/* assets/js/courseCatalog.js
   Ensure new backend courses are recognized. This is minimal: loads existing interactions.
*/
(() => {
  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));

  const categoryFilter = $('#category');
  const levelFilter = $('#level');
  const durationFilter = $('#duration');
  const searchForm = $('#searchForm');
  const searchInput = $('#searchInput');
  const courseCards = $$('.course-card');

  function matchesFilter(card, category, level, duration, query) {
    if (category !== 'All' && card.dataset.category !== category) return false;
    if (level !== 'All' && card.dataset.level !== level) return false;
    if (duration !== 'All' && card.dataset.duration !== duration) return false;
    if (query) {
      const title = (card.dataset.title || card.querySelector('h4')?.textContent || '').toLowerCase();
      return title.includes(query.toLowerCase());
    }
    return true;
  }

  function filterAndSearch() {
    const category = categoryFilter?.value || 'All';
    const level = levelFilter?.value || 'All';
    const duration = durationFilter?.value || 'All';
    const query = (searchInput?.value || '').trim();

    courseCards.forEach(card => {
      const visible = matchesFilter(card, category, level, duration, query);
      card.style.display = visible ? '' : 'none';
    });
  }

  // wire events
  [categoryFilter, levelFilter, durationFilter].forEach(el => {
    if (el) el.addEventListener('change', filterAndSearch);
  });
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      filterAndSearch();
    });
  }
  if (searchInput) searchInput.addEventListener('input', filterAndSearch);

  // init
  document.addEventListener('DOMContentLoaded', () => {
    filterAndSearch();
  });
})();
