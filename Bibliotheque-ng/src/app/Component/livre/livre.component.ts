import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LivreServiceService } from 'src/app/services/livre-service.service';


@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  dataLivres:any;
  
  constructor(private livreService:LivreServiceService) { }

  ngOnInit(): void {
    let idBibi = localStorage.getItem('idBibliotheque');
    this.watchLivresByBibi(idBibi);
  }

  @Output() myEvent= new EventEmitter;

  public watchLivresByBibi(idBibi:any){
    this.livreService.getLivresByBibliotheque(idBibi).subscribe(resp=>{
      this.dataLivres = resp;
      console.log(this.dataLivres);
    });
  }
  public watchLivres(){
    this.livreService.getLivres().subscribe(resp=>{
      this.dataLivres=resp;
    })
  }

}
