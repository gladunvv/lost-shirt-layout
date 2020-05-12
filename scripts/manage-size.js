(() => {
  const sizeBlocks = document.querySelectorAll('.click-size__item');
  const activeClass = 'size-active';
  const notActiveClass = 'size-not';

  sizeBlocks.forEach((block) => {
    if (block.classList.contains(notActiveClass)) {
      return;
    } else {
      block.addEventListener('click', () => {
        sizeBlocks.forEach((item) => item.classList.remove(activeClass));
        block.classList.add(activeClass);
      });
    }
  });
})();
