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
    $resultat = mysqli_query($con, "SELECT * FROM `reserver` R INNER JOIN formation F ON R.	Id_Formation=F.Id_Formation INNER JOIN Modules M ON M.Id_Mod=F.Id_Mod  INNER JOIN prof P ON R.Id_prof=P.Id_prof INNER JOIN etudiant E ON E.Id_Etd=R.Id_Etd INNER JOIN salle_formation S ON R.Id_Sal=S.Id_Sal");
     ## $row stock la réponse de MYSQL

    ## déclaration variable data sous format tableau
    $data = array();
    while ($row = mysqli_fetch_assoc($resultat)) {

        // Update Button
        $updateButton = "<button class='btn btn-sm btn-primary updateUser' data-id='".$row['ID_res']."' data-toggle='modal' data-target='#modal-info' >Update</button>";
        // Delete Button
        $deleteButton = "<button class='btn btn-sm btn-danger deleteUser' data-id='".$row['ID_res']."'>Annuler</button>";
        // View Button
          $viewButton = "<button class='btn btn-sm btn-success viewUser' data-id='".$row['ID_res']."' data-toggle='modal' data-target='#modal-info' >View</button>";

        $action = $updateButton." ".$deleteButton." ".$viewButton;

        $data[] = array(
                "ID_res" => $row['ID_res'],
                "Nom_prof" => $row['Nom_prof']." ".$row['prenom_prof'],
                "Nom_Etd" => $row['Nom_Etd']." ".$row['Prenom_Etd'],
                "Modules" => $row['DesignationMod'],
                "Designation_Sal" => $row['Designation_Sal'],
                "Date_Res" => date("d-m-Y",strtotime($row['Date_Res'])),
                "Heure_Debut_Res" => $row['Heure_Debut_Res'],
                "Heure_Fin_Res" => $row['Heure_Fin_Res'],
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
  $record = mysqli_query($con,"SELECT * FROM `reserver` WHERE `ID_res`=".$id);
          if(mysqli_num_rows($record) > 0){

                  mysqli_query($con,"DELETE FROM `reserver` WHERE `ID_res`=".$id);
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
  $prof=$_POST['prof'];
  $etd=$_POST['nom'];
  $formation=$_POST['formation'];
  $salle=$_POST['prenom'];
  $date=$_POST['email'];
  $heure_db=$_POST['login'];
  $heure_fin=$_POST['password'];
  if( $prof!= '' &&  $etd != '' &&  $formation != '' && $salle!= '' && $date!= '' && $heure_db!= '' && $heure_fin!= ''){

    mysqli_query($con, "INSERT INTO `reserver` VALUES (NULL,'$prof', '$etd', '$formation', '$salle', '$date', '$heure_db', '$heure_fin')");

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
    $record = mysqli_query($con,"SELECT * FROM `reserver` R INNER JOIN formation F ON R.	Id_Formation=F.Id_Formation INNER JOIN Modules M ON M.Id_Mod=F.Id_Mod  INNER JOIN prof P ON R.Id_prof=P.Id_prof INNER JOIN etudiant E ON E.Id_Etd=R.Id_Etd INNER JOIN salle_formation S ON R.Id_Sal=S.Id_Sal WHERE R.ID_res =".$id);
    $response = array();
    if(mysqli_num_rows($record) > 0){
        $row = mysqli_fetch_assoc($record);
        $response = array(
          "ID_res" => $row['ID_res'],
          "Nom_prof" => $row['Nom_prof']." ".$row['prenom_prof'],
          "Nom_Etd" => $row['Nom_Etd']." ".$row['Prenom_Etd'],
          "Modules" => $row['DesignationMod'],
          "Designation_Sal" => $row['Designation_Sal'],
          "Date_Res" => $row['Date_Res'],
          "Heure_Debut_Res" => $row['Heure_Debut_Res'],
          "Heure_Fin_Res" => $row['Heure_Fin_Res'],
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
  $prof=$_POST['prof'];
  $etd=$_POST['nom'];
  $formation=$_POST['formation'];
  $salle=$_POST['prenom'];
  $date=$_POST['email'];
  $heure_db=$_POST['login'];
  $heure_fin=$_POST['password'];
  if( $prof!= '' &&  $etd != '' &&  $formation != '' && $salle!= '' && $date!= '' && $heure_db!= '' && $heure_fin!= '' ){
      mysqli_query($con,"UPDATE `reserver` SET
      `Id_prof`='".$prof."',
      `Id_Etd`='".$etd."',
      `Id_Formation`='".$formation."',
      `Id_Sal`='".$salle."',
      `Date_Res`='".$date."',
      `Heure_Debut_Res`='".$heure_db."',
      `Heure_Fin_Res`='".$heure_fin."'
      WHERE `ID_res`=".$id);
      echo json_encode( array("status" => 1,"message" => "Enregistrement est mise à jour..") );
      exit;
  }
  else{
      echo json_encode( array("status" => 0,"message" => "Merci de compléter tous les champs.") );
      exit;
  }

}

//SELECT
if ($request==6){
  $resultat = mysqli_query($con, "SELECT `Id_prof`,`Nom_prof`,`prenom_prof` FROM `prof`");
  $response=array();
  while($row=mysqli_fetch_array($resultat)){
      $response[]=array(
         "Id_prof"=>$row['Id_prof'],
         "Nom"=>$row['Nom_prof']." ".$row['prenom_prof'],
      );

  }
  echo json_encode($response);


}

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
  $resultat = mysqli_query($con, "SELECT `Id_Sal`,`Designation_Sal` FROM `salle_formation`");
  $response=array();
  while($row=mysqli_fetch_array($resultat)){
      $response[]=array(
          "Id_Sal"=>$row['Id_Sal'],
          "Nom"=>$row['Designation_Sal'],
      );

  }
  echo json_encode($response);

}


  if ($request==10){
    $resultat = mysqli_query($con, "SELECT `Id_Formation`,`DesignationMod` From formation F INNER JOIN Modules M ON M.Id_Mod = F.Id_Mod");
    $response=array();
    while($row=mysqli_fetch_array($resultat)){
        $response[]=array(
            "Id_Formation"=>$row['Id_Formation'],
            "Mod"=>$row['DesignationMod'],
        );

    }
    echo json_encode($response);

  }
