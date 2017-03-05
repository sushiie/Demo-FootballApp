import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class FatService {

	constructor(
		private http: Http,
		) {	}

	post(url:string, data:any) : Observable<any>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin','*');
        //headers.append('Accept','application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(myGlobals.baseurl +'/'+ url, data, options)
        .map(this.extractData)
          .catch(this.handleError);
    } 
	private extractData(res: Response) {
      let body = res.json();
      return body;
      //return body.Response || { };
    }

    private handleError(error: Response | any){
        let returnObject ={status: error.status, Error: '', statusText:''};
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.Error || JSON.stringify(body);
            //returnObject.Error = `${error.statusText || ''} ${err}`;
            returnObject.Error = err;
            returnObject.statusText = error.statusText;
        }  
        return Observable.throw(returnObject);
    }	 
	
}
