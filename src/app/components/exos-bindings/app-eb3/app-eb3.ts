import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-app-eb3',
  styleUrl: './app-eb3.scss',
  templateUrl: './app-eb3.html',
})
export class AppEb3 {
  actif: boolean = true
  theme: 'clair' | 'sombre' = 'clair'

  toggleActif(): void {
    this.actif = !(this.actif);
  }

  invertTheme(): void {
    if (this.theme === 'clair') {
      this.theme = 'sombre';
    } else {
      this.theme = 'clair';
    }
  }
}
