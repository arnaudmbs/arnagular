import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-control-flow',
  styleUrl: './control-flow.scss',
  templateUrl: './control-flow.html',
})
export class ControlFlow {
  
  // --- @if / @else if / @else ---
  isLoggedIn: boolean = false;
  userRole: 'admin' | 'editor' | 'guest' = 'guest';

  // --- @for ---
  fruits: string[] = ["Pomme","Banane","Cerise","Datte","Datte"];
  users: {id: number, name: string}[]=
  [
    {id: 1, name: 'Ada'},
    {id: 2, name: 'Alan'},
    {id: 5, name: 'Grace'},
  ]
  emptyList: string[] = [];

  /// --- @switch ---
  status: 'loading' | 'success' | 'error' = 'success';

  /// --- @let ---
  firstName = "Ada";
  lastName = "Lovelace";

  //Méthodes d'interaction
  toggleLogin(): void {
    this.isLoggedIn = !this.isLoggedIn;
  }

  changeStatuts(value : 'loading' | 'success' | 'error' = 'success'): void {
    this.status = value;
  }

}
