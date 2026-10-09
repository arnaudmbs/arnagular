import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  imports: [FormsModule,RouterOutlet],
  selector: 'app-exos-signals',
  styleUrl: './exos-signals.scss',
  templateUrl: './exos-signals.html',
})
export class ExosSignals {

  private routeService = inject(ActivatedRoute);
  private router = inject(Router);

  sousComposants: string[] = [
    'es01',
    'es02',
    'es03',
    'es04',
    'es05',
    'es06',
    'es07',
    'es08',
    'es09',
    'es10',
  ];

  selectedSousComponant: string = this.sousComposants[this.sousComposants.length-1];

  goToExercice(){
    this.router.navigate(['exossignals',this.selectedSousComponant]);
  }

}
