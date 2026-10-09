import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-es10',
  styleUrl: './es10.scss',
  templateUrl: './es10.html',
})
export class Es10 {
  recherche = signal<String>('');
  produits = signal(['Pomme', 'Poire', 'Fraise', 'Mangue', 'Pastèque', 'Papaye']);

  //produitsFiltres = computed(() => this.produits().filter(p => p.toLowerCase().includes(this.recherche().toLowerCase())));

  produitsFiltres = computed(() => {
    if (this.recherche() != '') {
      return this.produits().filter(p => p.toLowerCase().includes(this.recherche().toLowerCase()));
    } else {
      return [];
    }
  });
    
}
