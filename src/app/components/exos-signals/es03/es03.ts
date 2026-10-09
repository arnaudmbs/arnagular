import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-es03',
  styleUrl: './es03.scss',
  templateUrl: './es03.html',
})
export class Es03 {
  largeur = signal(0);
  hauteur = signal(0);

  surface = computed(() => this.largeur() * this.hauteur());
}
