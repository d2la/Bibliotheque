import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './Component/connexion/connexion.component';
import { LivreComponent } from './Component/livre/livre.component';
import { MainComponent } from './Component/main/main.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'bibliotheque', component:MainComponent},
  {path: 'livre', component:LivreComponent},
  {path: 'connexion', component:ConnexionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
