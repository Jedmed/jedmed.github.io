$(() => {
  // Get Elements
  const $container = $('.container');
  const $sidebar = $('.sidebar')
  let player = ['one', 'two'];
  const $planted = $('.one');
  const $button = $('button');

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
      $('.plant').on('click', (event) => {
        if ($(event.target).hasClass('one') && player[0] === 'one') {
          $(event.target).removeClass('one plant').addClass('one-planted');
          rotatePlayer();
        } else if ($(event.target).hasClass('two') && player[0] === 'two') {
          $(event.target).removeClass('two plant').addClass('two-planted');
          rotatePlayer();
        }
      })
    }
    removeWeeds(event);
  }

  const waterPlant = () => {
    $square.unbind('click');
    $container.children().addClass('water');
    $square.on('click', (event) => {
      console.log($(event.target).next());
      //rebind key
      $container.children().removeClass('water');
      $square.unbind('click');
      $square.on('click', plant);
    });
  }

  // generate the playing field
  const makeField = () => {
    for (let i = 0; i < 96; i++) {
      const $div = $('<div>');
      $div.addClass('square');
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
  $square.on('click', plant);
  $button.on('click', waterPlant);
});
