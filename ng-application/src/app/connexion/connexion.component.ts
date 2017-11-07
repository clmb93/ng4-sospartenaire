import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { ConnexionAttempt} from './ConnexionAttempt';
import { ConnectService } from './../connect.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private serviceConnect:ConnectService) { }


  @Output() connexionEtablie:EventEmitter<any> = new EventEmitter();

  heightWindows:number = 0;
  connexionAttempt:ConnexionAttempt = new ConnexionAttempt("","");
  logVerif:boolean = true;
  passwordVerif:boolean = true;
  logInfo:string = "";
  mdpInfo:string = "";
  infoConnexion:string = "";
  connexionEncour:boolean = false;
  serveurResponse:string="";

  private verificationForm(){ //Fonction de verification du formulaire et d'envoie du form avec récupération de la réponse du serveur
    this.verifLog();
    this.verifPassword();
    if(this.logVerif==true && this.passwordVerif == true){
        this.infoConnexion = "Tentative de connexion en cours";
        this.connexionEncour = true;
        setTimeout(()=>{
            this.infoConnexion = "La connexion est anormalement longue";
        },10000);
        this.serviceConnect.ConnexionEtablishingAttempt(this.connexionAttempt)
        .map(data => data.json())
        .subscribe(data => {
            this.connexionEncour = false;
            this.serveurResponse = data[1];
            switch(this.serveurResponse){

              case "Login inconnu" :
                this.logInfo = "Login iconnu";
                this.logVerif = false;
              break;

              case "Mot de passe inconnu" :
                this.mdpInfo = "Mot de passe inconnu";
                this.passwordVerif = false;
              break;

              case "Connexion reussie" :
                let id_user = data[2];
                this.connexionEtablie.emit({id_user : id_user});
              break;

            }

        });
    }

  }

  private verifLog(){     // function de verif du login
    if(this.connexionAttempt.getLog().length===0){
        this.logVerif = false;
        this.logInfo = "Veuillez renseigner votre login";
    }else {
      this.logVerif = true;
      this.logInfo = "";
    }
  }
  private verifPassword(){    //fonction de verif du mot de passe
    if(this.connexionAttempt.getPassword().length===0){
        this.passwordVerif = false;
          this.mdpInfo = "Veuillez renseigner votre mot de passe";
    }else {
      this.passwordVerif = true;
      this.mdpInfo = "";
    }
  }

  private RedirectToInscription(){


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
