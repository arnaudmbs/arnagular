import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-es07',
  styleUrl: './es07.scss',
  templateUrl: './es07.html',
})
export class Es07 {
  temperatureCelsius = signal(0);

  temperatureFahrenheit = computed(() => (this.temperatureCelsius() * 9 / 5) + 32);

  description = computed(() => {
    if (this.temperatureFahrenheit() < 50) {
      return "Froid";
    } else if (this.temperatureFahrenheit() < 77) {
      return "Tiède";
    } else {
      return "Chaud";
    }
  });
}
