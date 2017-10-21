import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConnexionAttempt} from './connexion/ConnexionAttempt';


const url:string ="http://127.0.0.1/angular/ng-application/src/app/php/Connexion/test-connect.php";
@Injectable()
export class ConnectService {

  constructor(private http:Http) { }

  public ConnexionEtablishingAttempt(connexionInfo):Observable<any>{  //post method
    let bodyString = JSON.stringify(connexionInfo); //On transforme les données en JSON
    let headers = new Headers({'Content-Type':'application/json'}); //On définit le header
    let options = new RequestOptions({headers:headers}); //On crée les options à partir du header
    return this.http.post(url, bodyString); //On retourne la réponse du serveur

  }

}
