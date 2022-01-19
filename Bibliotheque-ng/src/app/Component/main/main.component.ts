import { Component, OnInit } from '@angular/core';

import { BibliothequeServiceService } from 'src/app/services/bibliotheque-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  dataBibliotheque:any;
  constructor(private bibliothequeService:BibliothequeServiceService) { }//importation des methodes de bibliotheque service

  ngOnInit(): void {
    this.watchBibliotheques();

  }

  watchBibliotheques(){
    this.bibliothequeService.getBibliotheques().subscribe(data=>{
      this.dataBibliotheque=data;
    })
  }

  addBibliotheque(form:any){
    if(form.value.photo!=''){form.value.photo=form.value.photo.replace('C:\\fakepath\\','')};
    console.log(form.value);
    this.bibliothequeService.addBibliotheque(form.value).subscribe(()=> form.reset());
    this.watchBibliotheques();
  }

  supBibliotheque(biblio:any){
    this.bibliothequeService.supBiblio(biblio).subscribe(resp=>{
      console.log('biblio delete');
      this.watchBibliotheques();
    })
  }

  bibliothequeSingle={
    "id": '',
    "name": '',
    "description":'',
    "photo":'',
    "adherent":0
   
  }

  editBibliotheque(bupdateForm:any){
    this.bibliothequeSingle=bupdateForm
  }

  modifBibliotheque(){
    if(this.bibliothequeSingle.photo!=''){this.bibliothequeSingle.photo=this.bibliothequeSingle.photo.replace('C:\\fakepath\\','')};
    this.bibliothequeService.updateBibliotheque(this.bibliothequeSingle).subscribe(resp=>{
      console.log('update done');
      this.watchBibliotheques();
    });
  }


  searchBibliotheque(searchForm:any){
    console.log(searchForm);
    var coment;
    
    if (searchForm.form.value.searchMethod !="" && searchForm.form.value.keyword!=""){
        
        if(searchForm.form.value.searchMethod=='adherent'){
          this.bibliothequeService.searchBiblioBetween(searchForm).subscribe(resp=>{       
            this.dataBibliotheque=resp;
            coment='votre recherche entre: "'+searchForm.form.value.keyword+'" et "'+searchForm.form.value.keyword2+'" dans "'+searchForm.form.value.searchMethod+'" a obtenu '+this.dataBibliotheque.length+' résultat(s)';
          var span= document.getElementById('coment') as HTMLElement;
          span.innerHTML=coment;
          })
        }else{
          this.bibliothequeService.searchBiblio(searchForm).subscribe(resp=>{       
                this.dataBibliotheque=resp;
                coment='votre recherche "'+searchForm.form.value.keyword+'" dans "'+searchForm.form.value.searchMethod+'" a obtenu '+this.dataBibliotheque.length+' résultat(s)';
            var span= document.getElementById('coment') as HTMLElement;
            span.innerHTML=coment;
            })
        }
    }else if(searchForm.form.value.searchMethod =="" && searchForm.form.value.keyword!=""){
      coment='Vous n avez pas choisi le sujet de votre recherche';
      var span= document.getElementById('coment') as HTMLElement;
      span.innerHTML=coment;
    }else if(searchForm.form.value.searchMethod !="" && searchForm.form.value.keyword==""){
      coment='Vous n avez pas saisi votre mot clef';
      var span= document.getElementById('coment') as HTMLElement;
      span.innerHTML=coment;
    }else{
      coment='Faites votre job';
      var span= document.getElementById('coment') as HTMLElement;
      span.innerHTML=coment;
    }
  }

  public comWatchLivre(idBibi:any){
    console.log('id bibliortheque pour livres : '+idBibi)
    localStorage.setItem('idBibliotheque', idBibi)
  }

   l:any;

  public change(event:any){
     this.l=event.target.value; 
  }

}
