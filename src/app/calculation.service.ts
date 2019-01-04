import { Injectable } from '@angular/core';
import { Answer } from './answer';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CalculationService {

  private calculationURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  postCalculation(calculation): Observable<Answer> {
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post<Answer>(this.calculationURL, calculation, {headers: headers});
  }
}
