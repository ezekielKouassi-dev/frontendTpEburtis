import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './core/modules/shared/primeng.module';
import { MenuBarComponent } from './core/components/shared/menu-bar/menu-bar.component';
import { PersonneComponent } from './pages/personne/personne.component';
import { PersonneListComponent } from './pages/personne/personne-list/personne-list.component';
import { PersonneFormComponent } from './pages/personne/personne-form/personne-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    PersonneComponent,
    PersonneListComponent,
    PersonneFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
