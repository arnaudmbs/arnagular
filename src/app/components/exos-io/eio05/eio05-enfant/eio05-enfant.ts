import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-eio05-enfant',
  styleUrl: './eio05-enfant.scss',
  templateUrl: './eio05-enfant.html',
})
export class Eio05Enfant {
  alerte = output<void>();

  declencherAlerte():void {
    this.alerte.emit();
  }
}
