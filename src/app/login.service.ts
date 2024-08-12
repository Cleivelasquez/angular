import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
providedIn: 'root'
})

export class LoginService {
   
private url= 'https://api.worldsacross.com/api/auth/staff/login';
  

constructor(private http: HttpClient) { 
}
data: any= {}

login(loginData: any): Observable<any> {
    return this.http.post<any>(this.url, loginData);
  }
}

