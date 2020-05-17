$(function () {
  const dict = {};

  $('input:checkbox').click(function () {
    if ($(this).is(':checked')) { dict[$(this).data('id')] = $(this).data('name'); } else if ($(this).is(':not(:checked)')) {
      delete dict[$(this).data('id')];
    }

    $('.amenities h4').text(Object.values(dict).join(', '));
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
    if (status === 'success') {
      if (data.status === 'OK') {
        $('#api_status').addClass(' available');
      } else {
        $('#api_status').removeClass(' available');
      }
    }
  });
});
