import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Personne } from "../model/personne.model";

const MODEL = 'personne';

@Injectable({
    providedIn: 'root'
})
export class PersonneService {
    constructor(private api: ApiService) { }

    all() {
        return this.api.all(MODEL);
    }

    save(personne: Personne) {
        return this.api.save(MODEL, personne);
    }


}