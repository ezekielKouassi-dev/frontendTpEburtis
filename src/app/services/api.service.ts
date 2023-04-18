import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Personne } from "../model/personne.model";

const BASE_URL = 'http://localhost:9092/api/v1';

@Injectable({
    providedIn: 'root'
})
export class ApiService{

    constructor(private http: HttpClient){ }

    getUrl(model: string) {
        return `${BASE_URL}/${model}`;
    }

    getUrlWithId(model: string, id: number) {
        return `${this.getUrl(model)}/${id}`;
    }

    save(model: string, object: Personne) {
        return this.http.post(this.getUrl(model), object, {headers: this.headerHttp()});
    }

    all(model: string) {
        return this.http.get(this.getUrl(model), {headers: this.headerHttp()});
    }

    find(model: string, id: number) {
        return this.http.get(this.getUrlWithId(model, id), {headers: this.headerHttp()});
    }

    update(model: string, id: number, personne: Personne) {
        return this.http.put(this.getUrlWithId(model, id), personne, {headers: this.headerHttp()});
    }

    delete(model: string, id: number) {
        return this.http.delete(this.getUrlWithId(model, id), {headers: this.headerHttp()});
    }

    headerHttp() {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
            'Accept': 'application/json'
        })
    }

    
}