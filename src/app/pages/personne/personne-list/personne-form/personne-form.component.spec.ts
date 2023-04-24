import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneFormComponent } from './personne-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {PrimengModule} from "../../../../core/modules/shared/primeng.module";

describe('PersonneFormComponent', () => {
  let component: PersonneFormComponent;
  let fixture: ComponentFixture<PersonneFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneFormComponent ],
      imports: [
        ReactiveFormsModule,
        PrimengModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
