<?php
require __DIR__.'/../Cryptage/Cryptage.php';
require __DIR__.'/../App/App.php';
header("Access-Control-Allow-Origin :*");
header("Access-Control-Allow-Origin :*");
header("Access-Control-Allow-Methods : GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers : Origin, X-Requested-With, Content-Type, Accept, Authorization");

/* Récupération des données envoyées par angular 4 */
$id = 0;
if(isset($_GET['log']) && isset($_GET['mdp'])){
    $log = $_GET['log'];
    $mdp = $_GET['mdp'];
}else{
    $log = "";
    $mdp = "";
}
$message  = "";
$query = "Select * from user where log_user = ?";
$res = App::getDb()->query($query,array($log)); //requete de corresponance ou non
if($res){
    $validPassword = password_verify($mdp, $res[0]['mdp_user']);
    if($validPassword){
        $id = $res[0]['id_user'];
         $message = "Connexion reussie";
        }else $message = "Mot de passe inconnu";
    }else $message = "Login inconnu";
$data = array(
  1 =>$message,
  2=>$id);
echo json_encode($data);


?>
