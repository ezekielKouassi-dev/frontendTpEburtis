import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Personne } from 'src/app/model/personne.model';

@Component({
  selector: 'app-personne-list',
  templateUrl: './personne-list.component.html',
  styleUrls: ['./personne-list.component.scss']
})
export class PersonneListComponent implements OnInit {
  @Input() personnes?: any;
  @Input() departements: any;
  @Output() sendPersonne = new EventEmitter<Personne>;
  @Output() sendPersonneToUpdate = new EventEmitter<Personne>;
  @Output() sendPesonneIDToDelete = new EventEmitter<Personne>;
  loading: boolean = true;
  visible?: boolean;
  form!: FormGroup;
  personneSelected: Personne = new Personne(0, '', '', 0);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildReactiveForm();
  }

  sendToParent(personne: Personne) {
    this.sendPersonne.emit(personne);
  }

  sendPersonneToUpdateToParent() {
    this.sendPersonneToUpdate.emit(this.personneSelected);
  }

  sendPersonneIDToParent(personne: Personne) {
    //this.sendPesonneIDToDelete.emit(personne);
    console.log(personne);
  }

  buildReactiveForm() {
    this.form = this.fb.group({
      nom: new FormControl('', [Validators.required]),
      prenoms: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required])
    });
  }

  showDialog(personne: Personne) {
    this.visible = true;
    this.personneSelected = personne;
  }

  displayData(personne: Personne) {
    console.log(personne);
  }
}
