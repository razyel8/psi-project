import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import {Powierzenie} from "../model/designations/Powierzenie";
import Observable = ol.Observable;
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class PowierzeniaService {

    private powierzeniaDlaSemestruUrl = 'http://localhost:4200/assets/mocks/json/powierzenia.json';  // URL to web api

    private powierzeniaAcceptUrl = 'http://localhost:4200/';  // URL to web api
    private powierzeniaDenyUrl = 'http://localhost:4200/';  // URL to web api

    constructor(private http: Http, af: AngularFire) { }

    getPowierzeniaForSemester(id: number): Promise<Powierzenie[]> {
        //return Promise.resolve(TRANSACTIONS);
        return this.http.get(this.powierzeniaDlaSemestruUrl)
            .toPromise()
            .then(function(response){
                //console.log(response.json());
                return response.json() as Powierzenie[];
            })
            .catch(this.handleError);
    }

    acceptPowierzenie(id: number){
        console.log("Akceptowanie powierzenie id " + id);
        this.http.post(this.powierzeniaAcceptUrl, {"id": id}); // ...using post request
            //.map((res:Response) => res.json()) // ...and calling .json() on the response to return data
            //.catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }

    denyPowierzenie(id: number){
        console.log("Odrzucenie powierzenia id " + id);
        this.http.post(this.powierzeniaDenyUrl, {"id": id})
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    private handlePostError(error: any) {
        console.error('An error occurred', error); // for demo purposes only
        //return Promise.reject(error.message || error);
    }



}