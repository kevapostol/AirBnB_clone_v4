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

  $.ajax({
    type: 'POST',
    contentType: 'application/json',
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    data: '{}',
    success: function (data) {
      $.each(data, function (i, value) {
        $('.places').append(placesTemplate(value));
      });
    }

  });

  function placesTemplate (place) {
    return `<article>
  <div class="title_box">
    <h2> ${place.name} </h2>
    <div class="price_by_night">$${place.price_by_night}</div>
  </div>
  <div class="information">
    <div class="max_guest">${place.max_guest} Guest${many(place.max_guest)}</div>
          <div class="number_rooms">${place.number_rooms} Bedroom${many(place.number_rooms)} </div>
          <div class="number_bathrooms">${place.number_bathrooms} Bathroom${many(place.number_bathrooms)}</div>
  </div>

        <div class="description">
    ${place.description}
        </div>
</article>
`;
  }

  function many (num) {
    if (num !== 1) {
      return 's';
    } else { return ''; }
  }
});
