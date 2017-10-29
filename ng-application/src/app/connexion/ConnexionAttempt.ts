export class ConnexionAttempt{

  private log:string ;
  private  password:string;

  constructor(log:string,password:string){
    this.log = log;
    this.password = password;
  }


  /* Getters */

  public getPassword():string{
    return this.password;
  }

  public getLog():string{
    return this.log;
  }
}
