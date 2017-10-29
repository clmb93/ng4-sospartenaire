import { Component, OnInit , Input} from '@angular/core';
import {UtilisateursService} from '../utilisateurs.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

@Input() idUser:number = 0;

  constructor(private user:UtilisateursService) { }

  ngOnInit() {
    console.log(this.idUser);
      /*this.user.getCurrentUser(this.id)
      .map(data => data.json())
      .subscribe(data => {
        console.log(data);
      });*/
  }


}
