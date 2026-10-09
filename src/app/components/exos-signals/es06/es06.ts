import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-es06',
  styleUrl: './es06.scss',
  templateUrl: './es06.html',
})
export class Es06 {
  taches = signal<string[]>([]);
  tache: string = '';

  nombreTaches = computed (() => this.taches().length);

  ajouterTache(): void {
    if (this.tache != '') {
      this.taches.update(tacheList => [...tacheList,this.tache]);
      this.tache = '';
    }
  }
}
