import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable, observable } from 'rxjs';
import { Login } from '../interfaces/login';
import { Register } from '../interfaces/register';
import { Router } from '@angular/router';
import { Userid } from '../interfaces/userid';

const token = localStorage.getItem('access_token');
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': `${token}` })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // baseUrl$ = environment.baseUrl;
  baseUrl$ = "http://localhost:8080/api"

  constructor(private http: HttpClient,private router: Router) { }

  login(users : Login): Observable<any> {
    return this.http.post(`${this.baseUrl$}login`, users)
  }

  register(users : Register) {
    return this.http.post(`${this.baseUrl$}register`, users);
  }
  
  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['products']);
    }
  }
  
  getUserProfile(){
    return this.http.get(`${this.baseUrl$}profile`,httpOptions)
  }
}
