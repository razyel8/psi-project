import {Component, OnInit, AfterViewInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../model/User";

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css'],
  providers: [UserService]
})
export class UserPanelComponent implements OnInit, AfterViewInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    if(!this.user){
      this.userService.getMe()
          .then(user => {
            this.user = user;
          });
    }
  }

  ngAfterViewInit(){
    (<any>$('.ui.dropdown'))
        .dropdown({
          on: 'hover'
        })
    ;
  }

}
