<?php

include '../inc/ConnexionMySql.inc.php';

$request = 1;
if(isset($_POST['request'])){
    $request = $_POST['request'];
}

 if($request == 1){
    $requette= "SELECT * From `modules` ";
    $resultat = mysqli_query($con, $requette);
    $data = array();
    while ($row = mysqli_fetch_assoc($resultat)) {


     // Update Button
     $updateButton = "<button class='btn btn-sm btn-primary updateUser' data-id='".$row['Id_Mod']."' data-toggle='modal' data-target='#modal-info' >Update</button>";
     // Delete Button
     $deleteButton = "<button class='btn btn-sm btn-danger deleteUser' data-id='".$row['Id_Mod']."'>Delete</button>";
     // View Button
       $viewButton = "<button class='btn btn-sm btn-success viewUser' data-id='".$row['Id_Mod']."' data-toggle='modal' data-target='#modal-info' >View</button>";

       $action = $updateButton." ".$deleteButton." ".$viewButton;
    $data[] = array(

        "IdFormation" => $row['Id_Mod'],
        "Formation" => $row['DesignationMod'],
        "action" => $action

    );
    }

    $response =array(
        "echo" => 1,
        "totalrecords" => count($data),
        "totaldisplayrecords" => count($data),
        "data" => $data
    );

    echo json_encode($response);
    exit;

 }

 if($request == 2){

    if(isset($_POST['id'])){
        $id = mysqli_escape_string($con,$_POST['id']);
    }


    $record = mysqli_query($con,"SELECT * FROM `modules` WHERE `Id_Mod` =".$id);
    if(mysqli_num_rows($record) > 0){

        mysqli_query($con,"DELETE FROM `modules` WHERE `Id_Mod` =".$id);

        echo 1;
        exit;
    }else{
        echo 0;
        exit;
    }
}

if($request == 4){
    if(isset($_POST['id'])){
        $id = mysqli_escape_string($con,$_POST['id']);
    }
    $record = mysqli_query($con,"SELECT * FROM `modules` WHERE `Id_Mod` =".$id);
    $response = array();
    if(mysqli_num_rows($record) > 0){
        $row = mysqli_fetch_assoc($record);
        $response = array(
          "IdFormation" => $row['Id_Mod'],
          "Formation" => $row['DesignationMod'],

        );
        echo json_encode( array("status" => 1,"data" => $response) );
        exit;
    }else{
        echo json_encode( array("status" => 0) );
        exit;
    }
}

if ($request== 3) {
    $formation=$_POST['formation'];


    if( $formation != '' ){

        mysqli_query($con,"INSERT INTO `modules`
         VALUES (NULL,'".$formation."')");

        echo json_encode( array("status" => 1,"message" => "Enregistrement ajouter avec Succée.") );
        exit;
    }
    else{
        echo json_encode( array("status" => 0,"message" => "Merci de compléter tous les champs.") );
        exit;
    }
}

if ($request==5) {
  $id = 0;
  if(isset($_POST['id'])){
      $id = mysqli_escape_string($con,$_POST['id']);
  }
  $formation=$_POST['formation'];
  if( $formation!='' ){
    mysqli_query($con,"UPDATE `modules` SET
    `DesignationMod`='".$formation."'
    WHERE `Id_Mod`=".$id);
      echo json_encode( array("status" => 1,"message" => "Enregistrement est mise à jour..") );
      exit;
  }
  else{
      echo json_encode( array("status" => 0,"message" => "Merci de compléter tous les champs.") );
      exit;
  }

}
