import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register} from '../models/register.model';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:7202/api/Authentication';

  constructor(private http: HttpClient, private router: Router) { }

  register(registerDto: Register): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, registerDto);
  }

  logout(): void {

    localStorage.removeItem('token');
    localStorage.removeItem('user_Id')  ;
    localStorage.removeItem('user_name');

    this.router.navigate(['/login']);
  }
}
