import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonInput } from '@ionic/angular/standalone';
import { LoginService } from 'src/app/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonInput,
    IonItem,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginPage implements OnInit {
  form: FormGroup = new FormGroup({});
  email: string = '';
  password: string = '';
  data: any;

 
  constructor(private fb: FormBuilder, private service: LoginService, private router:Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,  Validators.pattern('^(?=.*[A-Z])(?=.*\\d)(?=.*[!@#.$%^&*()_+{}:"<>?])[A-Za-z\\d!@#.$%^&*()_+{}:"<>?]{8,}$')
      ]]
    });
  }
  ngOnInit() {
  }

  enviarForm() {
    if (this.form.valid) {
      this.data = this.form.value;
      this.service.login(this.data).subscribe(
        response => {
          console.log(response);
          localStorage.setItem('token', response.access_token);
          localStorage.setItem('name', response.user.first_name + response.user.last_name);
          localStorage.setItem('img', response.user + response.user.staff_img)
          this.router.navigate(['/dashboardPage']);
        },
        error => console.log(error)
      );
    }
  }
}
