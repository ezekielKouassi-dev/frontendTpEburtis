import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/personne.model';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.scss']
})
export class PersonneComponent implements OnInit {
  personnes: any[] = [];
  constructor(private personneService: PersonneService) { }

  ngOnInit(): void {
    this.all();
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

}
