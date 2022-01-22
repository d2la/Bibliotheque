import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import { ConnexionComponent } from './Component/connexion/connexion.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Bibliotheque';
  session=JSON.parse(sessionStorage.getItem('login') || '{}'); //pour recuperer un objet dans localsotorage ou sessionstorage il faut le parser

  public deleteSession(){
    sessionStorage.removeItem('login');
    location.reload();  //actualiser la page
    
  }
 




}


