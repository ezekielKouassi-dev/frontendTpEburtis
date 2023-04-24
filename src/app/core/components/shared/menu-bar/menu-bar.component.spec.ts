import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarComponent } from './menu-bar.component';
import {MegaMenuModule} from "primeng/megamenu";
import {ActivatedRoute, RouterModule, Routes} from "@angular/router";
import {PrimengModule} from "../../../modules/shared/primeng.module";
import {AppRoutingModule} from "../../../../app-routing.module";

describe('MenuBarComponent', () => {
  let component: MenuBarComponent;
  let fixture: ComponentFixture<MenuBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBarComponent ],
      imports: [
        PrimengModule,
        AppRoutingModule
      ],
    });

    fixture = TestBed.createComponent(MenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
