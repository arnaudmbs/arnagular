import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-es01',
  styleUrl: './es01.scss',
  templateUrl: './es01.html',
})
export class Es01 {
  compteur = signal(0);

  incrementer(): void {
    this.compteur.update(valeur => valeur + 1);
  }

  decrementer(): void {
    if (this.compteur() > 0) {
      this.compteur.update(valeur => valeur - 1);
    }
  }
}
