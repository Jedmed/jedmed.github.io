$(() => {
  // Get Elements
  const $container = $('.container');
  const $sidebar = $('.sidebar');
  let player = ['one', 'two'];
  let playerPoints = [0, 0];
  const $currentPlayer = $('.player > td')
  const $button = $('.water-button');
  const $modal = $('#modal');
  const $closeBtn = $('#close');

  // Event Handlers

  // open/close modal box
  const openModal = () => {
    $modal.css('display', 'flex');
  }

  const closeModal = () => {
    $modal.css('display', 'none');
  }

  // Check players' current score and determine a winner
  const pointCheck = () => {
    const win = 10;
    switch (true) {
      case (playerPoints[0] >= win && playerPoints[1] < win):
        openModal();
        $('.win strong').text('Player One').addClass('one');
        break;

      case (playerPoints[1] >= win && playerPoints[0] < win):
        openModal();
        $('.win strong').text('Player Two').addClass('two');
        break;

      case (playerPoints[0] >= win && playerPoints[1] >= win):
        openModal();
        $('.win h1').text("It's a Draw!");
        break;
    }
  }

  // Rotate players and update sidebar
  const rotatePlayer = () => {
    tempPlayer = player.shift(1);
    player.push(tempPlayer);
    $currentPlayer.text(player[0]).removeClass(player[1]).addClass(player[0]);
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
    if (!($(event.target).hasClass('plant')) && !($(event.target).hasClass('weeds')) && !($(event.target).hasClass('one-planted')) && !($(event.target).hasClass('two-planted'))) {
      $(event.target).addClass('plant');
      $(event.target).addClass(player[0]);
      rotatePlayer();
    }
    removeWeeds(event);
  }

  // get index of event.target
  const getIndex = (e) => {
    let parent = e.parentElement;
    for (let i = 0; i < parent.children.length; i++) {
      if (parent.children[i].isEqualNode(e)) {
        return i;
      }
    }
  }

  // selects elements in a 4-square box and changes plants to grownPlant if plant exists
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
    $button.css('background-color', 'rgba(0, 128, 255, 1)');
    $button.text('Water Plants');
    $square.unbind('click');
    $square.on('click', plant);
    $button.on('click', waterPlant);
  }

  const waterPlant = () => {
    $square.unbind('click');
    $container.children().addClass('water');
    $button.css('background-color', 'red');
    $button.text('Cancel Water');
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
  const $square = $('.square');

  // Event Listeners
  $square.on('click', plant);
  $button.on('click', waterPlant);
  $closeBtn.on('click', closeModal);
});
