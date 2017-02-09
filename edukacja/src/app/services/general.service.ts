import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Semestr} from "../model/general/Semestr";
import {Kurs} from "../model/designations/Kurs";
import {AppConfig} from "../config/AppConfig";
import {AngularFire} from "angularfire2";

@Injectable()
export class GeneralService {

    private allSemesterUrl = 'http://localhost:4200/assets/mocks/json/semestry.json';  // URL to web api
    private kursyUrl = 'http://localhost:4200/assets/mocks/json/kursy.json';  // URL to web api

    constructor(private http: Http, private appConfig: AppConfig) { }

    // getAllSemesterUrl(): Promise<Semestr[]> {
    //
    //     // if(this.appConfig.isFire){
    //     //     this.items = af.database.list('/semestry').toPromise();
    //     // } else {
    //     //     //return Promise.resolve(TRANSACTIONS);
    //     //     return this.http.get(this.allSemesterUrl)
    //     //         .toPromise()
    //     //         .then(function(response){
    //     //             //console.log(response.json());
    //     //             return response.json() as Semestr[];
    //     //         })
    //     //         .catch(this.handleError);
    //     // }
    //
    //     return any;
    //
    // }


    getKursyForSemester(id: number): Promise<Kurs[]> {
        //return Promise.resolve(TRANSACTIONS);
        return this.http.get(this.kursyUrl)
            .toPromise()
            .then(function(response){
                //console.log(response.json());
                return response.json() as Kurs[];
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}