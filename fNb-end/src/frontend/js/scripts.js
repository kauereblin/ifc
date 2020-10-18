$(() => {

  function show_helicopters() {
    // Request all registered helicopters
    $.ajax({
      url: 'http://localhost:5000/index_helicopters',
      method: 'GET',
      dataType: 'json',
      success: listHelicopters,
      error: function () {
        alert("Error: Search on back-end");
      }
    });

    function listHelicopters(helicopters) {
      // Add all requested helicopters in the table
      $('#helicoptersContentTable').empty();

      toggleVisibilityContent("helicoptersTable");

      for (var helicopter of helicopters) {
        newLine = `<tr id="line_${helicopter.id}">
          <td> ${helicopter.name} </td>
          <td> ${helicopter.pilot} </td>
          <td> ${helicopter.capacity} </td>
          <td> ${helicopter.propellers}  </td>
          <td> ${helicopter.missile} </td>
          <td>
            <a href=# id="${helicopter.id}" class="delete_helicopter">
                <p class="badge badge-danger">Excluir</p>
            </a>
          </td>
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

  $(document).on("click", "#showHelicopters", () => {
    show_helicopters();
  });

  $(document).on("click", "#goToIndex", () => {
    toggleVisibilityContent("initialContent");
  });

  $(document).on("click", "#btnCreateHelicopter", () => {
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
        if (returnedData.result === "ok") {
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

  $('#modalCreateHelicopter').on('hide.bs.modal', (e) => {
    if (! $("#helicoptersTable").hasClass('invisible')) {
        show_helicopters();
    }
  });

  $(document).on("click", ".delete_helicopter", function() {
    var idHelicopter = $(this).attr("id");

    $.ajax({
      url: `http://localhost:5000/delete_helicopter/${idHelicopter}`,
      type: "DELETE",
      dataType: 'json',
      success: deleteHelicopter,
      error: deleteError
    });

    function deleteHelicopter(returnedData) {
      if (returnedData.result === "ok") {
        $(`#line_${idHelicopter}`).fadeOut();
      } else {
        alert(`ERROR: ${returnedData.result}: ${returnedData.datails}`);
      }
    }

    function deleteError(returnedData) {
      alert("Error: Search on back-end");
    }
  });

  toggleVisibilityContent("initialContent");
});
