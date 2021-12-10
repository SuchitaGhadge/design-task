import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { ClassesComponent } from './components/classes/classes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LearningPlanComponent } from './components/learning-plan/learning-plan.component';
import {ResourcesComponent} from './components/resources/resources.component'


const routes: Routes = [
  {
    path: '', redirectTo:'DashboardComponent', pathMatch:'full'
  },
  {
    path:'', component:DashboardComponent
  },
  {
    path: 'classes', component:ClassesComponent
  },
  {
    path: 'resources', component:ResourcesComponent
  },
  {
    path: 'learning-plan', component:LearningPlanComponent
  },
  {
    path: 'chat', component:ChatComponent
  },
  {
    path: 'settings', loadChildren: () => import('./settings/settings.module').then(mod => mod.SettingsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
