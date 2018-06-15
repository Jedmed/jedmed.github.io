$(() => {
  // Get Element
  const $container = $('.container');
  const $square = $('.square');
  let marker = ['cross', 'circle', 'cross', 'circle', 'cross', 'circle', 'cross', 'circle', 'cross'];
  const markerSaved = ['cross', 'circle', 'cross', 'circle', 'cross', 'circle', 'cross', 'circle', 'cross'];
  const $reset = $('.reset');

  // Event Handlers
  const mark = (event) => {
    if (!($(event.target).hasClass('cross') || ($(event.target).hasClass('circle')))) {
      $(event.target).addClass(marker[0]);
      if (winCondition(marker[0])) {
        $('.victory').css('display', 'block');
        $('.victory strong').text(marker[0]);
        $square.unbind('click', mark);
      }
      marker.shift();
      if (marker.length === 0) {
        $('.draw').css('display', 'block');
        $square.unbind('click', mark);
      }

    }
  }

  const winCondition = (i) => {
      let won = false;
      if($container.children().eq(0).hasClass(i) && $container.children().eq(1).hasClass(i) && $container.children().eq(2).hasClass(i)) {
        won = true;
      } else if ($container.children().eq(3).hasClass(i) && $container.children().eq(4).hasClass(i) && $container.children().eq(5).hasClass(i)) {
        won = true;
      } else if ($container.children().eq(6).hasClass(i) && $container.children().eq(7).hasClass(i) && $container.children().eq(8).hasClass(i)) {
        won = true;
      } else if ($container.children().eq(0).hasClass(i) && $container.children().eq(4).hasClass(i) && $container.children().eq(8).hasClass(i)) {
        won = true;
      } else if ($container.children().eq(2).hasClass(i) && $container.children().eq(4).hasClass(i) && $container.children().eq(6).hasClass(i)) {
        won = true;
      } else if ($container.children().eq(0).hasClass(i) && $container.children().eq(3).hasClass(i) && $container.children().eq(6).hasClass(i)) {
        won = true;
      } else if ($container.children().eq(1).hasClass(i) && $container.children().eq(4).hasClass(i) && $container.children().eq(7).hasClass(i)) {
        won = true;
      } else if ($container.children().eq(2).hasClass(i) && $container.children().eq(5).hasClass(i) && $container.children().eq(8).hasClass(i)) {
        won = true;
      }
      return won;
  }

  const reset = () => {
    marker = markerSaved.slice(0)
    $square
    .removeClass('circle')
    .removeClass('cross')
    .bind('click', mark)
    $('.draw').css('display', 'none');
    $('.victory').css('display', 'none');
  }

  // Event Listeners
  $square.on('click', mark);
  $reset.on('click', reset);
})
