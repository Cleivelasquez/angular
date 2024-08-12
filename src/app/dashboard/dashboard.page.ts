import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { IonHeader, IonCardContent, IonToolbar, IonTitle, IonCard, IonButtons, IonCardHeader, IonContent, IonBackButton, IonCardTitle, IonSpinner } from "@ionic/angular/standalone";

@Component({
  selector: 'app-dashborad',
  standalone: true,
  imports: [IonSpinner, IonCardTitle, IonBackButton, IonContent, IonCardHeader, IonButtons, IonCard, IonTitle, IonToolbar, IonCardContent, IonHeader, RouterOutlet, CommonModule],
  templateUrl:'./dashboard.page.html',
  styleUrl: './dashboard.page.scss'
})
export class AppComponent {

  private url = 'https://api.worldsacross.com/api/auth/staff/login';

  userData: any[] = [];

  loginData: any = {
    email: 'manuelpopm@gmail.com',  
    password: 'Manuel2402.'   
  };

  login(loginData: any): Observable<any> {
    return this.http.post<any>(this.url, loginData);
  }

  constructor(private http: HttpClient) {
    this.login(this.loginData).subscribe({
      next: (response) => {
        console.log(response['user'])

        this.userData.push({
          nombre: response['user']['first_name'],
          apellido: response['user']['last_name'],
          cumpleanios: response['user']['birth_date'],
          email: response['user']['email'],
          genero: response['user']['gender'] === 'male' ? 'masculino' : 'femenino',
          nacionalidad: response['user']['nationality'],
          imagen: response['user']['staff_img']
        });
        
        console.log(this.userData)
        return this.userData
      },
      error: (error) => {
        console.error('Error:', error); 
      },
      complete: () => {
        console.log('Login request completed.');
      }
    });

  }

 



  

}