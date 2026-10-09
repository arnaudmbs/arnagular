import { CurrencyPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule,CurrencyPipe],
  selector: 'app-es09',
  styleUrl: './es09.scss',
  templateUrl: './es09.html',
})
export class Es09 {
  quantite = signal(0);

  prixUnitaire = signal(100);

  sousTotal = computed(() => this.quantite() * this.prixUnitaire());
  tva = computed(() => this.sousTotal() * 0.20);
  totalTTC = computed(() => this.sousTotal() + this.tva());

  incrementer(): void {
    this.quantite.update(valeur => valeur + 1);
  }

  decrementer(): void {
    this.quantite.update(valeur => valeur - 1);
  }
}
