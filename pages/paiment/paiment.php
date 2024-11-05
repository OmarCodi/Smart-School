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
    $resultat = mysqli_query($con, "SELECT * FROM `paiment` p INNER JOIN etudiant E ON E.Id_Etd=P.Id_Etd INNER JOIN formation F on F.Id_Formation=P.Id_Formation INNER JOIN Modules M ON M.Id_Mod=F.Id_Mod");
     ## $row stock la réponse de MYSQL

    ## déclaration variable data sous format tableau
    $data = array();
    while ($row = mysqli_fetch_assoc($resultat)) {

        // Update Button
        $updateButton = "<button class='btn btn-sm btn-primary updateUser' data-id='".$row['Id_pay']."' data-toggle='modal' data-target='#modal-info' >Update</button>";
        // Delete Button
        $deleteButton = "<button class='btn btn-sm btn-danger deleteUser' data-id='".$row['Id_pay']."'>Annuler</button>";
        // View Button
          $viewButton = "<button class='btn btn-sm btn-success viewUser' data-id='".$row['Id_pay']."' data-toggle='modal' data-target='#modal-info' >View</button>";

        $action = $updateButton." ".$deleteButton." ".$viewButton;

        $data[] = array(
                "Id_pay" => $row['Id_pay'],
                "Nom_Etd" => $row['Nom_Etd']." ".$row['Prenom_Etd'],
                "Modules" => $row['DesignationMod'],
                "date_pay" => date("d-m-Y",strtotime($row['date_pay'])),
                "montant_pay" => $row['montant_pay'],
                "montant_rest" => $row['montant_rest'],
                "mode_pay" => $row['mode_pay'],
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
  $record = mysqli_query($con,"SELECT * FROM `paiment` WHERE `Id_pay`=".$id);
          if(mysqli_num_rows($record) > 0){

                  mysqli_query($con,"DELETE FROM `paiment` WHERE `Id_pay`=".$id);
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
  $formation=$_POST['formation'];
  $date=$_POST['date'];
  $Montant=$_POST['Montant'];
  $MontantR=$_POST['MontantR'];
  $mode=$_POST['mode'];
  if( $etd!= '' &&   $formation != '' && $date!= '' && $Montant!= '' && $MontantR!= '' && $mode!= ''){

    mysqli_query($con, "INSERT INTO `paiment` VALUES (NULL,'$etd', '$formation', '$date', '$Montant', '$MontantR', '$mode')");

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
    $record = mysqli_query($con,"SELECT * FROM `paiment` p INNER JOIN etudiant E ON E.Id_Etd=P.Id_Etd INNER JOIN formation F on F.Id_Formation=P.Id_Formation INNER JOIN Modules M ON M.Id_Mod=F.Id_Mod WHERE Id_pay =".$id);
    $response = array();
    if(mysqli_num_rows($record) > 0){
        $row = mysqli_fetch_assoc($record);
        $response = array(
          "Id_pay" => $row['Id_pay'],
          "Nom_Etd" => $row['Nom_Etd']." ".$row['Prenom_Etd'],
          "Modules" => $row['DesignationMod'],
          "date_pay" => $row['date_pay'],
          "montant_pay" => $row['montant_pay'],
          "montant_rest" => $row['montant_rest'],
          "mode_pay" => $row['mode_pay'],
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
  $formation=$_POST['formation'];
  $date=$_POST['date'];
  $Montant=$_POST['Montant'];
  $MontantR=$_POST['MontantR'];
  $mode=$_POST['mode'];
  if( $etd!= '' &&   $formation != '' && $date!= '' && $Montant!= '' && $MontantR!= '' && $mode!= '' ){
      mysqli_query($con,"UPDATE `paimment` SET
      `Id_Etd`='".$etd."',
      `Id_Formation`='".$formation."',
      `date_pay`='".$date."',
      `montant_pay`='".$Montant."',
      `montant_rest`='".$MontantR."',
      `mode_pay`='".$mode."'
      WHERE `Id_pay`=".$id);
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
  $resultat = mysqli_query($con, "SELECT * FROM `etudiant` E INNER JOIN formation F on E.Id_Etd=F.Id_Etd Where E.Id_Etd=F.Id_Etd");
  $response=array();
  while($row=mysqli_fetch_array($resultat)){
      $response[]=array(
            "Id_Etd"=>$row['Id_Etd'],
            "Nom"=>$row['Nom_Etd']." ".$row['Prenom_Etd'],
      );

  }
  echo json_encode($response);


}


  if ($request==10){
    $resultat = mysqli_query($con, "SELECT `Id_Formation`,`DesignationMod` From formation F INNER JOIN Modules M ON M.Id_Mod = F.Id_Mod ");
    $response=array();
    while($row=mysqli_fetch_array($resultat)){
        $response[]=array(
            "Id_Formation"=>$row['Id_Formation'],
            "Mod"=>$row['DesignationMod'],
        );

    }
    echo json_encode($response);

  }
