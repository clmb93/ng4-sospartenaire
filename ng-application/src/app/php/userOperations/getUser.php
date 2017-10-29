<?php
require __DIR__.'/../Cryptage/Cryptage.php';
require __DIR__.'/../App/App.php';
header("Access-Control-Allow-Origin :*");
header("Access-Control-Allow-Origin :*");
header("Access-Control-Allow-Methods : GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers : Origin, X-Requested-With, Content-Type, Accept, Authorization");

/* Récupération des données envoyées par angular 4 */
$id = -1;
if(isset($_GET['id'])){
$id = $_GET('id');
}
$query = "Select * from user where id_user = ?";
$res = App::getDb()->query($query,array($id)); //requete de corresponance ou non
if($res){
    $data = $res;
}else $data = "Erreur";
echo json_encode($data);


?>
