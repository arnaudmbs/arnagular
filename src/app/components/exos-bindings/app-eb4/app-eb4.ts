import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-app-eb4',
  styleUrl: './app-eb4.scss',
  templateUrl: './app-eb4.html',
})
export class AppEb4 {
  taille:number = 16;
  couleur:string = '#3366ff';
}
