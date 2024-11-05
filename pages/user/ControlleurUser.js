

$(document).ready(function(){
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
url: 'ModeleUser.php',
},
columns: [
{ data: "IdUser" },
{ data: "NomUser" },
{ data: "PrenomUser" },
{ data: "EmailUser" },
{ data: "action" },
],

});

// Append the buttons to the container
userDataTable.buttons().container().appendTo("#example1_wrapper .col-md-6:eq(0)");
              //DELETE
              $("#example1").on("click", ".deleteUser",function(){


var id = $(this).data('id');
var deleteConfirm = confirm("voulez vous vraiment supprimer ce User ?");
if(deleteConfirm == true)
{
$.ajax({
url: "ModeleUser.php",
   type: 'post',
      data: {request: 2, id: id},
        success: function(response){
              if(response == 1){
                 alert("User supprimé avec succés.");

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
  $("#IdUs").show();
$("#IdLabel").show();
  $("#IdUs").prop("readonly", true);
  $("#nom").prop("readonly", true);
$("#prenom").prop("readonly", true);
$("#email").prop("readonly", true);
$("#login").prop("readonly", true);
$("#pass").prop("readonly", true);


  $.ajax({
    url: "ModeleUser.php",
type: "post",
data: { request: 4, id: id },
dataType: "json",
success: function (response) {
console.log(response);
if (response.status == 1) {
$("#IdUs").val(response.data.IdUser);
$("#nom").val(response.data.NomUser);
$("#prenom").val(response.data.PrenomUser);
$("#email").val(response.data.EmailUser);
$("#login").val(response.data.LoginUser);
$("#pass").val(response.data.MotPassUser);

              }
              else{
                  alert("Id Invalid");

              }
      }

  })

       });
              //AJOUT
  $('#btnnouveau').on('click',function() {
    $("#nom").prop("readonly", false);
$("#prenom").prop("readonly", false);
$("#email").prop("readonly", false);
$("#tel").prop("readonly", false);
$("#login").prop("readonly", false);
$("#pass").prop("readonly", false);
$("#IdUs").hide();
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
$('#login').val('');
$('#pass').val('');
});

$('#BtnAjout').on('click',function() {
let nom = $("#nom").val().trim();
let prenom = $("#prenom").val().trim();
let email = $("#email").val().trim();
let login = $("#login").val().trim();
let password = $("#pass").val().trim();
  $.ajax({
    url: "ModeleUser.php",
type: "post",
data: {
request: 3,
nom: nom,
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
  $("#IdUs").prop("readonly", true);
  $("#nom").prop("readonly", false);
$("#prenom").prop("readonly", false);
$("#email").prop("readonly", false);
$("#tel").prop("readonly", false);
$("#login").prop("readonly", false);
$("#pass").prop("readonly", false);
$("#BtnAjout").hide();
$("#BtnUpdate").show();
$("#IdUs").hide();
$("#IdLabel").hide();
$("#nv").hide();
$("#md").show();
$("#aff").hide();
  $.ajax({
    url: "ModeleUser.php",
      type: 'post',
      data: {request: 4, id: id},
      dataType:'json',
      success: function(response){
              if(response.status == 1){
                $("#IdUs").val(response.data.IdUser);
                $("#nom").val(response.data.NomUser);
$("#prenom").val(response.data.PrenomUser);
$("#email").val(response.data.EmailUser);
$("#login").val(response.data.LoginUser);
$("#pass").val(response.data.MotPassUser);

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
  let id = $('#IdUs').val().trim();
  let nom = $("#nom").val().trim();
let prenom = $("#prenom").val().trim();
let email = $("#email").val().trim();
let login = $("#login").val().trim();
let password = $("#pass").val().trim();
  $.ajax({
    url: "ModeleUser.php",
      type: 'post',
      data: {request: 5,id: id, nom: nom,prenom: prenom,email: email,login: login,password:password},
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






});

