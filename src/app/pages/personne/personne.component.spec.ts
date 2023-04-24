import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneComponent } from './personne.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {PersonneService} from "../../services/personne.service";
import {DepartementService} from "../../services/departement.service";
import {PrimengModule} from "../../core/modules/shared/primeng.module";
import {PersonneListComponent} from "./personne-list/personne-list.component";
import {PersonneFormComponent} from "./personne-list/personne-form/personne-form.component";
import {ReactiveFormsModule} from "@angular/forms";

describe('PersonneComponent', () => {
  let component: PersonneComponent;
  let fixture: ComponentFixture<PersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneComponent, PersonneListComponent, PersonneFormComponent ],
      imports: [
        HttpClientModule,
        PrimengModule,
        ReactiveFormsModule
      ],
      providers: [
        HttpClient,
        PersonneService,
        DepartementService
      ]
    });

    fixture = TestBed.createComponent(PersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
