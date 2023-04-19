import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Personne } from 'src/app/model/personne.model';

@Component({
  selector: 'app-personne-form',
  templateUrl: './personne-form.component.html',
  styleUrls: ['./personne-form.component.scss']
})
export class PersonneFormComponent implements OnInit{
  visible?: boolean;
  form!: FormGroup;
  @Output() personneEvent = new EventEmitter<Personne>;
  @Input() departements: any;
  filteredDepartement: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildReactiveForm();
  }

  buildReactiveForm() {
    this.form = this.fb.group({
      nom: new FormControl('', [Validators.required]),
      prenoms: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      selectedDepartement: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if(this.form.valid) {
      this.emit(this.form.value as Personne);
    }
  }

  emit(personne: Personne) {
    this.personneEvent.emit(personne);
  }

  showDialog() {
    this.visible = true;
  }

  filterDepartement(event: any) {
    const query = event.query; // récupérer la chaîne de caractère rentrer par l'utilisateur
    const filtered = this.departements.filter((departement: any) => departement.designation.toLowerCase().includes(query.toLowerCase()));
    this.filteredDepartement = filtered;
    console.log(filtered);
  }

}
