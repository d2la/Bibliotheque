import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionComponent } from './Component/connexion/connexion.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Bibliotheque';
  session=JSON.parse(sessionStorage.getItem('login') || '{}'); //pour recuperer un objet dans localsotorage ou sessionstorage il faut le parser
  sessionExist=false;

  constructor (private router:Router){}

  ngOnInit(): void{
    if(Object.keys(this.session).length!=0){
      this.sessionExist=true
    }else{
      this.sessionExist=false
    }
  }


  public deleteSession(){
    sessionStorage.removeItem('login');
    //this.router.navigate(['/','home'])    //appelle une autre page html
    //location.reload();  //actualiser la page mais marche pas car revient à la page précédente
    location.replace('/home')
  }
 




}


