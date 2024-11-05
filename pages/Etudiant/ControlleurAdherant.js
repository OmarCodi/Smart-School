
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
            url: 'ModeleAdherant.php',
        },
        columns: [
            { data: "IdAdherant" },
            { data: "NomAdherant" },
            { data: "PrenomAdherant" },
            { data: "EmailAdherant" },
            { data: "Telephone" },
            { data: "Date_de_naissance" },
            { data: "action" },
        ],
    });

    // Append the buttons to the container
    AdherDataTable.buttons().container().appendTo("#example1_wrapper .col-md-6:eq(0)");

    // DELETE
    $("#example1").on("click", ".deleteUser", function() {
        var id = $(this).data('id');
        var deleteConfirm = confirm("voulez vous vraiment supprimer ce ETUDIANT ?");
        if(deleteConfirm == true) {
            $.ajax({
                url: "ModeleAdherant.php",
                type: 'post',
                data: {request: 2, id: id},
                success: function(response) {
                    if(response == 1) {
                        alert("ETUDIANT supprimé avec succés.");
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

    // VIEW
    $('#example1').on('click','.viewUser',function() {
        var id = $(this).data('id');
        $('#BtnUpdate').hide();
        $('#BtnAjout').hide();
        $('#md').hide();
        $('#nv').hide();
        $('#aff').show();
        $("#IdAd").show();
        $("#IdLabel").show();
        $("#PassLabel").hide();
        $("#pass").hide();
        $("#IdAd").prop("readonly", true);
        $("#nom").prop("readonly", true);
        $("#prenom").prop("readonly", true);
        $("#email").prop("readonly", true);
        $("#tel").prop("readonly", true);
        $("#birthday").prop("readonly", true);

        $.ajax({
            url: "ModeleAdherant.php",
            type: "post",
            data: { request: 4, id: id },
            dataType: "json",
            success: function(response) {
                console.log(response);
                if (response.status == 1) {
                    $("#IdAd").val(response.data.IdAdherant);
                    $("#nom").val(response.data.NomAdherant);
                    $("#prenom").val(response.data.PrenomAdherant);
                    $("#email").val(response.data.EmailAdherant);
                    $("#tel").val(response.data.Telephone);
                    $("#birthday").val(response.data.Date_de_naissance);
                } else {
                    alert("Id Invalid");
                }
            }
        });
    });

    // AJOUT
    $('#btnnouveau').on('click', function() {
        $("#IdAd").prop("readonly", true);
        $("#nom").prop("readonly", false);
        $("#prenom").prop("readonly", false);
        $("#email").prop("readonly", false);
        $("#tel").prop("readonly", false);
        $("#birthday").prop("readonly", false);
        $("#IdAd").hide();
        $("#IdLabel").hide();
        $("#PassLabel").show();
        $("#pass").show();
        $("#BtnAjout").show();
        $("#BtnUpdate").hide();
        $("#nv").show();
        $("#md").hide();
        $("#aff").hide();
        $('#nom').val('');
        $('#prenom').val('');
        $('#email').val('');
        $('#tel').val('');
        $('#birthday').val('');
    });

    $('#BtnAjout').on('click', function() {
        let nom = $("#nom").val().trim();
        let prenom = $("#prenom").val().trim();
        let email = $("#email").val().trim();
        let tel = $("#tel").val().trim();
        let date = $("#birthday").val().trim();
        let pass =$("#pass").val().trim();
        $.ajax({
            url: "ModeleAdherant.php",
            type: "post",
            data: {
                request: 3,
                nom: nom,
                prenom: prenom,
                email: email,
                tel: tel,
                date: date,
                pass:pass,
            },
            dataType: "json",
            success: function(response) {
                if(response.status == 1) {
                    alert(response.message);
                    // Fermer modal
                    $('#modal-info').modal('toggle');
                    // Recharger DataTable
                    AdherDataTable.ajax.reload();
                } else {
                    alert(response.message);
                }
            }
        });
    });

    // Modifier
    $('#example1').on('click','.updateUser',function() {
        let id = $(this).data('id');
        $("#IdAd").prop("readonly", true);
        $("#nom").prop("readonly", false);
        $("#prenom").prop("readonly", false);
        $("#email").prop("readonly", false);
        $("#tel").prop("readonly", false);
        $("#birthday").prop("readonly", false);
        $("#BtnAjout").hide();
        $("#BtnUpdate").show();
        $("#IdAd").hide();
        $("#IdLabel").hide();
        $("#nv").hide();
        $("#md").show();
        $("#aff").hide();
        $("#PassLabel").hide();
        $("#pass").hide();
        $.ajax({
            url: "ModeleAdherant.php",
            type: 'post',
            data: {request: 4, id: id},
            dataType: 'json',
            success: function(response) {
                if(response.status == 1) {
                    $("#IdAd").val(response.data.IdAdherant);
                    $("#nom").val(response.data.NomAdherant);
                    $("#prenom").val(response.data.PrenomAdherant);
                    $("#email").val(response.data.EmailAdherant);
                    $("#tel").val(response.data.Telephone);
                    $("#birthday").val(response.data.Date_de_naissance);
                } else {
                    alert("Id Invalid");
                }
            }
        });
    });

    // update Enregistrement
    $('#BtnUpdate').on('click', function() {
        let id = $("#IdAd").val().trim();
        let nom = $("#nom").val().trim();
        let prenom = $("#prenom").val().trim();
        let email = $("#email").val().trim();
        let tel = $("#tel").val().trim();
        let date = $("#birthday").val().trim();
        $.ajax({
            url: "ModeleAdherant.php",
            type: 'post',
            data: {request: 5, id: id, nom: nom, prenom: prenom, email: email, tel: tel, date: date},
            dataType: 'json',
            success: function(response) {
                if(response.status == 1) {
                    alert(response.message);
                    // Fermer modal
                    $('#modal-info').modal('toggle');
                    // Recharger DataTable
                    AdherDataTable.ajax.reload();
                } else {
                    alert(response.message);
                }
            }
        });
    });
});

