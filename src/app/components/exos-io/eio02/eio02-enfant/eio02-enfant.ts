import { Component, computed, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-eio02-enfant',
  styleUrl: './eio02-enfant.scss',
  templateUrl: './eio02-enfant.html',
})
export class Eio02Enfant {
  note = input.required<number>();
  prenom = input.required<string>();

  couleurBadge = computed(() => {
    if (this.note() < 10) {
      return '#ff0000';
    } else if (this.note() < 14) {
      return '#ffa500';
    } else {
      return '#008000';
    }
  });
}
