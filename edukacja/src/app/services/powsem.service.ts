import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Survey} from "../model/survey/Survey";
import {Sondaz} from "../model/survey/Sondaz";
import {PowierzeniaWSemestrze} from "../model/designations/PowierzeniaWSemestrze";

@Injectable()
export class PowSemService {

    private powSemAllUrl = 'http://localhost:4200/assets/mocks/json/powsem.json';  // URL to web api

    constructor(private http: Http) { }

    getAllPowSem(): Promise<PowierzeniaWSemestrze[]> {
        //return Promise.resolve(TRANSACTIONS);
        return this.http.get(this.powSemAllUrl)
            .toPromise()
            .then(function(response){
                //console.log(response.json());
                return response.json() as PowierzeniaWSemestrze[];
            })
            .catch(this.handleError);
    }

    // getSurvey(id: number): Promise<Sondaz> {
    //     //return Promise.resolve(TRANSACTIONS);
    //     return this.http.get(this.surveyUrl)
    //         .toPromise()
    //         .then(function(response){
    //             //console.log(response.json());
    //             return response.json() as Sondaz;
    //         })
    //         .catch(this.handleError);
    // }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}