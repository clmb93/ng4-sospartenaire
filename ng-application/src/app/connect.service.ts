import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { ConnexionAttempt} from './connexion/ConnexionAttempt';

const url:string ="php/connexion/test-connect.php";
@Injectable()
export class ConnectService {

  constructor(private http:Http) { }

  ConnexionEtablishingAttempt(connecionInfo:ConnexionAttempt){

  }

}
