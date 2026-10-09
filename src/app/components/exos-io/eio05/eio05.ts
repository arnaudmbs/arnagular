import { Component } from '@angular/core';
import { Eio05Enfant } from './eio05-enfant/eio05-enfant';

@Component({
  imports: [Eio05Enfant],
  selector: 'app-eio05',
  styleUrl: './eio05.scss',
  templateUrl: './eio05.html',
})
export class Eio05 {
  nombreAlerte: number = 0;

  onAlerteRecu() {
    this.nombreAlerte++;
  }
}
