import { Component, input, output } from '@angular/core';
import { IProduitSimple } from '../../../../model/IProduitSimple';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-eio10-enfant',
  styleUrl: './eio10-enfant.scss',
  templateUrl: './eio10-enfant.html',
})
export class Eio10Enfant {
  produit = input.required<IProduitSimple>()
  ajouteAuPanier = output<IProduitSimple>()

  ajouterAuPanier(produit: IProduitSimple) {
    // .emit(value) envoie value au parent
    this.ajouteAuPanier.emit(produit);
    this.produit().stock--;
  }
}
