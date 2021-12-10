import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
// fa  icons
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ClassesComponent } from './components/classes/classes.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { LearningPlanComponent } from './components/learning-plan/learning-plan.component';
import { ChatComponent } from './components/chat/chat.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    ClassesComponent,
    ResourcesComponent,
    LearningPlanComponent,
    ChatComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
