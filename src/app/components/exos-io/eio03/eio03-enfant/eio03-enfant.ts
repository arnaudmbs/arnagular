import { Component, input } from '@angular/core';
import { IContact } from '../../../../model/IContact';

@Component({
  imports: [],
  selector: 'app-eio03-enfant',
  styleUrl: './eio03-enfant.scss',
  templateUrl: './eio03-enfant.html',
})
export class Eio03Enfant {
  contact = input.required<IContact>();
}
