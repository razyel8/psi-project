import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Survey} from "../model/survey/Survey";
import {Sondaz} from "../model/survey/Sondaz";

@Injectable()
export class SurveyService {

  private surveyAllUrl = 'http://localhost:4200/assets/mocks/json/surveys.json';  // URL to web api
    private surveyUrl = 'http://localhost:4200/assets/mocks/json/sondaz.json';  // URL to web api
    private sondazeUrl = 'http://localhost:4200/assets/mocks/json/sondaze.json';  // URL to web api

    constructor(private http: Http) { }

    getSurveys(): Promise<Survey[]> {
        //return Promise.resolve(TRANSACTIONS);
        return this.http.get(this.surveyAllUrl)
            .toPromise()
            .then(function(response){
                //console.log(response.json());
                return response.json() as Survey[];
            })
            .catch(this.handleError);
    }

    getSurvey(id: number): Promise<Sondaz> {
        //return Promise.resolve(TRANSACTIONS);
        return this.http.get(this.surveyUrl)
            .toPromise()
            .then(function(response){
                //console.log(response.json());
                return response.json() as Sondaz;
            })
            .catch(this.handleError);
    }

    getSondaze(): Promise<Sondaz[]> {
        //return Promise.resolve(TRANSACTIONS);
        return this.http.get(this.sondazeUrl)
            .toPromise()
            .then(function(response){
                //console.log(response.json());
                return response.json() as Sondaz[];
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
