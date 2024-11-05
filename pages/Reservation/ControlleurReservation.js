


                  $(document).ready(function(){
                    RemplirProf();
                    RemplirEtudiant();
                    RemplirSalle();
                    RemplirFormation();
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
              url: 'ModeleReservation.php',
          },
          columns: [
            { data: "ID_res" },
              { data: "Nom_Etd" },
              { data: "Nom_prof" },
              { data: "Modules" },
              { data: "Designation_Sal" },
              { data: "Date_Res" },
              { data: "Heure_Debut_Res" },
              { data: "Heure_Fin_Res" },
              { data: "action" },
          ],

      });

      // Append the buttons to the container
      userDataTable.buttons().container().appendTo("#example1_wrapper .col-md-6:eq(0)");
                                //DELETE
                                $("#example1").on("click", ".deleteUser",function(){


                 var id = $(this).data('id');
                 var deleteConfirm = confirm("voulez vous vraiment Annuler cette Réservation ?");
            if(deleteConfirm == true)
              {
                 $.ajax({
                  url: "ModeleReservation.php",
                     type: 'post',
                        data: {request: 2, id: id},
                          success: function(response){
                                if(response == 1){
                                   alert("Réservation Annulée avec succés.");

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
                    $('#IdRes').show();
                    $('#IdLabel').show();
                    $("#IdUs").prop('disabled', true);
                    $("#nom").prop('disabled', true);
    $("#prenom").prop('disabled', true);
    $("#email").prop("readonly", true);
    $("#login").prop("readonly", true);
    $("#pass").prop("readonly", true);
    $("#IdRes").prop("readonly", true);
    $("#forma").prop('disabled', true);

                    $.ajax({
                      url: "ModeleReservation.php",
    type: "post",
    data: { request: 4, id: id },
    dataType: "json",
    success: function (response) {
      console.log(response);
      if (response.status == 1) {
        var Nom_prof = response.data.Nom_prof;
        $('#IdUs option').each(function() {
            if ($(this).text() === Nom_prof) {
                $(this).prop('selected', true);
            }
        });
        var Nom_Etd = response.data.Nom_Etd;
        $('#nom option').each(function() {
            if ($(this).text() === Nom_Etd) {
                $(this).prop('selected', true);
            }
        });
        var Formation = response.data.Modules;
        $('#forma option').each(function() {
            if ($(this).text() === Formation) {
                $(this).prop('selected', true);
            }
        });
        var Designation_Sal = response.data.Designation_Sal;
        $('#prenom option').each(function() {
            if ($(this).text() === Designation_Sal) {
                $(this).prop('selected', true);
            }
        });
        $("#IdRes").val(response.data.ID_res);
        $("#email").val(response.data.Date_Res);
        $("#login").val(response.data.Heure_Debut_Res);
        $("#pass").val(response.data.Heure_Fin_Res);

                                }
                                else{
                                    alert("Id Invalid");

                                }
                        }

                    })

                         });
                                //AJOUT
                    $('#btnnouveau').on('click',function() {
                      $("#nom").prop('disabled', false);
    $("#prenom").prop('disabled', false);
    $("#IdUs").prop('disabled', false);
    $("#email").prop("readonly", false);
    $("#login").prop("readonly", false);
    $("#pass").prop("readonly", false);
    $("#forma").prop('disabled', false);
    $('#IdRes').hide();
    $('#IdLabel').hide();
    $("#BtnAjout").show();
    $("#BtnUpdate").hide();
    $("#nv").show();
    $("#md").hide();
    $("#aff").hide();
    $('#nom').val('');
    $('#prenom').val('');
    $('#email').val('');
    $('#login').val('');
    $('#pass').val('');
    $('#IdUs').val('');
    $('#forma').val('');
                });

                  $('#BtnAjout').on('click',function() {
                    let prof = $("#IdUs").val().trim();
      let nom = $("#nom").val().trim();
    let prenom = $("#prenom").val().trim();
    let email = $("#email").val().trim();
    let login = $("#login").val().trim();
    let password = $("#pass").val().trim();
    let formation = $("#forma").val().trim();
                    $.ajax({
                      url: "ModeleReservation.php",
    type: "post",
    data: {
      request: 3,
      prof:prof,
      nom: nom,
      formation:formation,
      prenom: prenom,
      email: email,
      login: login,
      password: password,

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
                    $('#IdRes').hide();
    $('#IdLabel').hide();
                    $("#IdUs").prop('disabled', false);
                    $("#nom").prop('disabled', false);
                    $("#forma").prop('disabled', false);
    $("#prenom").prop('disabled', false);
    $("#email").prop("readonly", false);
    $("#login").prop("readonly", false);
    $("#pass").prop("readonly", false);
    $("#BtnAjout").hide();
    $("#BtnUpdate").show();
    $("#nv").hide();
    $("#md").show();
    $("#aff").hide();
                    $.ajax({
                      url: "ModeleReservation.php",
    type: "post",
    data: { request: 4, id: id },
    dataType: "json",
    success: function (response) {
      console.log(response);
      if (response.status == 1) {
        var Nom_prof = response.data.Nom_prof;
        $('#IdUs option').each(function() {
            if ($(this).text() === Nom_prof) {
                $(this).prop('selected', true);
            }
        });
        var Nom_Etd = response.data.Nom_Etd;
        $('#nom option').each(function() {
            if ($(this).text() === Nom_Etd) {
                $(this).prop('selected', true);
            }
        });
        var Formation = response.data.Modules;
        $('#forma option').each(function() {
            if ($(this).text() === Formation) {
                $(this).prop('selected', true);
            }
        });
        var Designation_Sal = response.data.Designation_Sal;
        $('#prenom option').each(function() {
            if ($(this).text() === Designation_Sal) {
                $(this).prop('selected', true);
            }
        });
        $("#IdRes").val(response.data.ID_res);
        $("#email").val(response.data.Date_Res);
        $("#login").val(response.data.Heure_Debut_Res);
        $("#pass").val(response.data.Heure_Fin_Res);

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
                    let id = $("#IdRes").val().trim();
                    let prof = $("#IdUs").val().trim();
      let nom = $("#nom").val().trim();
    let prenom = $("#prenom").val().trim();
    let email = $("#email").val().trim();
    let login = $("#login").val().trim();
    let password = $("#pass").val().trim();
    let formation = $("#forma").val().trim();
                    $.ajax({
                      url: "ModeleReservation.php",
                        type: 'post',
                        data: {request: 5,id:id,prof: prof, nom: nom,prenom: prenom,email: email,login: login,password:password,formation:formation},
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


                function RemplirProf() {
        $.ajax({
          url: 'ModeleReservation.php',
          type: 'post',
          data: { request: 6 },

          dataType: 'json',
          success: function (response) {

            var len = response.length;
            for (var i = 0; i < len; i++) {
              var nom = response[i]['Nom'];
              var id = response[i]['Id_prof'];
              $('#IdUs').append("<option value='"+id+"'>"+nom+"</option>");
            }
          }
        })

      }


      function RemplirEtudiant() {
        $.ajax({
          url: 'ModeleReservation.php',
          type: 'post',
          data: { request: 7 },

          dataType: 'json',
          success: function (response) {

            var len = response.length;
            for (var i = 0; i < len; i++) {
              var nom = response[i]['Nom'];
              var id = response[i]['Id_Etd'];
              $('#nom').append("<option value='"+id+"'>"+nom+"</option>");
            }
          }
        })

      }

      function RemplirSalle() {
        $.ajax({
          url: 'ModeleReservation.php',
          type: 'post',
          data: { request: 8 },

          dataType: 'json',
          success: function (response) {

            var len = response.length;
            for (var i = 0; i < len; i++) {
              var nom = response[i]['Nom'];
              var id = response[i]['Id_Sal'];
              $('#prenom').append("<option value='"+id+"'>"+nom+"</option>");
            }
          }
        })

      }

      function RemplirFormation() {
        $.ajax({
          url: 'ModeleReservation.php',
          type: 'post',
          data: { request: 10},

          dataType: 'json',
          success: function (response) {

            var len = response.length;
            for (var i = 0; i < len; i++) {
              var nom = response[i]['Mod'];
              var id = response[i]['Id_Formation'];
              $('#forma').append("<option value='"+id+"'>"+nom+"</option>");
            }
          }
        })

      }



            });

