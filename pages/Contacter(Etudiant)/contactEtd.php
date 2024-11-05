<?php
// Etablir la Connexion
include '../../pages/inc/ConnexionMySql.inc.php';
$request = 1;
if(isset($_POST['request'])){
    $request = $_POST['request'];
}

// DataTable data
if($request == 1){

  ## Récupérer des enregistrements
  $resultat = mysqli_query($con, "SELECT * FROM `contactetd`");
   ## $row stock la réponse de MYSQL

  ## déclaration variable data sous format tableau
  $data = array();
  while ($row = mysqli_fetch_assoc($resultat)) {

      // Delete Button
      $deleteButton = "<button class='btn  btn-danger deleteUser' data-id='".$row['Id_contact']."'>Traité</button>";


      $data[] = array(

              "IdAdherant" => $row['Id_contact'],
              "NomAdherant" => $row['Nom']." ".$row['Prenom'],
              "EmailAdherant" => $row['Email'],
              "Telephone" => $row['Telephone'],
              "Methode" => $row['Methode'],
                "Objet" => $row['Objet'],
                "Votre_Message" => $row['Votre_Message'],
              "action" => $deleteButton
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
$record = mysqli_query($con,"SELECT * FROM `contactetd` WHERE `Id_contact`like '".$id."'");
        if(mysqli_num_rows($record) > 0){

                mysqli_query($con,"DELETE FROM `contactetd` WHERE `Id_contact` like '".$id."'");
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
  $choix=$_POST['choix'];
  $objet=$_POST['objet'];
  $text=$_POST['text'];

  if(  $choix != '' && $objet != '' && $text != '' ){

      mysqli_query($con,"INSERT INTO `contactetd` VALUES (NULL,'".$nom."','".$prenom."','".$email."','".$tel."','".$choix."','".$objet."','".$text."')");

      echo json_encode( array("status" => 1,"message" => "Demande envoyer avec Succée.") );
      exit;
  }
  else{
      echo json_encode( array("status" => 0,"message" => "Merci de compléter tous les champs.") );
      exit;
  }
}
