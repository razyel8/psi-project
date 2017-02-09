import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
    selector: 'app-login-panel',
    templateUrl: './login-panel.component.html',
    styleUrls: ['./login-panel.component.css'],
})
export class LoginPanelComponent implements OnInit {

    login: string;
    password: string;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
    }

    loginMe(){
        this.userService.login(this.login, this.password);
    }


}
