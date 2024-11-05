

                  $(document).ready(function(){
                    RemplirEtudiant();
                    RemplirModule();
                            // DataTable
          var userDataTable = $("#example1").DataTable({
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
              url: 'ModeleFormation.php',
          },
          columns: [
               {data: "Id_Formation"},
              { data: "Nom_Etd"},
              { data: "DesignationMod"},
              { data: "Date_Inscription"},
              { data: "VolumeHoraireModul"},
              { data: "Prix_Formation" },
              { data: "action" },
          ],

      });

      // Append the buttons to the container
      userDataTable.buttons().container().appendTo("#example1_wrapper .col-md-6:eq(0)");
                                //DELETE
                                $("#example1").on("click", ".deleteUser",function(){


                 var id = $(this).data('id');
                 var deleteConfirm = confirm("voulez vous vraiment Supprimer cette Formation ?");
            if(deleteConfirm == true)
              {
                 $.ajax({
                  url: "ModeleFormation.php",
                     type: 'post',
                        data: {request: 2, id:id},
                          success: function(response){
                                if(response == 1){
                                   alert("Formation Supprimée avec succés.");

                                   userDataTable.ajax.reload();
                                            }
                                 else{
                                      alert("Id invalide.");
                                   }
                                  }

                               })
                          } else {
    alert("Supprission Annuler");
  }



                         });
                                //VIEW
                 $('#example1').on('click','.viewUser',function(){

                  var id = $(this).data('id');
                    $('#BtnUpdate').hide();
                    $('#BtnAjout').hide();
                    $('#md').hide();
                    $('#nv').hide();
                    $('#aff').show();
                    $("#IdFor").show();
    $("#IdLabel").show();
                    $("#Etudiant").prop('disabled', true);
    $("#Module").prop('disabled', true);
    $("#DateInscri").prop("readonly", true);
    $("#Volume_H").prop("readonly", true);
    $("#Prix").prop("readonly", true);
    $("#IdFor").prop("readonly", true);

                    $.ajax({
                      url: "ModeleFormation.php",
    type: "post",
    data: { request: 4, id: id },
    dataType: "json",
    success: function (response) {
      console.log(response);
      if (response.status == 1) {
        var Nom_etd = response.data.Nom_Etd;
        $('#Etudiant option').each(function() {
            if ($(this).text() === Nom_etd) {
                $(this).prop('selected', true);
            }
        });
        var Module = response.data.DesignationMod;
        $('#Module option').each(function() {
            if ($(this).text() === Module) {
                $(this).prop('selected', true);
            }
        });
        $("#IdFor").val(response.data.Id_Formation);
        $("#DateInscri").val(response.data.Date_Inscription);
        $("#Volume_H").val(response.data.VolumeHoraireModul);
        $("#Prix").val(response.data.Prix_Formation);
                                }
                                else{
                                    alert("Id Invalid");

                                }
                        }

                    })

                         });
                                //AJOUT
                    $('#btnnouveau').on('click',function() {

    $("#Etudiant").prop('disabled', false);
    $("#Module").prop('disabled', false);
    $("#DateInscri").prop("readonly", false);
    $("#Volume_H").prop("readonly", false);
    $("#Prix").prop("readonly", false);
    $("#IdFor").hide();
    $("#IdLabel").hide();
    $("#BtnAjout").show();
    $("#BtnUpdate").hide();
    $("#nv").show();
    $("#md").hide();
    $("#aff").hide();
    $('#Etudiant').val('');
    $('#Module').val('');
    $('#Volume_H').val('');
    $('#Prix').val('');
    $('#DateInscri').val('');
                });

                  $('#BtnAjout').on('click',function() {
         let etd = $("#Etudiant").val().trim();
         let module = $("#Module").val().trim();
         let Date = $("#DateInscri").val().trim();
         let Volume_H = $("#Volume_H").val().trim();
         let Prix = $("#Prix").val().trim();
                    $.ajax({
                      url: "ModeleFormation.php",
    type: "post",
    data: {
      request: 3,
      etd:etd,
      module: module,
      Date: Date,
      Volume_H: Volume_H,
      Prix: Prix,
    },
    dataType: "json",
                        success: function(response){
                                if(response.status == 1){
                                    alert(response.message);
                                     // Fermer modal
                                $('#modal-info').modal('toggle');

                                // Recharger DataTable
                                userDataTable.ajax.reload();

                                }
                                else{

                                    alert(response.message);
                                }
                        }
                    })



                });
                               //Modifier
                                    // Affichage
                 $('#example1').on('click','.updateUser',function(){
                    let id = $(this).data('id');
                    $("#Etudiant").prop('disabled', false);
    $("#Module").prop('disabled', false);
    $("#DateInscri").prop("readonly", false);
    $("#Volume_H").prop("readonly", false);
    $("#Prix").prop("readonly", false);
    $("#BtnAjout").hide();
    $("#BtnUpdate").show();
    $("#nv").hide();
    $("#md").show();
    $("#aff").hide();
    $("#IdFor").hide();
    $("#IdLabel").hide();
                    $.ajax({
                      url: "ModeleFormation.php",
    type: "post",
    data: { request: 4, id: id },
    dataType: "json",
    success: function (response) {
      console.log(response);
      if (response.status == 1) {
        var Nom_etd = response.data.Nom_Etd;
        $('#Etudiant option').each(function() {
            if ($(this).text() === Nom_etd) {
                $(this).prop('selected', true);
            }
        });
        var Module = response.data.DesignationMod;
        $('#Module option').each(function() {
            if ($(this).text() === Module) {
                $(this).prop('selected', true);
            }
        });
        $("#IdFor").val(response.data.Id_Formation);
        $("#DateInscri").val(response.data.Date_Inscription);
        $("#Volume_H").val(response.data.VolumeHoraireModul);
        $("#Prix").val(response.data.Prix_Formation);

                                }
                                else{
                                    alert("Id Invalid");

                                }
                        }

                    })

                });

                // update Enregistrement
                $('#BtnUpdate').on('click',function(){
                    // récuperer data
                    let id = $("#IdFor").val().trim();
                    let etd = $("#Etudiant").val().trim();
         let module = $("#Module").val().trim();
         let Date = $("#DateInscri").val().trim();
         let Volume_H = $("#Volume_H").val().trim();
         let Prix = $("#Prix").val().trim();
                    $.ajax({
                      url: "ModeleFormation.php",
                        type: 'post',
                        data: {request: 5,id:id,etd:etd, module: module, Date: Date,Volume_H: Volume_H,Prix: Prix,},
                        dataType:'json',
                        success: function(response){
                                if(response.status == 1){
                                    alert(response.message);
                                     // Fermer modal
                                $('#modal-info').modal('toggle');

                                // Recharger DataTable
                                userDataTable.ajax.reload();



                                }
                                else{

                                    alert(response.message);
                                }
                        }
                    })


                });



      function RemplirEtudiant() {
        $.ajax({
          url: 'ModeleFormation.php',
          type: 'post',
          data: { request: 7 },

          dataType: 'json',
          success: function (response) {

            var len = response.length;
            for (var i = 0; i < len; i++) {
              var nom = response[i]['Nom'];
              var id = response[i]['Id_Etd'];
              $('#Etudiant').append("<option value='"+id+"'>"+nom+"</option>");
            }
          }
        })

      }

      function RemplirModule() {
        $.ajax({
          url: 'ModeleFormation.php',
          type: 'post',
          data: { request: 8 },

          dataType: 'json',
          success: function (response) {

            var len = response.length;
            for (var i = 0; i < len; i++) {
              var nom = response[i]['Nom'];
              var id = response[i]['Id_Mod'];
              $('#Module').append("<option value='"+id+"'>"+nom+"</option>");
            }
          }
        })

      }



            });
