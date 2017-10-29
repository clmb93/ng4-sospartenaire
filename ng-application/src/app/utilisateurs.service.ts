import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConnexionAttempt} from './connexion/ConnexionAttempt';
import {User} from './user/user';

const url:string ="http://127.0.0.1/angular/ng-application/src/app/php/userOperations/getUser.php";
@Injectable()
export class UtilisateursService{

private utilisateur:User;

constructor(private http:Http) { }

public getCurrentUser(id:number){ return this.http.get(url+"?id="+id);  }


}
