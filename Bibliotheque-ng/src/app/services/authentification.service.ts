import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  url="http://localhost:3000/user"
  test:any

  constructor(private http: HttpClient) { }

  public getUsers(){
    this.test=this.http.get(this.url)
    console.log(this.test)
    return this.http.get(this.url)
  }

  public getUser(login:any){
    return this.http.get(this.url+'?name='+login)
  }
}
