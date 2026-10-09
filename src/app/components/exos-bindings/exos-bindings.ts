import { Component } from '@angular/core';
import { AppEb1 } from './app-eb1/app-eb1';
import { AppEb2 } from './app-eb2/app-eb2';
import { AppEb3 } from './app-eb3/app-eb3';
import { AppEb4 } from './app-eb4/app-eb4';
import { AppEb5 } from './app-eb5/app-eb5';
import { AppEb6 } from './app-eb6/app-eb6';
import { AppEb7 } from './app-eb7/app-eb7';
import { AppEb8 } from './app-eb8/app-eb8';
import { AppEb9 } from './app-eb9/app-eb9';
import { FormsModule } from '@angular/forms';
import { AppEb10 } from './app-eb10/app-eb10';

@Component({
  imports: [AppEb1,
            AppEb2,
            AppEb3,
            AppEb4,
            AppEb5,
            AppEb6,
            AppEb7,
            AppEb8,
            AppEb9,
            AppEb10,
            FormsModule],
  selector: 'app-exos-bindings',
  styleUrl: './exos-bindings.scss',
  templateUrl: './exos-bindings.html',
})
export class ExosBindings {
  sousComposants: string[] = [
    'app-app-eb1',
    'app-app-eb2',
    'app-app-eb3',
    'app-app-eb4',
    'app-app-eb5',
    'app-app-eb6',
    'app-app-eb7',
    'app-app-eb8',
    'app-app-eb9',
    'app-app-eb10'
  ];

  selectedSousComponant: string = this.sousComposants[this.sousComposants.length-1];
}
