var $floaty = $('.floaty');

$floaty.on('mouseover', function() {
  $floaty.addClass('is-active');
});

$floaty.on('mouseout', function() {
  $floaty.removeClass('is-active');
});