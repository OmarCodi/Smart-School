
$(document).ready(function() {
  // Initialize DataTable
  var AdherDataTable = $("#example1").DataTable({
      responsive: true,
      lengthChange: false,
      autoWidth: false,
      dom: 'Bfrtip',  // Ajouter cette ligne pour définir l'emplacement des boutons
      buttons: [
          {extend: 'copy', text: 'Copier'},
          {extend: 'csv', text: 'CSV'},
          {extend: 'excel', text: 'Excel'},
          {extend: 'pdf', text: 'PDF'},
          {extend: 'print', text: 'Imprimer'},
          {extend: 'colvis', text: 'Colonnes visibles'}
      ],
      ajax: {
          url: 'contact.php',
      },
      columns: [
          { data: "IdAdherant" },
          { data: "NomAdherant" },
          { data: "EmailAdherant" },
          { data: "Telephone" },
          { data: "Entreprise" },
          { data: "Methode" },
          { data: "Objet" },
          { data: "Votre_Message" },
          { data: "action" },
      ],
  });

  // Append the buttons to the container
  AdherDataTable.buttons().container().appendTo("#example1_wrapper .col-md-6:eq(0)");

  // DELETE
  $("#example1").on("click", ".deleteUser", function() {
      var id = $(this).data('id');
      var deleteConfirm = confirm("Avez vous vraiment traité ce contact ?");
      if(deleteConfirm == true) {
          $.ajax({
              url: "contact.php",
              type: 'post',
              data: {request: 2, id: id},
              success: function(response) {
                  if(response == 1) {
                      alert("Contact traité .");
                      AdherDataTable.ajax.reload();
                  } else {
                      alert("Id invalide.");
                  }
              }
          });
      } else {
          alert("Supprission Annuler");
      }
  });


});

