import { Component } from '@angular/core';
import { IProduitLocal } from '../../model/IProduitLocal';
import { ProduitCard } from '../produit-card/produit-card';

@Component({
  imports: [ProduitCard],
  selector: 'app-produit-list',
  styleUrl: './produit-list.scss',
  templateUrl: './produit-list.html',
})
export class ProduitList {

  // Tableau de valeurs en local -> devra être remplacé par un service
  // qui nous fournira les produits
  private produits: IProduitLocal[] = [
    {ref: "A001", label: "Clavier mécanique", prix: 69.99, categorie: "Périphérique"},
    {ref: "A001", label: "Souris basique", prix: 19.99, categorie: "Périphérique"},
    {ref: "A001", label: "Ecran Dell 27 pouces", prix: 269.99, categorie: "Ecran"},
    {ref: "A001", label: "Casque Audio Jabra", prix: 89.99, categorie: "Audio"},
    {ref: "A001", label: "Ecouteurs JBL", prix: 59.99, categorie: "Audio"},
    {ref: "A001", label: "Bureau", prix: 369.99, categorie: "Décoration"}
  ];

}
