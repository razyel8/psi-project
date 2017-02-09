import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {Http} from "@angular/http";

@Injectable()
export class UserService {

    private userUrl = 'http://localhost:4200/assets/mocks/json/user.json';

    constructor(private http: Http) { }

    activeUser: User;

    getMe(): Promise<User> {
        return this.http.get(this.userUrl)
            .toPromise()
            .then(function(response){
                //this.activeUser = response.json() as User;
                return  response.json() as User;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    login(user: string, pass: string){
        this.activeUser = new User();
        this.activeUser.id = 0;
        this.activeUser.nazwisko = "Małysz";
        if(user === 'stud'){
            this.activeUser.login = "stud";
            this.activeUser.nazwisko = "Dariusz";
            this.activeUser.role = 1; //1 student, 2-prowadzacy
            this.activeUser.authToken = "abc123";
            console.log("Logged in as student");
        } else if(user === 'prac'){
            this.activeUser.login = "prac";
            this.activeUser.nazwisko = "Adam";
            this.activeUser.role = 2; //1 student, 2-prowadzacy
            this.activeUser.authToken = "abc123";
            console.log("Logged in as pracownikthis.");
        }

    }

}