import { Component } from '@angular/core';
import { IContact } from '../../../model/IContact';
import { Eio03Enfant } from './eio03-enfant/eio03-enfant';

@Component({
  imports: [Eio03Enfant],
  selector: 'app-eio03',
  styleUrl: './eio03.scss',
  templateUrl: './eio03.html',
})
export class Eio03 {
  contacts : IContact[] = [
    {prenom: 'Alice', nom: 'Zorg', email: 'alice.zorg@gmail.com', ville: 'Toulouse'},
    {prenom: 'Bob', nom: 'Yke', email: 'yke.bob@gmail.com', ville: 'Paris'},
    {prenom: 'Charles', nom: 'Xavier', email: 'xcharles@gmail.com', ville: 'Bordeaux'},
    {prenom: 'Diana', nom: 'Walter', email: 'dianawalter@gmail.com', ville: 'Bordeaux'},
    {prenom: 'Eric', nom: 'Vandorme', email: 'ericv75@gmail.com', ville: 'Paris'},
    {prenom: 'Félix', nom: 'Urche', email: 'urche.felix@gmail.com', ville: 'Toulouse'},
    {prenom: 'Géraldine', nom: 'Trotro', email: 'gegetrotro@gmail.com', ville: 'Lyon'},
    {prenom: 'Henry', nom: 'Sartre', email: 'shenry@gmail.com', ville: 'Nantes'},
    {prenom: 'Idy', nom: 'Ruche', email: 'ruche.idy@gmail.com', ville: 'Paris'}
  ];
}
