$(function () {

  function show_helicopters() {
    // Request all registered helicopters
    $.ajax({
      url: 'http://localhost:5000/index_helicopters',
      method: 'GET',
      dataType: 'json',
      success: listHelicopters,
      error: function () {
        alert("Error: Search on read");
      }
    });

    function listHelicopters(helicopters) {
      // Add all requested helicopters in the table
      $('#helicoptersContentTable').empty();

      toggleVisibilityContent("helicoptersTable");

      for (var i in helicopters) {
        newLine = `<tr>
          <td> ${helicopters[i].name} </td>
          <td> ${helicopters[i].pilot} </td>
          <td> ${helicopters[i].capacity} </td>
          <td> ${helicopters[i].propellers}  </td>
          <td> ${helicopters[i].missile} </td>
          </tr>`

        $('#helicoptersContentTable').append(newLine);
      }
    }
  }

  function toggleVisibilityContent(identifier){
    $("#helicoptersTable").addClass('invisible');
    $("#initialContent").addClass('invisible');
    $(`#${identifier}`).removeClass('invisible');
  }

  $(document).on("click", "#showHelicopters", function() {
    show_helicopters();
  });

  $(document).on("click", "#goToIndex", function() {
    toggleVisibilityContent("initialContent");
  });

  $(document).on("click", "#btnCreateHelicopter", function() {
    name = $("#inputName").val();
    pilot = $("#inputPilot").val();
    capacity = $("#inputCapacity").val();
    propellers = $("#inputPropellers").val();
    missile = $("#inputMissile").val();

    var insertData = JSON.stringify({ name: name, pilot: pilot,
      capacity: capacity, propellers: propellers, missile: missile });
    $.ajax({
        url: 'http://localhost:5000/create_helicopter',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: insertData,
        success: includedAlert,
        error: includedErrorAlert
    });

    function includedAlert (returnedData) {
      console.log(returnedData)
        if (returnedData.result == "ok") {
            alert("Helicóptero cadastrado com sucesso!");
            $("#inputName").val("");
            $("#inputPilot").val("");
            $("#inputCapacity").val("");
            $("#inputPropellers").val("");
            $("#inputMissile").val("");
        } else {
            alert(`${returnedData.result}: ${returnedData.datails}`);
        }            
    }

    function includedErrorAlert (returnedData) {
        alert(`ERROR: ${returnedData.result}: ${returnedData.datails}`);
      }
  });

  $('#modalCreateHelicopter').on('hide.bs.modal', function (e) {
    if (! $("#helicoptersTable").hasClass('invisible')) {
        show_helicopters();
    }
  });

  toggleVisibilityContent("initialContent");
});
