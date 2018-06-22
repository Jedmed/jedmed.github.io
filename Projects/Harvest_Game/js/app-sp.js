$(() => {
  const $singlePlayer = $('.single');

  $singlePlayer.on('click', () => {
    const weedArray = [];
    const $container = $('.container');
    const $sidebar = $('.sidebar');
    const player = 'one';
    let playerPoints = 0;
    const $currentPlayer = $('.player > td')
    const $button = $('.water-button');
    const $winModalSingle = $('#modal.win');
    const $modal = $('#modal');
    const $closeBtn = $('button#close');
    const $restart = $('button#restart');

    // Event Handlers
    // open and close modal box
    const openHTPModalSingle = () => {
      $htpModalSingle.css('display', 'flex');
    }

    const openModal = () => {
      $winModalSingle.css('display', 'flex');
    }

    const closeModal = () => {
      $modal.css('display', 'none');
      $htpModalSingle.css('display', 'none')
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

    // Check if there is space left on board
    const fieldCheck = () => {
      if (weedArray.length === 0) {
        openModal();
        $('.win h1').html('Game Over <br /> You scored <strong class="one">' + playerPoints + '</strong> points!');
      }
    }

    // randomly generate weed on the field
    const generateWeedsSingle = () => {
      let randomIndex = weedArray[Math.floor(Math.random() * weedArray.length)]
      let $randomSquare = $container.children().eq(randomIndex);

      while (weedArray.length > 0) {
        if (!($randomSquare.hasClass('plant')) && !($randomSquare.hasClass('weeds')) && !($randomSquare.hasClass('one-planted'))) {
          $randomSquare.addClass('weeds');
          weedArray.splice(weedArray.indexOf(randomIndex), 1);
          fieldCheck();
          break;
        }
        randomIndex = weedArray[Math.floor(Math.random() * weedArray.length)]
        $randomSquare = $container.children().eq(randomIndex);
      }
    }

    // check if player is selecting a weed and if so remove it, rotate player
    const removeWeedsSingle = (event) => {
      if ($(event.target).hasClass('weeds') === true) {
        $(event.target).removeClass('weeds');
        weedArray.push(getIndex(event.target));
        generateWeedsSingle();
      }
    }

    // check if players can plant a seed, and if they can do so, rotate player
    const plantSingle = (event) => {
      if (!($(event.target).hasClass('plant')) && !($(event.target).hasClass('weeds')) && !($(event.target).hasClass('one-planted'))) {
        $(event.target).addClass('plant one');
        weedArray.splice(weedArray.indexOf(getIndex(event.target)), 1);
        fieldCheck();
        generateWeedsSingle();
      }
      removeWeedsSingle(event);
    }



    // selects elements in a 4-square box and changes plants to grownPlant if plant exists
    const growPlantSingle = (event) => {
      const multiTarget = [
        $square.eq(getIndex(event.target)), $square.eq(getIndex((event.target)) + 1),
        $square.eq(getIndex((event.target)) + 12),
        $square.eq(getIndex((event.target)) + 13)
      ];

      for (let i = 0; i < multiTarget.length; i++) {
        if (multiTarget[i].hasClass('one')) {
          multiTarget[i].removeClass('one plant').addClass('one-planted');
          playerPoints += 1;
          $('.play-1').text(playerPoints);
        }
      }
      generateWeedsSingle();
    }

    // deactivate watering plant functionality
    const deselectWaterPlant = () => {
      $container.children().removeClass('water');
      $button.css('background-color', 'rgba(0, 128, 255, 1)');
      $button.text('Water Plants');
      $square.unbind('click');
      $square.on('click', plantSingle);
      $button.on('click', waterPlantSingle);
    }

    // activate watering plant functionality
    const waterPlantSingle = () => {
      $square.unbind('click');
      $container.children().addClass('water');
      $button.css('background-color', 'red');
      $button.text('Cancel Water');
      $button.on('click', deselectWaterPlant);
      // Set up watering functionality
      $square.on('click', (event) => {
        growPlantSingle(event);
        deselectWaterPlant();
      });
    }

    // generate the playing field
    const makeField = () => {
      for (let i = 0; i < 96; i++) {
        weedArray.push(i);
        const $div = $('<div>');
        $div.addClass('square');
        $div.attr('id', i + 1);
        $container.append($div);
      }
    }

    // Restart game by reloading page
    const restart = () => {
      location.reload();
    }

    // Single Player Events
    $('.start').css('display', 'none');
    $('.title-mobile').removeClass('title-start');
    makeField();
    const $square = $('.square');
    $('.content').css('display', 'flex');
    $('.player').children().eq(0).text('Single Player');
    $('.player').children().eq(1).remove();
    $('.info').children().children().eq(3).remove();
    $('button.how-to-play').attr('class', 'how-to-play-single');
    const $htpButtonSingle = $('button.how-to-play-single')
    const $htpModalSingle = $('#modal.how-to-play-single')

    // Event Listeners
    $htpButtonSingle.on('click', openHTPModalSingle);
    $square.on('click', plantSingle);
    $button.on('click', waterPlantSingle);
    $closeBtn.on('click', closeModal);
    $restart.on('click', restart);
  })
})
