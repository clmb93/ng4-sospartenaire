import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  isCo:boolean=false; //Variable de connexion de type booleen , par défaut vaut faux
  titre:string = 'sos partenaire';  //Titre de l'application
}
