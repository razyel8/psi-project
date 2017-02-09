import {Routes, RouterModule} from "@angular/router";
import {DesignationSemesterListComponent} from "./components/designation-semester-list/designation-semester-list.component";
import {DesignationInSemesterComponent} from "./components/designation-in-semester/designation-in-semester.component";
import {SurveyComponent} from "./components/survey/survey.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";

const appRoutes: Routes = [
    {
        path: '',   redirectTo: '/welcome', pathMatch: 'full'
    },
    {
        path: 'designation/semester',
        component: DesignationSemesterListComponent
    },
    {
        path: 'designation/all',
        component: DesignationInSemesterComponent
    },

    {
        path: 'survey',
        component: SurveyComponent
    },

    {
        path: 'welcome',
        component: WelcomeComponent
    }
    // {
    //     path: 'dashboard/valuations',
    //     component: ValuationsComponent,
    //     outlet: 'dashboard'
    // },
    // {
    //     path: 'dashboard/transactions',
    //     component: TransactionsComponent,
    //     outlet: 'dashboard'
    // },
    // {
    //     path: 'dashboard/features',
    //     component: FeaturesComponent,
    //     outlet: 'dashboard'
    // },
];
export const routing = RouterModule.forRoot(appRoutes);