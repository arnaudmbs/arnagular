import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IArticle } from '../../../model/IArticle';

type Filtre = 'tous' | 'fruit' | 'legume' | 'boisson';

@Component({
  imports: [FormsModule],
  selector: 'app-app-eb10',
  styleUrl: './app-eb10.scss',
  templateUrl: './app-eb10.html',
})
export class AppEb10 {
  articles: IArticle[] = [
    { id: 1, nom: 'Pomme', prix: 0.5, categorie: 'fruit', stock: 10 },
    { id: 2, nom: 'Banane', prix: 0.3, categorie: 'fruit', stock: 0 },
    { id: 3, nom: 'Carotte', prix: 0.8, categorie: 'legume', stock: 5 },
    { id: 4, nom: 'Salade', prix: 1.2, categorie: 'legume', stock: 0 },
    { id: 5, nom: "Jus d'orange", prix: 2.5, categorie: 'boisson', stock: 8 },
    { id: 6, nom: 'Eau gazeuse', prix: 1.0, categorie: 'boisson', stock: 20 },
  ];

  filtre: Filtre = 'tous';
  cacherRupture: boolean = false

  get articlesFiltres(): IArticle[] {
    return this.articles.filter(article => (this.filtre === 'tous' || this.filtre === article.categorie) && (!this.cacherRupture || article.stock > 0));
  }

  setFiltre(filtre: Filtre): void {
    this.filtre = filtre;
  }

  acheter(article: IArticle): void {
    if (article.stock > 0) {
      article.stock = article.stock -1
    }
  }
}
