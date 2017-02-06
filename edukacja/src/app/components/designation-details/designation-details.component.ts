/// <reference path="../../../typings/jquery/jquery.d.ts" />
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-designation-details',
  templateUrl: './designation-details.component.html',
  styleUrls: ['./designation-details.component.css']
})
export class DesignationDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  showEdit(){
    console.log("Show modal");
    (<any>$('.ui.modal'))
        .modal('show')
    ;
  }

}
