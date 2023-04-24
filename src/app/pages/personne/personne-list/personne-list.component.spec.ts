import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneListComponent } from './personne-list.component';
import {CardModule} from "primeng/card";
import {PersonneFormComponent} from "./personne-form/personne-form.component";
import {DialogModule} from "primeng/dialog";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {PrimengModule} from "../../../core/modules/shared/primeng.module";
import {ReactiveFormsModule} from "@angular/forms";

describe('PersonneListComponent', () => {
  let component: PersonneListComponent;
  let fixture: ComponentFixture<PersonneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneListComponent, PersonneFormComponent ],
      imports: [ReactiveFormsModule, PrimengModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
