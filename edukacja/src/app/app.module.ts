import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { DesignationComponent } from './components/designation/designation.component';
import { DesignationDetailsComponent } from './components/designation-details/designation-details.component';
import { DesignationEditComponent } from './components/designation-edit/designation-edit.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SurveyComponent } from './components/survey/survey.component';
import { LoginPanelComponent } from './components/login-panel/login-panel.component';
import { DesignationAcceptationComponent } from './components/designation-acceptation/designation-acceptation.component';

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
    DesignationAcceptationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
