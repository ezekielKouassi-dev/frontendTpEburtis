import {Departement} from "./departement.model";

export class Personne {
    constructor(public id?: number, public nom?: string, public prenoms?: string, public age?: number, public departement?: Departement) {}
}
