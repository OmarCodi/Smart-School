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
    $resultat = mysqli_query($con, "SELECT * FROM `users`");
     ## $row stock la réponse de MYSQL

    ## déclaration variable data sous format tableau
    $data = array();
    while ($row = mysqli_fetch_assoc($resultat)) {

        // Update Button
        $updateButton = "<button class='btn btn-sm btn-primary updateUser' data-id='".$row['id_us']."' data-toggle='modal' data-target='#modal-info' >Update</button>";
        // Delete Button
        $deleteButton = "<button class='btn btn-sm btn-danger deleteUser' data-id='".$row['id_us']."'>Delete</button>";
        // View Button
          $viewButton = "<button class='btn btn-sm btn-success viewUser' data-id='".$row['id_us']."' data-toggle='modal' data-target='#modal-info' >View</button>";

        $action = $updateButton." ".$deleteButton." ".$viewButton;

        $data[] = array(

                "IdUser" => $row['id_us'],
                "NomUser" => $row['nom_us'],
                "PrenomUser" => $row['prenom_us'],
                "EmailUser" => $row['email_us'],
                "LoginUser" => $row['login_us'],
                "MotPassUser" => $row['motpass_us'],
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
  $record = mysqli_query($con,"SELECT * FROM `users` WHERE `id_us`=".$id);
          if(mysqli_num_rows($record) > 0){

                  mysqli_query($con,"DELETE FROM `users` WHERE `id_us`=".$id);
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
  $login=$_POST['login'];
  $password=$_POST['password'];

  if( $nom!='' && $prenom != '' && $login != '' && $email != '' && $password !='' ){

      mysqli_query($con,"INSERT INTO `users` VALUES (NULL,'".$nom."','".$prenom."','".$email."','".$login."','".$password."')");

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
    $record = mysqli_query($con,"SELECT * FROM `users` WHERE `id_us`=".$id);
    $response = array();
    if(mysqli_num_rows($record) > 0){
        $row = mysqli_fetch_assoc($record);
        $response = array(
          "IdUser" => $row['id_us'],
          "NomUser" => $row['nom_us'],
          "PrenomUser" => $row['prenom_us'],
          "EmailUser" => $row['email_us'],
          "LoginUser" => $row['login_us'],
          "MotPassUser" => $row['motpass_us'],

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
  $login=$_POST['login'];
  $password=$_POST['password'];
  if( $nom!='' && $prenom != '' && $login != '' && $email != '' && $password != ''){
      mysqli_query($con,"UPDATE `users` SET
      `nom_us`='".$nom."',
      `prenom_us`='".$prenom."',
      `email_us`='".$email."',
      `login_us`='".$login."',
      `motpass_us`='".$password."'
      WHERE `id_us`=".$id);
      echo json_encode( array("status" => 1,"message" => "Enregistrement est mise à jour..") );
      exit;
  }
  else{
      echo json_encode( array("status" => 0,"message" => "Merci de compléter tous les champs.") );
      exit;
  }


}
