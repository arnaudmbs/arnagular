import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-es02',
  styleUrl: './es02.scss',
  templateUrl: './es02.html',
})
export class Es02 {
    prenom = signal<string>('');
}
