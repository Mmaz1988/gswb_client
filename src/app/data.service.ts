import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private gswbpage = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  gswbDeduce(gswbRequest): Observable<any> {
    return this.http.post<any>(`${this.gswbpage}/deduce`, gswbRequest);
  }
}
