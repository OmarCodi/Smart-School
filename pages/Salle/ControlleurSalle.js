

$(document).ready(function(){
          // DataTable
var FormationDataTable = $("#example1").DataTable({
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
url: 'ModeleSalle.php',
},
columns: [
{ data: 'IdFormation' },
      { data: 'Formation' },
      { data: 'Filiére' },
      { data: 'capa' },
      { data: 'action' },
],

});

// Append the buttons to the container
FormationDataTable.buttons().container().appendTo("#example1_wrapper .col-md-6:eq(0)");
              //DELETE
              $("#example1").on("click", ".deleteUser",function(){


var id = $(this).data('id');
var deleteConfirm = confirm("voulez vous vraiment supprimer cette Salle ?");
if(deleteConfirm == true)
{
$.ajax({
url: "ModeleSalle.php",
   type: 'post',
      data: {request: 2, id: id},
        success: function(response){
              if(response == 1){
                 alert("Salle supprimée avec succés.");

                 FormationDataTable.ajax.reload();
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
  $("#IdFo").show();
$("#IdLabel").show();
  $("#IdFo").prop("readonly", true);
  $("#formation").prop("readonly", true);
$("#Filiére").prop("readonly", true);
$("#capa").prop("readonly", true);


  $.ajax({
    url: "ModeleSalle.php",
type: "post",
data: { request: 4, id: id },
dataType: "json",
success: function (response) {
if (response.status == 1) {
$("#IdFo").val(response.data.IdFormation);
$("#formation").val(response.data.Formation);
$("#Filiére").val(response.data.Filiére);
$("#capa").val(response.data.capa);

              }
              else{
                  alert("Id Invalid");

              }
      }

  })

       });
              //AJOUT
  $('#btnnouveau').on('click',function() {
    $("#IdFo").prop("readonly", false);
  $("#formation").prop("readonly", false);
$("#Filiére").prop("readonly", false);
$("#capa").prop("readonly", false);
$("#IdFo").hide();
$("#IdLabel").hide();
$("#BtnAjout").show();
$("#BtnUpdate").hide();
$("#nv").show();
$("#md").hide();
$("#aff").hide();
$('#formation').val('');
$('#Filiére').val('');
$('#capa').val('');
});

$('#BtnAjout').on('click',function() {
let formation = $("#formation").val().trim();
let Filiére = $("#Filiére").val().trim();
let capa = $("#capa").val().trim();
  $.ajax({
    url: "ModeleSalle.php",
type: "post",
data: {
request: 3,
formation:formation,
Filiére:Filiére,
capa:capa,
},
dataType: "json",
      success: function(response){
              if(response.status == 1){
                  alert(response.message);
                   // Fermer modal
              $('#modal-info').modal('toggle');

              // Recharger DataTable
              FormationDataTable.ajax.reload();

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
  $("#IdFo").prop("readonly", true);
  $("#formation").prop("readonly", false);
$("#Filiére").prop("readonly", false);
$("#capa").prop("readonly", false);
$("#BtnAjout").hide();
$("#BtnUpdate").show();
$("#IdFo").hide();
$("#IdLabel").hide();
$("#nv").hide();
$("#md").show();
$("#aff").hide();
  $.ajax({
    url: "ModeleSalle.php",
      type: 'post',
      data: {request: 4, id: id},
      dataType:'json',
      success: function(response){
              if(response.status == 1){
                $("#IdFo").val(response.data.IdFormation);
$("#formation").val(response.data.Formation);
$("#Filiére").val(response.data.Filiére);
$("#capa").val(response.data.capa);
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
  let id = $('#IdFo').val().trim();
  let formation = $("#formation").val().trim();
let Filiére = $("#Filiére").val().trim();
let capa = $("#capa").val().trim();
  $.ajax({
    url: "ModeleSalle.php",
      type: 'post',
      data: {request: 5,id: id, formation:formation,Filiére:Filiére,capa:capa},
      dataType:'json',
      success: function(response){
              if(response.status == 1){
                  alert(response.message);
                   // Fermer modal
              $('#modal-info').modal('toggle');

              // Recharger DataTable
              FormationDataTable.ajax.reload();



              }
              else{

                  alert(response.message);
              }
      }
  })


});


});
