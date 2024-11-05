<?php
// Etablir la Connexion
include 'ConnexionMySql.inc.php';

$request = 1;
if(isset($_POST['request'])){
    $request = $_POST['request'];
}
// DataTable data
if($request == 1){
    
    ## Récupérer des enregistrements
    $requette= "SELECT * FROM `t_etudiant`"; 
    $resultat = mysqli_query($con, $requette);
    $data = array();

    while ($row = mysqli_fetch_assoc($resultat)) {

        // Update Button
        $updateButton = "<button class='btn btn-sm btn-primary updateUser' data-id='".$row['Num_etd']."' data-bs-toggle='modal' data-bs-target='#viewModal' >Update</button>";

        // Delete Button
        $deleteButton = "<button class='btn btn-sm btn-danger deleteUser' data-id='".$row['Num_etd']."'>Delete</button>";
        // View Button
          $viewButton = "<button class='btn btn-sm btn-success viewUser' data-id='".$row['Num_etd']."' data-bs-toggle='modal' data-bs-target='#viewModal' >View</button>";

        
        $action = $updateButton." ".$deleteButton." ".$viewButton;

        $data[] = array(

                "Num_etd" => $row['Num_etd'],
                "Nom" => $row['Nom'],
                "Prenom" => $row['Prenom'],
                "Telephone" => $row['Telephone'],
                "Email" => $row['Email'],
                "action" => $action
            );
    }

    ## Response
    $response =array(
        "echo" => 1,
        "totalrecords" => count($data),
        "totaldisplayrecords" => count($data),
        "data" => $data
    );

    echo json_encode($response);
    exit;
}
// Supprimer User
if($request == 2){
    $id = 0;

    if(isset($_POST['id'])){
        $id = mysqli_escape_string($con,$_POST['id']);
    }

    // verifier id
    $record = mysqli_query($con,"SELECT * FROM `t_etudiant` WHERE `Num_etd`=".$id);
    if(mysqli_num_rows($record) > 0){

        mysqli_query($con,"DELETE FROM `t_etudiant` WHERE `Num_etd`=".$id);

        echo 1;
        exit;
    }else{
        echo 0;
        exit;
    }
}
// View User
if ($request==3) {
    $id = 0;
    if(isset($_POST['id'])){
        $id = mysqli_escape_string($con,$_POST['id']);
    }
    $record = mysqli_query($con,"SELECT * FROM `t_etudiant` WHERE `Num_etd`=".$id);
    $response = array();
    if(mysqli_num_rows($record) > 0){
        $row = mysqli_fetch_assoc($record);
        $response = array(
            "Num_etd" => $row['Num_etd'],
            "Nom" => $row['Nom'],
            "Prenom" => $row['Prenom'],
            "Telephone" => $row['Telephone'],
            "Email" => $row['Email'],
        );
        echo json_encode( array("status" => 1,"data" => $response) );
        exit;
    }else{
        echo json_encode( array("status" => 0) );
        exit;
    }
}
// ajouter user
if ($request==4) {
    $nom=$_POST['nom'];
    $prenom=$_POST['prenom'];
    $telephone=$_POST['telephone'];
    $email=$_POST['email'];

    if( $nom!='' && $prenom != '' && $telephone != '' && $email != '' ){

        mysqli_query($con,"INSERT INTO `t_etudiant`(`Num_etd`, `Nom`, `Prenom`, `Telephone`, `Email`) VALUES (NULL,'".$nom."','".$prenom."','".$telephone."','".$email."')");

        echo json_encode( array("status" => 1,"message" => "Enregistrement ajouter avec Succée.") );
        exit;
    }
    else{
        echo json_encode( array("status" => 0,"message" => "Merci de compléter tous les champs.") );
        exit;
    }
}
// update user
if ($request==5) {
    $id = 0;
    if(isset($_POST['id'])){
        $id = mysqli_escape_string($con,$_POST['id']);
    }
    $nom=$_POST['nom'];
    $prenom=$_POST['prenom'];
    $telephone=$_POST['telephone'];
    $email=$_POST['email'];
    if( $nom!='' && $prenom != '' && $telephone != '' && $email != '' ){   
        mysqli_query($con,"UPDATE `t_etudiant` SET 
        `Nom`='".$nom."',
        `Prenom`='".$prenom."',
        `Telephone`='".$telephone."',
        `Email`='".$email."' 
        WHERE `Num_etd`=".$id);
        echo json_encode( array("status" => 1,"message" => "Enregistrement est mise à jour..") );
        exit;
    }
    else{
        echo json_encode( array("status" => 0,"message" => "Merci de compléter tous les champs.") );
        exit;
    }

}