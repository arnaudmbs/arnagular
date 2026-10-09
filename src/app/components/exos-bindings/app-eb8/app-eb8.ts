import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface  ITache {id: number, libelle: string};

@Component({
  imports: [FormsModule],
  selector: 'app-app-eb8',
  styleUrl: './app-eb8.scss',
  templateUrl: './app-eb8.html',
})

export class AppEb8 {

  taches: ITache[] =
  [
    {id: 1, libelle: "Ecrire"},
    {id: 2, libelle: "Lire"},
    {id: 3, libelle: "Dessiner"}
  ];
  nouvelle: string ='';
  uniqueIndex: number = this.taches.length;

  ajouter(): void {
    if (this.nouvelle !== '') {
      this.uniqueIndex++;
      this.taches.push({id: this.uniqueIndex, libelle: this.nouvelle})
    }
  }
  supprimer(id: number): void {
    this.taches = this.taches.filter(tache => tache.id !== id)
  }

}

