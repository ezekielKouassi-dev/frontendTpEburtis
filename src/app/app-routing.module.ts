import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { PersonneComponent } from './pages/personne/personne.component';

const routes: Routes = [
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'personne', component: PersonneComponent },
  { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
