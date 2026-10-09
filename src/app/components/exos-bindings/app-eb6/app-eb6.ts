import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-app-eb6',
  styleUrl: './app-eb6.scss',
  templateUrl: './app-eb6.html',
})
export class AppEb6 {
  nom: string = '';
  age: number = 20;
  accepte: boolean = false;

  reset(): void {
    this.nom = '';
    this.age = 0;
    this.accepte = false;
  }
}
