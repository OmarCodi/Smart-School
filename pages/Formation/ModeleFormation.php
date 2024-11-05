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
    $resultat = mysqli_query($con, "SELECT * FROM `formation` F INNER JOIN etudiant E ON E.Id_Etd=F.Id_Etd  INNER JOIN modules M ON F.Id_Mod = M.Id_Mod");
     ## $row stock la réponse de MYSQL

    ## déclaration variable data sous format tableau
    $data = array();
    while ($row = mysqli_fetch_assoc($resultat)) {

        // Update Button
        $updateButton = "<button class='btn btn-sm btn-primary updateUser' data-id='".$row['Id_Formation']."' data-toggle='modal' data-target='#modal-info' >Update</button>";
        // Delete Button
        $deleteButton = "<button class='btn btn-sm btn-danger deleteUser' data-id='".$row['Id_Formation']."'>Annuler</button>";
        // View Button
          $viewButton = "<button class='btn btn-sm btn-success viewUser' data-id='".$row['Id_Formation']."' data-toggle='modal' data-target='#modal-info' >View</button>";

        $action = $updateButton." ".$deleteButton." ".$viewButton;

        $data[] = array(
                "Id_Formation" => $row['Id_Formation'],
                "Nom_Etd" => $row['Nom_Etd']." ".$row['Prenom_Etd'],
                "DesignationMod" => $row['DesignationMod'],
                "Date_Inscription" => date("d-m-Y",strtotime($row['Date_Inscription'])),
                "VolumeHoraireModul" => $row['VolumeHoraireModul'],
                "Prix_Formation" => $row['Prix_Formation'],
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
  $record = mysqli_query($con,"SELECT * FROM `formation` WHERE `Id_Formation`=".$id);
          if(mysqli_num_rows($record) > 0){

                  mysqli_query($con,"DELETE FROM `formation` WHERE `Id_Formation`=".$id);
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
  $etd=$_POST['etd'];
  $module=$_POST['module'];
  $Date=$_POST['Date'];
  $Volume_H=$_POST['Volume_H'];
  $Prix=$_POST['Prix'];
  if( $etd!= '' &&  $module != '' && $Date!= '' && $Volume_H!= '' && $Prix!= ''){

    mysqli_query($con, "INSERT INTO `formation` VALUES (NULL, '$module', '$etd', '$Date', '$Volume_H', '$Prix')");



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
    $record = mysqli_query($con,"SELECT * FROM `formation` F INNER JOIN etudiant E ON E.Id_Etd=F.Id_Etd  INNER JOIN modules M ON F.Id_Mod = M.Id_Mod WHERE Id_Formation =".$id);
    $response = array();
    if(mysqli_num_rows($record) > 0){
        $row = mysqli_fetch_assoc($record);
        $response = array(
          "Id_Formation" => $row['Id_Formation'],
          "Nom_Etd" => $row['Nom_Etd']." ".$row['Prenom_Etd'],
          "DesignationMod" => $row['DesignationMod'],
          "Date_Inscription" => $row['Date_Inscription'],
          "VolumeHoraireModul" => $row['VolumeHoraireModul'],
          "Prix_Formation" => $row['Prix_Formation'],
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
  $etd=$_POST['etd'];
  $module=$_POST['module'];
  $Date=$_POST['Date'];
  $Volume_H=$_POST['Volume_H'];
  $Prix=$_POST['Prix'];
  if( $etd!= '' &&  $module != '' && $Date!= '' && $Volume_H!= '' && $Prix!= ''){
      mysqli_query($con,"UPDATE `formation` SET
      `Id_Mod`='".$module."',
      `Id_Etd`='".$etd."',
      `Date_Inscription`='".$Date."',
      `VolumeHoraireModul`='".$Volume_H."',
      `Prix_Formation`='".$Prix."'
      WHERE `Id_Formation`=".$id);
      echo json_encode( array("status" => 1,"message" => "Enregistrement est mise à jour..") );
      exit;
  }
  else{
      echo json_encode( array("status" => 0,"message" => "Merci de compléter tous les champs.") );
      exit;
  }

}

//SELECT


if ($request==7){
  $resultat = mysqli_query($con, "SELECT `Id_Etd`,`Nom_Etd`,`Prenom_Etd` FROM `etudiant`");
  $response=array();
  while($row=mysqli_fetch_array($resultat)){
      $response[]=array(
         "Id_Etd"=>$row['Id_Etd'],
         "Nom"=>$row['Nom_Etd']." ".$row['Prenom_Etd'],
      );

  }
  echo json_encode($response);


}

if ($request==8){
  $resultat = mysqli_query($con, "SELECT `Id_Mod`,`DesignationMod` FROM `modules`");
  $response=array();
  while($row=mysqli_fetch_array($resultat)){
      $response[]=array(
         "Id_Mod"=>$row['Id_Mod'],
         "Nom"=>$row['DesignationMod'],
      );

  }
  echo json_encode($response);


}
