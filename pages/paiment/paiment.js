$(document).ready(function(){
  RemplirEtudiant();
  RemplirFormation();
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
          url: 'paiment.php',
      },
      columns: [
          { data: "Id_pay" },
          { data: "Nom_Etd" },
          { data: "Modules" },
          { data: "date_pay" },
          { data: "montant_pay" },
          { data: "montant_rest" },
          { data: "mode_pay" },
          { data: "action" },
      ],
  });




    //DELETE
    $("#example1").on("click", ".deleteUser",function(){


      var id = $(this).data('id');
      var deleteConfirm = confirm("voulez vous vraiment Annuler cette Paiment ?");
 if(deleteConfirm == true)
   {
      $.ajax({
       url: "paiment.php",
          type: 'post',
             data: {request: 2, id: id},
               success: function(response){
                     if(response == 1){
                        alert("Paiment Annulée avec succés.");

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
                                  $('#IdUs').show();
                                  $('#IdLabel').show();
                                  $("#IdUs").prop('readonly', true);
                                  $("#nom").prop('disabled', true);
                  $("#mode").prop('readonly', true);
                  $("#email").prop("readonly", true);
                  $("#login").prop("readonly", true);
                  $("#pass").prop("readonly", true);
                  $("#IdUs").prop("readonly", true);
                  $("#forma").prop('disabled', true);

                                  $.ajax({
                                    url: "paiment.php",
                  type: "post",
                  data: { request: 4, id: id },
                  dataType: "json",
                  success: function (response) {
                    console.log(response);
                    if (response.status == 1) {
                      $("#IdUs").val(response.data.Id_pay);
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

                      $("#email").val(response.data.date_pay);
                      $("#login").val(response.data.montant_pay);
                      $("#pass").val(response.data.montant_rest);
                      $("#mode").val(response.data.mode_pay);

                                              }
                                              else{
                                                  alert("Id Invalid");

                                              }
                                      }

                                  })

                        });


                       //AJOUT
                       $('#btnnouveau').on('click',function() {
                        $("#IdUs").prop('readonly', false);
                        $("#nom").prop('disabled', false);
        $("#mode").prop('readonly', false);
        $("#email").prop("readonly", false);
        $("#login").prop("readonly", false);
        $("#pass").prop("readonly", false);
        $("#IdUs").prop("readonly", false);
        $("#forma").prop('disabled', false);
      $('#IdUs').hide();
      $('#IdLabel').hide();
      $("#BtnAjout").show();
      $("#BtnUpdate").hide();
      $("#nv").show();
      $("#md").hide();
      $("#aff").hide();
      $('#nom').val('');
      $('#mode').val('');
      $('#email').val('');
      $('#login').val('');
      $('#pass').val('');
      $('#IdUs').val('');
      $('#forma').val('');
                  });

                    $('#BtnAjout').on('click',function() {
        let etd = $("#nom").val().trim();
        let formation = $("#forma").val().trim();
      let date = $("#email").val().trim();
      let Montant = $("#login").val().trim();
      let MontantR = $("#pass").val().trim();
       let mode = $("#mode").val().trim();
                      $.ajax({
                        url: "paiment.php",
      type: "post",
      data: {
        request: 3,
      etd:etd,
      formation:formation,
      date:date,
      Montant:Montant,
      MontantR:MontantR,
      mode:mode,

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
                                      $('#IdUs').hide();
                      $('#IdLabel').hide();
                                      $("#nom").prop('disabled', false);
                                      $("#forma").prop('disabled', false);
                      $("#mode").prop('disabled', false);
                      $("#email").prop("readonly", false);
                      $("#login").prop("readonly", false);
                      $("#pass").prop("readonly", false);
                      $("#BtnAjout").hide();
                      $("#BtnUpdate").show();
                      $("#nv").hide();
                      $("#md").show();
                      $("#aff").hide();
                                      $.ajax({
                                        url: "paiment.php",
                      type: "post",
                      data: { request: 4, id: id },
                      dataType: "json",
                      success: function (response) {
                        console.log(response);
                        if (response.status == 1) {
                          $("#IdUs").val(response.data.Id_pay);
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

                          $("#email").val(response.data.date_pay);
                          $("#login").val(response.data.montant_pay);
                          $("#pass").val(response.data.montant_rest);
                          $("#mode").val(response.data.mode_pay);

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
                                      let id = $("#IdUs").val().trim();
                                      let etd = $("#nom").val().trim();
                                      let formation = $("#forma").val().trim();
                                    let date = $("#email").val().trim();
                                    let Montant = $("#login").val().trim();
                                    let MontantR = $("#pass").val().trim();
                                     let mode = $("#mode").val().trim();
                                      $.ajax({
                                        url: "paiment.php",
                                          type: 'post',
                                          data: {request: 5,id:id,   etd:etd,
                                            formation:formation,
                                            date:date,
                                            Montant:Montant,
                                            MontantR:MontantR,
                                            mode:mode,},
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
                                      url: 'paiment.php',
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



                                  function RemplirFormation() {
                                    $.ajax({
                                      url: 'paiment.php',
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
