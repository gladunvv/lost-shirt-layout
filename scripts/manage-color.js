(() => {
  const radioButtons = document.querySelectorAll('.radio-btn');
  const tshirts = document.querySelectorAll('.product-detail__photo');
  const visibleTshirt = 'detail-photo--visible';

  radioButtons.forEach((button) => {
    button.addEventListener('click', () => {
      let colorPick = button.getAttribute('color');
      let colorTshirt = document.querySelector(`.${colorPick}`)
      tshirts.forEach((tshirt) => {
        tshirt.classList.remove(visibleTshirt);
        colorTshirt.classList.add(visibleTshirt);
      });
    });
  });
})();
