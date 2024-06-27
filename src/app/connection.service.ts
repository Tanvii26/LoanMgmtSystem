import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeComponent } from './MyComponent/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private baseUrl = "http://localhost:8080/api"
  constructor(private httpClient:HttpClient) { }

  getHomeLoans(): Observable<HomeComponent> {
    return this.httpClient.get(`${this.baseUrl}/homeloan`);
  }

  

}
