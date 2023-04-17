import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit{
  items!: MegaMenuItem[];

  ngOnInit(): void {
      this.items = [
        {
          label: 'Acceuil',
          icon: 'pi pi-home',
          routerLink: '/acceuil'
        },
        {
          label: 'Personne',
          icon: 'pi pi-user',
          routerLink: 'personne'
        }
      ]
  }
}
