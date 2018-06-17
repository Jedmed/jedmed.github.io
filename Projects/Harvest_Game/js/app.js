$(() => {
  // Get Elements
  const $container = $('.container');
  let player = ['one', 'two'];


  // Event Handlers
  const rotatePlayer = () => {
    tempPlayer = player.shift(1);
    player.push(tempPlayer);
  }

  const plant = () => {
    if (!($(event.target).hasClass('plant')) && !($(event.target).hasClass('weeds'))) {
      $(event.target).addClass('plant');
      $(event.target).addClass(player[0]);
      rotatePlayer();
    }
  }

  const makeField = () => {
    for (let i = 0; i < 96; i++) {
      const $div = $('<div>');
      $div.addClass('square');
      $container.append($div);
    }
  }

  const generateWeeds = () => {
    for (let i = 0; i < 56; i++) {
      $container.children().eq(Math.floor(Math.random() * $container.children().length)).addClass('weeds')
    }
  }


  makeField();
  generateWeeds();
  // Event Listeners
  const $square = $('.square');
  $square.on('click', plant)
});
