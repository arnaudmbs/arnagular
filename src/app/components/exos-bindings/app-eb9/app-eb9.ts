import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-app-eb9',
  styleUrl: './app-eb9.scss',
  templateUrl: './app-eb9.html',
})
export class AppEb9 {
  role: 'admin' | 'user' | 'guest' | 'autre' = 'user';
  roles: string[] = ['admin', 'user', 'guest', 'autre'];
  selectRole = 'user';
}
