<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

require __DIR__.'/../DataBase_Operations/DataBase.php';
/**
 * Description of App
 *
 * @author j.ladisa
 */
class App {
   
     protected static $db;
     
     public static function getDb(){ 
         if(self::$db === null){
             self::$db = new DataBase("localhost", "sospartenaire", "root", "");
         }
         
         return self::$db;
     }
     
     public static function getCurrentUserById($id){
         $data = self::getDb()->query(
                 "SELECT * FROM user WHERE id_user = ?",[$id]);
         return $data;
     }
     
}