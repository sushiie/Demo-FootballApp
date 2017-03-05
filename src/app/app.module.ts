import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompetitionScreenComponent } from './competition-screen/competition-screen.component';
import { StandingsScreenComponent } from './standings-screen/standings-screen.component';
import { TeamScreenComponent } from './team-screen/team-screen.component';
import { appService } from './services/service';

import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionScreenComponent,
    StandingsScreenComponent,
    TeamScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [ appService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
