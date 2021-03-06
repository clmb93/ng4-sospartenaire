import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Routes, RouterModule} from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { NgModel,FormsModule } from '@angular/forms';
import {ConnectService} from './connect.service';
import {UtilisateursService} from './utilisateurs.service';
import { HttpModule } from '@angular/http';

const appRoutes:Routes = [
  { path : '' , redirectTo : '/accueil', pathMatch: 'full'},
  { path : 'accueil' , component : AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [ConnectService,UtilisateursService],
  bootstrap: [AppComponent]
})

export class AppModule { }
