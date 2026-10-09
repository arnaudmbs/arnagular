import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-app-eb1',
  styleUrl: './app-eb1.scss',
  templateUrl: './app-eb1.html',
})
export class AppEb1 {
  prenom: string = 'Alice';
  age: number = 28;
  prixHT: number = 120;
  readonly tva:number = 0.20;

  calculerPrixTtc(): number {
    return (this.prixHT*this.tva)+this.prixHT;
  }
}
