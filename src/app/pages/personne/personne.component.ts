import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/personne.model';
import { PersonneService } from 'src/app/services/personne.service';
import {DepartementService} from "../../services/departement.service";

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.scss']
})
export class PersonneComponent implements OnInit {
  personnes: any[] = [];
  departements: any;
  constructor(private personneService: PersonneService, private departementService: DepartementService) { }

  ngOnInit(): void {
    this.all();
    this.allDepartement();
  }

  all() {
    this.personneService.all().subscribe((response: any) => {
      console.log(response)
      if (response.status == 200) {
        console.log(response.message)
        this.personnes = response.data;
      }
    });
  }

  save(personne: Personne) {
    this.personneService.save(personne).subscribe((response: any) => {
      console.log(response.message);
    });
  }

  update(personne: Personne) {
    this.personneService.update(personne.id as number, new Personne(undefined, personne.nom, personne.prenoms, personne.age))
      .subscribe((response: any) => {
        console.log(response.message);
      });
  }

  delete(personne: Personne) {
    // this.personneService.delete(personne.id as number).subscribe((response: any) => {
    //   console.log(response.message);
    // })
    console.log(personne);
  }

  allDepartement() {
    this.departementService.all().subscribe((response) => {
      console.log(response);
      this.departements = response;
    });
  }

}
