import { Component } from '@angular/core';
import { Eio01 } from './eio01/eio01';
import { Eio02 } from './eio02/eio02';
import { Eio03 } from './eio03/eio03';
import { Eio04 } from './eio04/eio04';
import { Eio05 } from './eio05/eio05';
import { Eio06 } from './eio06/eio06';
import { Eio07 } from './eio07/eio07';
import { Eio08 } from './eio08/eio08';
import { Eio09 } from './eio09/eio09';
import { Eio10 } from './eio10/eio10';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [Eio01,Eio02,Eio03,Eio04,Eio05,Eio06,Eio07,Eio08,Eio09,Eio10,FormsModule],
  selector: 'app-exos-io',
  styleUrl: './exos-io.scss',
  templateUrl: './exos-io.html',
})
export class ExosIo {
  sousComposants: string[] = [
    'eio01',
    'eio02',
    'eio03',
    'eio04',
    'eio05',
    'eio06',
    'eio07',
    'eio08',
    'eio09',
    'eio10',
  ];

  selectedSousComponant: string = this.sousComposants[this.sousComposants.length-1];
}
