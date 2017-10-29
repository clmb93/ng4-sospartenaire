export class User{

  protected id:number;
  protected nom:string;
  protected prenom:string;
  protected adresse:string;
  protected ville:string;
  protected cp:number;
  protected pays:string;
  protected tel:string;
  protected email:string;
  protected date_naissance:string;
  protected log:string;

  public constructor(
    id:number,
    nom:string,
    prenom:string,
    adresse:string,
    ville:string,
    cp:number,
    pays:string,
    tel:string,
    email:string,
    date_naissance:string,
    log:string){

      this.id = id;
      this.nom = nom;
      this.prenom = prenom;
      this.adresse = adresse;
      this.ville = ville;
      this.cp = cp;
      this.pays = pays;
      this.tel = tel;
      this.email = email;
      this.date_naissance = date_naissance;
      this.log = log;

    }


    public getId():number{
      return this.id;

    }

    public setId(id:number){
       this.id = id;

    }

    public getNom():string{
      return this.nom;

    }

    public setNom(nom:string){
      this.nom = nom;
    }

    public getPrenom():string{
      return this.prenom;

    }

    public setPrenom(prenom:string){
      this.prenom = prenom;
    }

    public getAdresse():string{
      return this.adresse;

    }

    public setAdresse(adresse:string){
      this.adresse = adresse;
    }

    public getVille():string{
      return this.ville;

    }

    public setVille(ville:string){
      this.ville = ville;
    }

    public getTel():string{
      return this.tel;

    }

    public setTel(tel:string){
      this.tel = tel;
    }


    public getEmail():string{
        return this.email;

    }

  public setEmail(email:string){
        this.email = email;
  }


  public getDateNaissance():string{
      return this.date_naissance;
}

public setDateNaissance(date_naissance:string){
    this.date_naissance = date_naissance;
}

public getLog():string{
    return this.log;
}

public setLog(log:string){
  this.log = log;
}







}
