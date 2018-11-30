import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams, HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpRequestService {

  constructor(
    private _http: HttpClient
  ) { }

  createReqHeaders(): HttpHeaders {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return headers;
  }

  extractData(res: any) {
    let body = res;
    return body || {};
  }
  
  handleErrorObservable(error: HttpErrorResponse | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  getRequest(url: string, paramObj?: any): Observable<any> {
    const headers = this.createReqHeaders();
    const params = new HttpParams(paramObj);
    const options = { headers, params};
    return this._http.get(url, options)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }


}
