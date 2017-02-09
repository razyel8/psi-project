import { Component, OnInit } from '@angular/core';
import {Semestr} from "../../model/general/Semestr";
import {GeneralService} from "../../services/general.service";
import {PowierzeniaService} from "../../services/powierzenia.service";
import {Kurs} from "../../model/designations/Kurs";
import {Powierzenie} from "../../model/designations/Powierzenie";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {AppConfig} from "../../config/AppConfig";

@Component({
  selector: 'app-designation-in-semester',
  templateUrl: './designation-in-semester.component.html',
  styleUrls: ['./designation-in-semester.component.css'],
  providers: [GeneralService, PowierzeniaService]
})
export class DesignationInSemesterComponent implements OnInit {
  semestrListObs: FirebaseListObservable<Semestr[]>;
  semestrList: Semestr[];
  powierzeniaList: Powierzenie[];
  powierzeniaListObs: FirebaseListObservable<Powierzenie[]>;
  selectedSemestrId: number;
  selectedPowierzenieId: number;

  constructor(private generalService: GeneralService, private powierzeniaService: PowierzeniaService, private appConfig: AppConfig, private af: AngularFire) { }

  ngOnInit() {

    if(this.appConfig.isFire){
      console.log("Fire!");
      this.semestrListObs = this.af.database.list('/semestry');
      //this.powierzeniaListObs = this.af.database.list('/powierzenia/semestr/2');
    }else {
      // if (!this.semestrList) {
      //   this.generalService.getAllSemesterUrl()
      //       .then(entity => {
      //         this.semestrList = entity;
      //       });
      // }
    }
  }

  updateSelectedValue(){

    this.powierzeniaListObs = this.af.database.list('/powierzenia/semestr/' + this.selectedSemestrId);

    console.log("Selected " + this.selectedSemestrId);
    // this.powierzeniaService.getPowierzeniaForSemester(this.selectedSemestrId)
    //     .then(entity => {
    //       this.powierzeniaList = entity;
    //     });
  }

  selectPowierzenie(id: number){
    this.selectedPowierzenieId = id;
  }

  acceptPowierzenie(id: number){
    console.log("accept");

    // this.af.database.list('/powierzenia/semestr/' + this.selectedSemestrId, {
    //   query: {
    //     id: id,
    //   }
    // }).update({status: "Zaakceptowane"});
    this.powierzeniaListObs.update(id.toString(), {status: "Zaakceptowane"});
    //"powierzeniaList"
    // p: Powierzenie = this.powierzeniaList.filter(pow => pow.id === this.selectedPowierzenieId)[0];
    //this.powierzeniaService.acceptPowierzenie(id);
  }

  denyPowierzenie(id: number){
    //this.powierzeniaList.find(pow => pow.id === this.selectedPowierzenieId).status = "Niezaakceptowane";
    this.powierzeniaService.denyPowierzenie(id);
  }

}
