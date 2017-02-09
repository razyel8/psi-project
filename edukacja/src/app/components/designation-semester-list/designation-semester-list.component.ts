import {Component, OnInit, AfterViewInit} from '@angular/core';
import {PowSemService} from "../../services/powsem.service";
import {PowierzeniaWSemestrze} from "../../model/designations/PowierzeniaWSemestrze";
import {StatusPowierzenWSemestrze} from "../../model/designations/StatusPowierzenWSemestrze";

@Component({
  selector: 'app-designation-semester-list',
  templateUrl: './designation-semester-list.component.html',
  styleUrls: ['./designation-semester-list.component.css'],
  providers: [PowSemService]
})
export class DesignationSemesterListComponent implements OnInit,AfterViewInit {

  constructor(private powierzeniaWSemestrzeService: PowSemService) { }

  powierzenia: PowierzeniaWSemestrze[];
  statusPowierzen = StatusPowierzenWSemestrze;


  ngOnInit() {
    if (!this.powierzenia) {
      this.powierzeniaWSemestrzeService.getAllPowSem()
          .then(powierzenia => {
            this.powierzenia = powierzenia;
          });
    }
  }

  ngAfterViewInit() {

  }

}
