$(() => {
  /* Show Functions */
  function show_helicopters() {
    // Request all registered helicopters
    $.ajax({
      url: 'http://localhost:5000/index/helicoptero-de-combates',
      method: 'GET',
      dataType: 'json',
      success: listHelicopters,
      error: function () {
        alert("Erro com os helicópteros: Verifique o back-end");
      }
    });

    function listHelicopters(helicopters) {
      // Add all requested helicopters in the table
      $('#helicoptersContentTable').empty();

      toggleVisibilityContent("helicopters");

      for (var helicopter of helicopters) {
        newLine = `<tr id="line_${helicopter.id}">
          <td> ${helicopter.name} </td>
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


  function show_pilots() {
    // Request all registered pilots
    $.ajax({
      url: 'http://localhost:5000/index/pilots',
      method: 'GET',
      dataType: 'json',
      success: listPilots,
      error: function () {
        alert("Erro com os pilotos: Verifique o back-end");
      }
    });

    function listPilots(pilots) {
      // Add all requested pilots in the table
      $('#pilotsContentTable').empty();

      toggleVisibilityContent("pilots");

      for (var pilot of pilots) {
        newLine = `<tr id="line_${pilot.id}">
          <td> ${pilot.name} </td>
          <td> ${pilot.age} </td>
          <td> ${pilot.patent}  </td>
          <td> ${pilot.blood_type} </td>
          </tr>`

        $('#pilotsContentTable').append(newLine);
      }
    }
  }

  function show_hangars() {
    $.ajax({
      url: 'http://localhost:5000/index/hangars',
      method: 'GET',
      dataType: 'json',
      success: listHangars,
      error: function () {
        alert("Erro com os hangares: Verifique o back-end");
      }
    });

    function listHangars(hangars) {
      $('#hangarsContentTable').empty();

      toggleVisibilityContent("hangars");

      for (var hangar of hangars) {
        newLine = `<tr id="line_${hangar.id}">
          <td> ${hangar.name} </td>
          <td> ${hangar.country} </td>
          <td> ${hangar.pilot.name}  </td>
          <td> ${hangar.pilot.age}  </td>
          <td> ${hangar.pilot.patent}  </td>
          <td> ${hangar.pilot.blood_type}  </td>
          <td> ${hangar.helicopter.name} </td>
          <td> ${hangar.helicopter.capacity} </td>
          <td> ${hangar.helicopter.propellers} </td>
          <td> ${hangar.helicopter.missile} </td>
          </tr>`

        $('#hangarsContentTable').append(newLine);
      }
    }
  }
  /* End Show Functions */

  function toggleVisibilityContent(identifier){
    $("#helicopters").addClass('d-none');
    $("#pilots").addClass('d-none');
    $("#hangars").addClass('d-none');
    $("#initialContent").addClass('d-none');
    $(`#${identifier}`).removeClass('d-none');
  }

  /* Navigation */
  $(document).on("click", "#showHelicopters", () => {
    show_helicopters();
  });

  $(document).on("click", "#showPilots", () => {
    show_pilots();
  });

  $(document).on("click", "#showHangars", () => {
    show_hangars();
  });

  $(document).on("click", "#goToIndex", () => {
    toggleVisibilityContent("initialContent");
  });
  /* End Navigation */

  $(document).on("click", "#btnCreateHelicopter", () => {
    name = $("#inputName").val();
    capacity = $("#inputCapacity").val();
    propellers = $("#inputPropellers").val();
    missile = $("#inputMissile").val();

    var insertData = JSON.stringify({ name: name,
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
        alert(`ERROR: ${returnedData.result}: ${returnedData.details}`);
      }
    }

    function deleteError(returnedData) {
      alert("Error: Search on back-end");
    }
  });

  toggleVisibilityContent("initialContent");
});
