import { Component, OnInit, OnDestroy } from '@angular/core';
import { appService } from '../services/service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-standings-screen',
  templateUrl: './standings-screen.component.html',
  styleUrls: ['./standings-screen.component.css']
})
export class StandingsScreenComponent implements OnInit {

  public items: any; 
  private sub: any;   
  private url: any;   

  constructor(
  	private serv: appService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
       this.url = params['url'];               
    });

  	this.getStandings(this.url);  	

  }

  getStandings(url) {
    this.serv.getStandings(url)
                     .subscribe(
                       response => {this.items = response.standing; console.log(this.items)}
                       );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
