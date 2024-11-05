<?php
// Etablir la Connexion
include '../inc/ConnexionMySql.inc.php';
$request = 1;
if(isset($_POST['request'])){
    $request = $_POST['request'];
}
// DataTable data
if($request == 1){

    ## Récupérer des enregistrements
    $resultat = mysqli_query($con, "SELECT * FROM `etudiant`");
     ## $row stock la réponse de MYSQL

    ## déclaration variable data sous format tableau
    $data = array();
    while ($row = mysqli_fetch_assoc($resultat)) {

        // Update Button
        $updateButton = "<button class='btn btn-sm btn-primary updateUser' data-id='".$row['Id_Etd']."' data-toggle='modal' data-target='#modal-info' >Update</button>";
        // Delete Button
        $deleteButton = "<button class='btn btn-sm btn-danger deleteUser' data-id='".$row['Id_Etd']."'>Delete</button>";
        // View Button
          $viewButton = "<button class='btn btn-sm btn-success viewUser' data-id='".$row['Id_Etd']."' data-toggle='modal' data-target='#modal-info' >View</button>";

        $action = $updateButton." ".$deleteButton." ".$viewButton;

        $data[] = array(

                "IdAdherant" => $row['Id_Etd'],
                "NomAdherant" => $row['Nom_Etd'],
                "PrenomAdherant" => $row['Prenom_Etd'],
                "EmailAdherant" => $row['Email_Etd'],
                "Telephone" => $row['Tel_Etd'],
                "Date_de_naissance" => date("d-m-Y",strtotime($row['Date_Naiss_Etd'])),
                "action" => $action
            );
    }

    ## Response JSON
    $response =array(
        "echo" => 1,
        "totalrecords" => count($data),
        "totaldisplayrecords" => count($data),
        "data" => $data
    );
    echo json_encode($response);
    exit;
}
// Delete
if($request==2){
  $id = 0;

  if(isset($_POST['id'])){
      $id = mysqli_escape_string($con,$_POST['id']);
  }
  // verifier id
  $record = mysqli_query($con,"SELECT * FROM `etudiant` WHERE `Id_Etd`like '".$id."'");
          if(mysqli_num_rows($record) > 0){

                  mysqli_query($con,"DELETE FROM `etudiant` WHERE `Id_Etd` like '".$id."'");
                  echo 1;
                  exit;
          }
        else
        {
            echo 0;
            exit;
        }

}
if($request==3){
  $nom=$_POST['nom'];
  $prenom=$_POST['prenom'];
  $email=$_POST['email'];
  $tel=$_POST['tel'];
  $date=$_POST['date'];
  $pass=$_POST['pass'];


  if( $nom!='' && $prenom != '' && $email != '' && $tel != '' && $date !='' && $pass !='' ){

      mysqli_query($con,"INSERT INTO `etudiant` VALUES (NULL,'".$nom."','".$prenom."','".$email."','".$tel."','".$date."','".$pass."')");

      echo json_encode( array("status" => 1,"message" => "Enregistrement ajouter avec Succée.") );
      exit;
  }
  else{
      echo json_encode( array("status" => 0,"message" => "Merci de compléter tous les champs.") );
      exit;
  }
}
if($request==4){
  $id = 0;
    if(isset($_POST['id'])){
        $id = mysqli_escape_string($con,$_POST['id']);
    }
    $record = mysqli_query($con,"SELECT * FROM `etudiant` WHERE `Id_Etd`like '".$id."'");
    $response = array();
    if(mysqli_num_rows($record) > 0){
        $row = mysqli_fetch_assoc($record);
        $response = array(
          "IdAdherant" => $row['Id_Etd'],
                "NomAdherant" => $row['Nom_Etd'],
                "PrenomAdherant" => $row['Prenom_Etd'],
                "EmailAdherant" => $row['Email_Etd'],
                "Telephone" => $row['Tel_Etd'],
          "Date_de_naissance" => $row['Date_Naiss_Etd'],
        );
        echo json_encode( array("status" => 1,"data" => $response) );
        exit;
    }else{
        echo json_encode( array("status" => 0) );
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
  $email=$_POST['email'];
  $tel=$_POST['tel'];
  $date=$_POST['date'];
  if( $id!='' && $nom!='' && $prenom != '' && $email != '' && $tel != '' && $date !='' ){
      mysqli_query($con,"UPDATE `etudiant` SET
      `Nom_Etd`='".$nom."',
      `Prenom_Etd`='".$prenom."',
      `Email_Etd`='".$email."',
      `Tel_Etd`='".$tel."',
      `Date_Naiss_Etd`='".$date."'
      WHERE `Id_Etd` like '".$id."'");
      echo json_encode( array("status" => 1,"message" => "Enregistrement est mise à jour..") );
      exit;
  }
  else{
      echo json_encode( array("status" => 0,"message" => "Merci de compléter tous les champs.") );
      exit;
  }

}
