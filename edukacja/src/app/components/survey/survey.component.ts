/// <reference path="../../../typings/jquery/jquery.d.ts" />
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  showPopup(){
    (<any>$('.pdf'))
        .popup()
    ;
  }
}
