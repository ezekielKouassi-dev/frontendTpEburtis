import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/model/personne.model';

@Component({
  selector: 'app-personne-list',
  templateUrl: './personne-list.component.html',
  styleUrls: ['./personne-list.component.scss']
})
export class PersonneListComponent implements OnInit {
  @Input() personnes?: any;
  @Output() sendPersonne = new EventEmitter<Personne>;
  loading: boolean = true;
  
  ngOnInit(): void {
  }

  sendToParent(personne: Personne) {
    this.sendPersonne.emit(personne);
  }



}
