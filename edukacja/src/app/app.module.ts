import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {UserPanelComponent} from './components/user-panel/user-panel.component';
import {DesignationComponent} from './components/designation/designation.component';
import {DesignationDetailsComponent} from './components/designation-details/designation-details.component';
import {DesignationEditComponent} from './components/designation-edit/designation-edit.component';
import {SettingsComponent} from './components/settings/settings.component';
import {SurveyComponent} from './components/survey/survey.component';
import {LoginPanelComponent} from './components/login-panel/login-panel.component';
import {DesignationAcceptationComponent} from './components/designation-acceptation/designation-acceptation.component';
import {DesignationSemesterListComponent} from './components/designation-semester-list/designation-semester-list.component';
import {DesignationInSemesterComponent} from './components/designation-in-semester/designation-in-semester.component';
import {AppConfig} from "./config/AppConfig";
import {AngularFireModule} from "angularfire2";
import {UserService} from "./services/user.service";
import {routing} from "./app.routing";
import { WelcomeComponent } from './components/welcome/welcome.component';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyDIhGOjVYR27xQaW_BKlBhFj9mcB_XIsGE",
    authDomain: "nowaedukacja-a445c.firebaseapp.com",
    databaseURL: "https://nowaedukacja-a445c.firebaseio.com",
    storageBucket: "nowaedukacja-a445c.appspot.com",
    messagingSenderId: "172140473295"
};

@NgModule({
    declarations: [
        AppComponent,
        UserPanelComponent,
        DesignationComponent,
        DesignationDetailsComponent,
        DesignationEditComponent,
        SettingsComponent,
        SurveyComponent,
        LoginPanelComponent,
        DesignationAcceptationComponent,
        DesignationSemesterListComponent,
        DesignationInSemesterComponent,
        WelcomeComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(firebaseConfig),
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [AppConfig, UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
