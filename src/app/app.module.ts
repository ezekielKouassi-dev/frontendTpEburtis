import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './core/modules/shared/primeng.module';
import { MenuBarComponent } from './core/components/shared/menu-bar/menu-bar.component';
import { PersonneComponent } from './pages/personne/personne.component';
import { PersonneListComponent } from './pages/personne/personne-list/personne-list.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonneUpdateFormComponent } from './pages/personne/personne-list/personne-update-form/personne-update-form.component';
import { PersonneFormComponent } from './pages/personne/personne-list/personne-form/personne-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    PersonneComponent,
    PersonneListComponent,
    PersonneFormComponent,
    AcceuilComponent,
    PersonneUpdateFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    PrimengModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
