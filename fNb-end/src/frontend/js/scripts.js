$(function () {

  $.ajax({
    url: 'http://localhost:5000/index_helicopters',
    method: 'GET',
    dataType: 'json',
    success: listHelicopters,
    error: function () {
      alert("Error: Search on back-end!");
    }
  });

  function listHelicopters(helicopters) {
    for (var i in helicopters) {
      line = '<tr>' +
        '<td>' + helicopters[i].name + '</td>' +
        '<td>' + helicopters[i].pilot + '</td>' +
        '<td>' + helicopters[i].capacity + '</td>' +
        '<td>' + helicopters[i].propellers + '</td>' +
        '<td>' + helicopters[i].missile + '</td>' +
        '</tr>'

      $('#helicoptersTable').append(line);
    }
  }
});
