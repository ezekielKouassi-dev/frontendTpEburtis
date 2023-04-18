import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class StreamService {
    isClicked = new Subject<boolean>;
    isClicked$ = this.isClicked.asObservable();
}