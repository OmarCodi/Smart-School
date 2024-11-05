


$(document).ready(function(){
          // DataTable
var ProfDataTable = $("#example1").DataTable({
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
url: 'ModeleProfesseur.php',
},
columns: [
  { data: "IdProf" },
  { data: "NomProf" },
  { data: "PrenomProf" },
  { data: "EmailProf" },
  { data: "TelProf" },
  { data: "action" },
],

});

// Append the buttons to the container
ProfDataTable.buttons().container().appendTo("#example1_wrapper .col-md-6:eq(0)");
              //DELETE
              $("#example1").on("click", ".deleteUser",function(){


var id = $(this).data('id');
var deleteConfirm = confirm("voulez vous vraiment supprimer ce Prof ?");
if(deleteConfirm == true)
{
$.ajax({
url: "ModeleProfesseur.php",
   type: 'post',
      data: {request: 2, id: id},
        success: function(response){
              if(response == 1){
                 alert("Prof supprimé avec succés.");

                 ProfDataTable.ajax.reload();
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
  $("#IdPr").show();
$("#IdLabel").show();
  $("#IdPr").prop("readonly", true);
  $("#nom").prop("readonly", true);
$("#prenom").prop("readonly", true);
$("#email").prop("readonly", true);
$("#tel").prop("readonly", true);


  $.ajax({
    url: "ModeleProfesseur.php",
type: "post",
data: { request: 4, id: id },
dataType: "json",
success: function (response) {
console.log(response);
if (response.status == 1) {
$("#IdPr").val(response.data.IdProf);
$("#nom").val(response.data.NomProf);
$("#prenom").val(response.data.PrenomProf);
$("#email").val(response.data.EmailProf);
$("#tel").val(response.data.TelProf);

              }
              else{
                  alert("Id Invalid");

              }
      }

  })

       });
              //AJOUT
  $('#btnnouveau').on('click',function() {
    $("#IdPr").prop("readonly", false);
  $("#nom").prop("readonly", false);
$("#prenom").prop("readonly", false);
$("#email").prop("readonly", false);
$("#tel").prop("readonly", false);
$("#IdPr").hide();
$("#IdLabel").hide();
$("#BtnAjout").show();
$("#BtnUpdate").hide();
$("#nv").show();
$("#md").hide();
$("#aff").hide();
$('#nom').val('');
$('#prenom').val('');
$('#email').val('');
$('#tel').val('');
});

$('#BtnAjout').on('click',function() {
let nom = $("#nom").val().trim();
let prenom = $("#prenom").val().trim();
let email = $("#email").val().trim();
let tel = $("#tel").val().trim();
  $.ajax({
    url: "ModeleProfesseur.php",
type: "post",
data: {
request: 3,
nom: nom,
prenom: prenom,
email: email,
tel: tel,
},
dataType: "json",
      success: function(response){
              if(response.status == 1){
                  alert(response.message);
                   // Fermer modal
              $('#modal-info').modal('toggle');

              // Recharger DataTable
              ProfDataTable.ajax.reload();

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
  $("#IdPr").prop("readonly", true);
  $("#nom").prop("readonly", false);
$("#prenom").prop("readonly", false);
$("#email").prop("readonly", false);
$("#tel").prop("readonly", false);
$("#BtnAjout").hide();
$("#BtnUpdate").show();
$("#IdPr").hide();
$("#IdLabel").hide();
$("#nv").hide();
$("#md").show();
$("#aff").hide();
  $.ajax({
    url: "ModeleProfesseur.php",
      type: 'post',
      data: {request: 4, id: id},
      dataType:'json',
      success: function(response){
              if(response.status == 1){
                $("#IdPr").val(response.data.IdProf);
$("#nom").val(response.data.NomProf);
$("#prenom").val(response.data.PrenomProf);
$("#email").val(response.data.EmailProf);
$("#tel").val(response.data.TelProf);

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
  let id = $('#IdPr').val().trim();
  let nom = $("#nom").val().trim();
let prenom = $("#prenom").val().trim();
let email = $("#email").val().trim();
let tel = $("#tel").val().trim();
  $.ajax({
    url: "ModeleProfesseur.php",
      type: 'post',
      data: {request: 5,id: id, nom: nom,prenom: prenom,email: email,tel: tel},
      dataType:'json',
      success: function(response){
              if(response.status == 1){
                  alert(response.message);
                   // Fermer modal
              $('#modal-info').modal('toggle');

              // Recharger DataTable
              ProfDataTable.ajax.reload();



              }
              else{

                  alert(response.message);
              }
      }
  })


});






});

