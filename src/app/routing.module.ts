import { NgModule  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompetitionScreenComponent } from './competition-screen/competition-screen.component';
import { StandingsScreenComponent } from './standings-screen/standings-screen.component';
import { TeamScreenComponent } from './team-screen/team-screen.component';


const appRoutes : Routes =[
	{path : "competition", component : CompetitionScreenComponent },
	{path : "standings/:url", component : StandingsScreenComponent },
	{path : "team/:url", component : TeamScreenComponent },
	{path : "", redirectTo : "/competition", pathMatch : 'full'},
	// {path : "home", component : HomeComponent}

	// {
	// 	path : "map",
	// 	component : MapComponent,
	// 	loadChildren: 'app/map/map-page.module#MapPageModule'     

	// }
]

@NgModule({
	imports : [RouterModule.forRoot(appRoutes)],
	exports : [RouterModule]
	
})
export class RoutingModule{

}
