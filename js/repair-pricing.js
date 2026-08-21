(() => {
  'use strict';

  const tabs = document.querySelectorAll('.pricing-tab');
  const panels = {
    phone: document.getElementById('panel-phone'),
    computer: document.getElementById('panel-computer'),
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      Object.values(panels).forEach((panel) => panel && panel.classList.remove('active'));
      const target = panels[tab.getAttribute('data-target')];
      if (target) target.classList.add('active');
    });
  });
})();
