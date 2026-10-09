import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-app-eb5',
  styleUrl: './app-eb5.scss',
  templateUrl: './app-eb5.html',
})
export class AppEb5 {
  compteur: number = 0;
  dernierePosition = {x: 0, y: 0};

  incrementer(): void {
    this.compteur++;
  }

  reset(): void {
    this.compteur = 0;
  }

  onMove(event: MouseEvent): void {
    this.dernierePosition.x = event.offsetX;
    this.dernierePosition.y = event.offsetY;
  }

  onLeave(): void {
    this.dernierePosition.x = 0;
    this.dernierePosition.y = 0;
  }
}
