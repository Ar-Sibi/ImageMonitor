import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs';
import { Activity } from './activity';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
const baseUrl = 'http://localhost:3000/api';
@Injectable()
export class MonitorService {

  constructor(private http: HttpClient) { }
  getActivity(user: string): Observable<Activity[]> {
    let url = `${baseUrl}/${user}/getActivities`;
    return this.http.get(url).map(result => result as Activity[])
  }
  getCount(user:string): Observable<Number>{
    let url = `${baseUrl}/${user}/getCount`;
    return this.http.get(url).map(result => result['count'])
  }

  getActivityPaginated(user:string,start:number){
    let url = `${baseUrl}/${user}/getActivities/${start}`;
    return this.http.get(url).map(result => result as Activity[])
  }
  postActivity(user: string, activity: Activity) {
    this.getActivity(user);
    let url = `${baseUrl}/${user}/addActivity`;
    console.log(url);
    this.http.post(url, activity, httpOptions).subscribe();
  }

}
