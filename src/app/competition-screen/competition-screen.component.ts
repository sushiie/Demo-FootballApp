import { Component, OnInit, ElementRef  } from '@angular/core';
import { appService } from '../services/service';

@Component({
  selector: 'app-competition-screen',
  templateUrl: './competition-screen.component.html',
  styleUrls: ['./competition-screen.component.css']
})
export class CompetitionScreenComponent implements OnInit {
	
  public items: any;
  
  constructor(
  	private serv: appService,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    debugger;
  	this.getCompetitions();  	

  }

  getCompetitions() {
    this.serv.getCompetitions()
                     .subscribe(
                       response => {this.items = response; console.log(response)}
                       );
  }

}
