import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, RouterOutlet, RouterLink],
})
export class AppComponent {
  constructor() {}
}
