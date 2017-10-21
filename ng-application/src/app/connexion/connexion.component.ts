import { Component, OnInit } from '@angular/core';
import { ConnexionAttempt} from './ConnexionAttempt';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor() { }

  heightWindows:number = 0;
  connexionAttempt:ConnexionAttempt = new ConnexionAttempt("","");
  logVerif:boolean = true;
  passwordVerif:boolean = true;

  private verificationForm(){ //Fonction de verification du formulaire
    this.verifLog();
    this.verifPassword();

  }

  private verifLog(){     // function de verif du login
    if(this.connexionAttempt.getLog().length===0){
        this.logVerif = false;
    }else this.logVerif = true;
  }
  private verifPassword(){    //fonction de verif du mot de passe
    if(this.connexionAttempt.getPassword().length===0){
        this.passwordVerif = false;
    }else this.passwordVerif = true;
  }

  ngOnInit() {

    this.heightWindows = window.innerHeight;
    /* Lors du resize de la fenetre */
    window.onresize = () =>
   {
      this.heightWindows = window.innerHeight;
   };

  }
}
