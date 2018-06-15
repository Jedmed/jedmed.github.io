$(() => {
  const $container = $('.container')

  const makeField = () => {
    for (let i = 0; i < 96; i++) {
      const $div = $('<div>');
      $div.addClass('square');
      $container.append($div);
    }
  }

  const generateWeeds = () => {
    for (let i = 0; i < 56; i++) {
      $container.children().eq(Math.floor(Math.random()*$container.children().length)).addClass('weeds')
    }
  }


  makeField();
  generateWeeds();
});
