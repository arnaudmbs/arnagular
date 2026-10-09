import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-eio01-enfant',
  styleUrl: './eio01-enfant.scss',
  templateUrl: './eio01-enfant.html',
})
export class Eio01Enfant {
  nom = input('Inconnu');
  poste = input('Collaborateur');
}
