import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConnexionAttempt} from './connexion/ConnexionAttempt';


const url:string ="http://127.0.0.1/angular/ng-application/src/app/php/Connexion/test-connect.php";
@Injectable()
export class ConnectService {

  constructor(private http:Http) { }

  public ConnexionEtablishingAttempt(connexionInfo):Observable<any>{  //post method
    return this.http.get(url+"?log="+connexionInfo.getLog()+"&mdp="+connexionInfo.getPassword());

  }

}
