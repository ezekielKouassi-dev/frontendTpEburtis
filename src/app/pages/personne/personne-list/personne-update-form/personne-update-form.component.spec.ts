import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneUpdateFormComponent } from './personne-update-form.component';

describe('PersonneUpdateFormComponent', () => {
  let component: PersonneUpdateFormComponent;
  let fixture: ComponentFixture<PersonneUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonneUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
