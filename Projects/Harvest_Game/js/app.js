$(() => {
  // Get Elements
  const $container = $('.container');
  let player = ['one', 'two'];
  const fieldBg = ['images/8.png', 'images/9.png', 'images/10.png']

  // Event Handlers
  // Rotate players per action
  const rotatePlayer = () => {
    tempPlayer = player.shift(1);
    player.push(tempPlayer);
  }

  // check if player is selecting a weed and if so remove it, rotate player
  const removeWeeds = (event) => {
    if ($(event.target).hasClass('weeds') === true) {
      $(event.target).removeClass('weeds')
      rotatePlayer();
    }
  }

  // check if players can plant a seed, and if they can do so, rotate player
  const plant = (event) => {
    if (!($(event.target).hasClass('plant')) && !($(event.target).hasClass('weeds'))) {
      $(event.target).addClass('plant');
      $(event.target).addClass(player[0]);
      rotatePlayer();
    }
    removeWeeds(event);
  }

  // generate the playing field
  const makeField = () => {
    for (let i = 0; i < 96; i++) {
      const $div = $('<div>');
      $div.addClass('square');
      // $div.css('background-image', 'url(' + fieldBg[Math.floor(Math.random() * fieldBg.length)] + ')');
      $container.append($div);
    }
  }
  // randomly generate weeds on the field
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
