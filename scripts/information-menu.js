(() => {
  const menu = document.querySelectorAll('.information-tabs__item');
  const infoCards = document.querySelectorAll('.information-card__wrapper');
  const visibleCard = 'information-card--visible';
  const activTab = 'information-tabs__item--active';

  menu.forEach((tabMenu) => {
    tabMenu.addEventListener('click', (e) => {
      e.preventDefault();
      menu.forEach((item) => {
          item.classList.remove(activTab);
          tabMenu.classList.add(activTab);
      });
      let tab = tabMenu.getAttribute('tab');
      let activeCard = document.getElementById(tab);
      console.log('activeCard :>> ', activeCard);
      infoCards.forEach((card) => {
        card.classList.remove(visibleCard);
        activeCard.classList.add(visibleCard);
      });
    });
  });
})();
