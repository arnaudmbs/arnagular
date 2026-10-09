import { Component } from '@angular/core';
import { Eio02Enfant } from './eio02-enfant/eio02-enfant';

interface Eleve {
  prenom: string;
  note: number;
}

@Component({
  imports: [Eio02Enfant],
  selector: 'app-eio02',
  styleUrl: './eio02.scss',
  templateUrl: './eio02.html',
})
export class Eio02 {
  eleves : Eleve[] = [
    {prenom: 'Alice', note: 14},
    {prenom: 'Bob', note: 10},
    {prenom: 'Charles', note: 8},
    {prenom: 'Diana', note: 12},
    {prenom: 'Eric', note: 6},
    {prenom: 'Félix', note: 16},
    {prenom: 'Géraldine', note: 18},
    {prenom: 'Henry', note: 13},
    {prenom: 'Idy', note: 19}
  ];
}
