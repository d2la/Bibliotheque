import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivreServiceService {
  url = "http://localhost:8088/getLivres";

  constructor(private http:HttpClient) { }
    
  public getLivres(){
    return this.http.get(this.url)
  }

  public getLivresByBibliotheque(idBibi:any){
    return this.http.get(this.url+"ByBibliotheque/"+idBibi)
  }

 
}
