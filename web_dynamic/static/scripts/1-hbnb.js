$(function () {
  const dict = {};

  $('input:checkbox').click(function () {
    if ($(this).is(':checked')) { dict[$(this).data('id')] = $(this).data('name'); } else if ($(this).is(':not(:checked)')) {
      delete dict[$(this).data('id')];
    }

    $('.amenities h4').text(Object.values(dict).join(', '));
  });
});
