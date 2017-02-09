import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Semestr} from "../model/general/Semestr";
import {Kurs} from "../model/designations/Kurs";

@Injectable()
export class AppConfig {

    public isFire: boolean = true;
    constructor() { }
}