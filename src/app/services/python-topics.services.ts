import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PythonTopicsService {
  private jsonUrl = 'assets/data/python-topics.json';

  constructor(private http: HttpClient) {}

  getTopicData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
