<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 * Description of DataBase
 *
 * @author j.ladisa
 */
class DataBase {
    
    protected   $user;
    protected   $user_mdp;
    protected   $database;
    protected   $host;
    protected   $pdo;
    
    public function __construct($host,$databse,$user,$user_mdp) {
        $this->host        = $host;
        $this->database    = $databse;
        $this->user        = $user;
        $this->user_mdp    = $user_mdp;
    }
    
    protected function getPdo(){ 
        
        if($this->pdo === null){
            $pdo = new PDO('mysql:host='.$this->host.';dbname='.$this->database, $this->user, $this->user_mdp);
            $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            $this->pdo = $pdo;
        }
        return $this->pdo;
    }
    
    public function Query($query,$parameters) {         //function requêtes préparés pour éviter les injections SQL
        
        try{
            $req = $this->getPdo()->prepare($query);
            $req->execute($parameters);
            $data = $req->fetchAll();
            return $data;  
        } catch (Exception $ex) {
            echo "La requête n'a pu être effectué .".$ex->getMessage();
        }
  
    }
    
    public function ExecuteQuery($query){   //executer des requêtes de types insert/delete ou update
        
        try{
            $this->getPdo()->exec($query);
        } catch (Exception $ex) {
             echo "La requête n'a pu être effectué .".$ex->getMessage();
        }

    }
}
