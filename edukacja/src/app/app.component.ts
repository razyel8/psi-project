import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/user.service";
import {User} from "./model/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  user: User;

  constructor(private userService: UserService) {
  }


  ngOnInit() {
    if(!this.user){
      this.userService.getMe()
          .then(user => {
            this.user = user;
          });
    }
  }

}
