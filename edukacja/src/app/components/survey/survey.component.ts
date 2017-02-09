/// <reference path="../../../typings/jquery/jquery.d.ts" />
import {Component, OnInit, AfterViewInit} from "@angular/core";
import {SurveyService} from "../../services/survey.service";
import {Sondaz} from "../../model/survey/Sondaz";
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";
import Observable = ol.Observable;

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.css'],
    providers: [SurveyService]
})
export class SurveyComponent implements OnInit, AfterViewInit {
    sondazList: Sondaz[];
    sondazSelected: Sondaz;
    sondazSelectedId: number;

    constructor(private surveyService: SurveyService, private af: AngularFire) {
    }

    ngOnInit() {
        //this.sondazList = this.af.database.list('/sondaze');

        if (!this.sondazList) {
            this.surveyService.getSondaze()
                .then(e => {
                    this.sondazList = e;
                });
        }
        this.showSurvey(2);

        // console.log(this.af.database.object('/sondaze/' + this.sondazSelectedId));
        // //console.log(this.sondazList.subscribe(snapshot => console.log(snapshot.id)));
        // console.log(this.getSondaz(2));
    }

    ngAfterViewInit() {

    }

    selectSpec(specId: number) {
        //this.sondazSelected.update({selectedSpecId: specId})

         var selected:Sondaz = this.sondazList[this.sondazSelectedId];
        if(selected.statusSondazu === "Aktywny"){
            console.log("Aktywny");
            this.sondazList[this.sondazSelectedId].selectedSpecId = specId;
        }

        // if(this.sondazList.filter(e => e.id === this.sondazSelectedId).first() === "Aktywny"){
        //     console.log("Aktywny");
        //     this.sondazList[this.sondazSelectedId].selectedSpecId = specId;
        // }
    }

    showSurvey(id: number) {
        this.sondazSelectedId = id;
    }

    closeSurvey() {

    }

    selectOption(surveyId: number, specId: number) {

    }


    showPopup() {
        (<any>$('.pdf'))
            .popup()
        ;
    }
}
