import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-es08',
  styleUrl: './es08.scss',
  templateUrl: './es08.html',
})
export class Es08 {
  mot = signal('');
  historique:string[]=[];

  ajouterMot() {
    if (this.mot() != '') {
      this.historique.push(this.mot());
    }
  }

  constructor () {
    effect(() => this.ajouterMot());
  }
}
