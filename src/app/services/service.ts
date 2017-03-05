import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class appService {
    private competitionsUrl = 'http://api.football-data.org/v1/competitions/?season=2015';  // URL to web API
    // private standingsUrl = "http://api.football-data.org/v1/competitions/394/leagueTable";
    // private playersUrl = "http://api.football-data.org/v1/teams/5/players";
    // private fixturesUrl = "http://api.football-data.org/v1/teams/5/fixtures";
    constructor (private http: Http) {}
    
	getCompetitions(): Observable<any> {
		return this.http.get(this.competitionsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);

	} 

	getStandings(url): Observable<any> {
	return this.http.get(url)
                .map(this.extractData)
                .catch(this.handleError);

	} 

	getPlayers(url): Observable<any> {
		console.log(url+"/players")
	return this.http.get(url+"/players")
                .map(this.extractData)
                .catch(this.handleError);

	} 

	getFixtures(url): Observable<any> {
	return this.http.get(url+"/fixtures")
                .map(this.extractData)
                .catch(this.handleError);

	} 

 	private extractData(res: Response) {
	    let body = res.json();	    
	    return body;
  	}
	private handleError (error: Response | any) {	    
		let errMsg: string;
		if (error instanceof Response) {
		  const body = error.json() || '';
		  const err = body.error || JSON.stringify(body);
		  errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
		  errMsg = error.message ? error.message : error.toString();
		}
		// console.error(errMsg);
		return Observable.throw(errMsg);
	}
}


