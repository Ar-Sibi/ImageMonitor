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
  getActivity(user: string): Observable<string[]> {
    let url = `${baseUrl}/${user}/getActivities`;
    return this.http.get(url).map(flat => flat as Object[])
      .map(activities => {
        let x = activities.map(
          activity => `The user ${activity['name']} performed action ${activity['action']}` 
          + ((activity['action'] === 'hover') 
            ? ` from ${activity['starttime']} to ${activity['endtime']}` 
            : ` at ${activity['starttime']}`)
          + ` on image no.${activity['target']}`);
        return x;
      });

  }
  postActivity(user: string, activity: Activity) {
    this.getActivity(user);
    let url = `${baseUrl}/${user}/addActivity`;
    console.log(url);
    this.http.post(url, activity, httpOptions).subscribe();
  }

}
