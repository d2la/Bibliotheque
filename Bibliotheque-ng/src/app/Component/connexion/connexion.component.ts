import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  userTab:any
 
  constructor(private authentitificationService: AuthentificationService) { }

  ngOnInit(): void {
  }

  public checkUser(userForm:any){
    console.log(userForm)
    this.authentitificationService.getUsers().subscribe(resp=>{
      this.userTab=resp;
     
    });
    console.log(this.userTab)
    var userName = userForm.form.value.name;
    var userPass = userForm.form.value.password;
    var comit = "";

    for(var i=0;i<this.userTab.length;i++){
      if(userName==this.userTab[i].name){
        if(userPass==this.userTab[i].password){
          comit="session de "+userName+" créée"
          alert(comit)
          break
        }else{
          comit="mot de pass erroné"
          alert(comit)
          break
        }
      }
      
    }
    if(comit==""){alert("username erronné")}



  }

   
  public connexionCheck(userForm:any){
    let login = userForm.form.value.name;
    let userPass = userForm.form.value.password;
    this.authentitificationService.getUser(login).subscribe(data=>{
      this.userTab=data;
      this.userTab=this.userTab[0];
      if(this.userTab.length==0){
        alert("login erronné")
      }else if(userPass!=this.userTab.password){
        alert("password erronné")
      }else{
        sessionStorage.setItem('login',JSON.stringify(this.userTab)) //pour envoyer un objet dans localsotorage ou sessionstorage il faut le strignifier
       
       
          location.reload();
        
      }
    })
 
    

  }


}
