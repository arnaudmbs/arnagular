import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-app-eb2',
  styleUrl: './app-eb2.scss',
  templateUrl: './app-eb2.html',
})
export class AppEb2 {
  imageUrl: string = 'https://picsum.photos/200'
  lien: string = 'https://angular.dev'
  desactive: boolean = true

  toggleButton(): void {
    this.desactive = !(this.desactive);
  }
}