"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SurveyService = (function () {
    function SurveyService(http) {
        this.http = http;
        this.surveyAllUrl = 'http://localhost:4200/assets/mocks/json/survey.json'; // URL to web api
    }
    SurveyService.prototype.getSurveys = function () {
        //return Promise.resolve(TRANSACTIONS);
        return this.http.get(this.surveyAllUrl)
            .toPromise()
            .then(function (response) {
            //console.log(response.json());
            return response.json();
        })
            .catch(this.handleError);
    };
    SurveyService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    SurveyService = __decorate([
        core_1.Injectable()
    ], SurveyService);
    return SurveyService;
}());
exports.SurveyService = SurveyService;
//# sourceMappingURL=survey.service.js.map