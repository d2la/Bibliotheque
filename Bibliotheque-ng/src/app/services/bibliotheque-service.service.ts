import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { min } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BibliothequeServiceService {
  url="http://localhost:8088/getbibliotheques";

  constructor(private http:HttpClient) {}

  getBibliotheques(){
    return this.http.get(this.url);
  }
  addBibliotheque(bibliothequeForm:any){
    return this.http.post(this.url,bibliothequeForm);
  }
  supBiblio(biblio:any){
    return this.http.delete(this.url+'/'+biblio.id);
  }
  updateBibliotheque(bibliotheque:any){
    console.log(this.url+'/'+bibliotheque.id,bibliotheque);
    return this.http.put(this.url+'/'+bibliotheque.id,bibliotheque);
  }
  searchBiblio(searchForm:any){
    var searchMethod=searchForm.form.value.searchMethod;
    var keyword=searchForm.form.value.keyword;
    if(searchMethod=="id"){
      var kw= parseInt(keyword)
      return this.http.get('http://localhost:8088/getbibliotheque/search/'+kw)
    }else{ 
      return this.http.get(this.url+'/search/'+searchMethod+','+keyword);
    }
  }
  searchBiblioBetween(searchForm:any){
    var searchMethod=searchForm.form.value.searchMethod;
    var min=searchForm.form.value.keyword;
    var max=searchForm.form.value.keyword2;

    return this.http.get(this.url+'/searchBetween/'+min+','+max);
  }
}
