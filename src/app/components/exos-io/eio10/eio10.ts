import { Component, computed, signal } from '@angular/core';
import { Eio10Enfant } from './eio10-enfant/eio10-enfant';
import { IProduitSimple } from '../../../model/IProduitSimple';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [Eio10Enfant,CurrencyPipe],
  selector: 'app-eio10',
  styleUrl: './eio10.scss',
  templateUrl: './eio10.html',
})
export class Eio10 {
  produits: IProduitSimple[] = [
    {nom: "Clavier mécanique", prix: 69.99, stock: 5},
    {nom: "Souris basique", prix: 19.99, stock: 4},
    {nom: "Ecran Dell 27 pouces", prix: 269.99, stock: 3},
    {nom: "Casque Audio Jabra", prix: 89.99, stock: 8}
  ];
  panier = signal<IProduitSimple[]>([])

  totalPanier = computed(() => 
    this.panier().reduce((total, produit) => total + produit.prix, 0)
  );

  onProduitAjouteAuPanier(produit: IProduitSimple): void {
    this.panier.update(produitsActuels => [...produitsActuels, produit]);
  }
}
