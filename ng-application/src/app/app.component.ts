import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  isCo:boolean=false; //Variable de connexion de type booleen , par défaut vaut faux
  titre:string = 'sos partenaire';  //Titre de l'application
  id_user:number;

  connexionEtablie($event){
    this.isCo = true;
    this.id_user = $event.id_user;
  }
}
