import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-es04',
  styleUrl: './es04.scss',
  templateUrl: './es04.html',
})
export class Es04 {
  estVisible = signal<boolean>(false);

  toggleVisible(): void {
    this.estVisible.update(valeur => !valeur);
  }
}
