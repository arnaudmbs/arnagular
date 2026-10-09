import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-es05',
  styleUrl: './es05.scss',
  templateUrl: './es05.html',
})
export class Es05 {
  noteMath = signal(0);
  noteFrancais = signal(0);
  noteHistoire = signal(0);

  moyenne = computed(() => (this.noteMath() + this.noteFrancais() + this.noteHistoire())/3);
}
