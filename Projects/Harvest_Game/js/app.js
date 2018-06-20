$(() => {
  // Get Elements
  const $container = $('.container');
  const $sidebar = $('.sidebar');
  let player = ['one', 'two'];
  let playerPoints = [0, 0];
  const $currentPlayer = $('.info > h2')
  const $button = $('button');

  // Event Handlers
  // Rotate players per action
  const pointCheck = () => {
    const win = 10;
    switch (true) {
      case (playerPoints[0] >= win && playerPoints[1] < win):
        $('.win').css('display', 'block');
        $('.win strong').text('Player One');
        break;

      case (playerPoints[1] >= win && playerPoints[0] < win):
        $('.win').css('display', 'block');
        $('.win strong').text('Player Two')
        break;

      case (playerPoints[0] >= win && playerPoints[1] >= win):
        $('.win').css('display', 'block');
        $('.win h1').text("It's a Draw!");
        break;
    }
    // if (playerPoints[0] >= 3) {
    //   $('.win').css('display', 'block');
    //   $('.win strong').text('Player One')
    // } else if (playerPoints[1] >= 3) {
    //   $('.win').css('display', 'block');
    //   $('.win strong').text('Player Two')
    // } else if (playerPoints[0] && playerPoints[1] >= 3) {
    //   $('.win').css('display', 'block');
    //   $('.win').text("It's a Draw!");
    // }
  }

  const rotatePlayer = () => {
    tempPlayer = player.shift(1);
    player.push(tempPlayer);
    $currentPlayer.text('Player ' + player[0]);
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

  // get position of event
  const getIndex = (e) => {
    let parent = e.parentElement;
    for (let i = 0; i < parent.children.length; i++) {
      if (parent.children[i].isEqualNode(e)) {
        return i;
      }
    }
  }
  // selects elements in a 4-square box and changes plants to grown plants if plant exists
  const growPlant = (event) => {
    const multiTarget = [
      $square.eq(getIndex(event.target)), $square.eq(getIndex((event.target)) + 1),
      $square.eq(getIndex((event.target)) + 12),
      $square.eq(getIndex((event.target)) + 13)
    ];

    for (let i = 0; i < multiTarget.length; i++) {
      if (multiTarget[i].hasClass('one')) {
        multiTarget[i].removeClass('one plant').addClass('one-planted');
        playerPoints[0] += 1;
        $('.play-1').text(playerPoints[0]);
      } else if (multiTarget[i].hasClass('two')) {
        multiTarget[i].removeClass('two plant').addClass('two-planted');
        playerPoints[1] += 1;
        $('.play-2').text(playerPoints[1]);
      }
    }
    pointCheck();
    rotatePlayer();
  }

  const deselectWaterPlant = () => {
    $container.children().removeClass('water');
    $square.unbind('click');
    $square.on('click', plant);
    $button.on('click', waterPlant);
  }

  const waterPlant = () => {
    $square.unbind('click');
    $container.children().addClass('water');
    $button.on('click', deselectWaterPlant);
    // Set up watering functionality
    $square.on('click', (event) => {
      growPlant(event);
      deselectWaterPlant();
    });
  }

  // generate the playing field
  const makeField = () => {
    for (let i = 0; i < 96; i++) {
      const $div = $('<div>');
      $div.addClass('square');
      $div.attr('id', i + 1);
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
