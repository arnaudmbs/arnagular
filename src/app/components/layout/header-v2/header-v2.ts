import { Component, inject, input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { PreferenceService } from '../../../services/preference-service';
import { MatToolbar } from '@angular/material/toolbar';
import { TitleCasePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatButton, MatIconButton } from '@angular/material/button';

interface NavLink {
  label: string;
  path: string;
}

@Component({
  imports: [MatToolbar, TitleCasePipe, RouterLink, RouterLinkActive, MatIcon, MatMenu, MatMenuItem, MatMenuTrigger, MatIconButton,MatButton],
  selector: 'app-header-v2',
  styleUrl: './header-v2.scss',
  templateUrl: './header-v2.html',
})
export class HeaderV2 {

  private router = inject(Router);
  private preferenceService = inject(PreferenceService);

  titleHeader = input.required<string>();

  navLinks: NavLink[] = [
    { label: "Text-Interpolation", path: "/textinterpolation" },
    { label: "Bindings", path: "/bindings" },
    { label: "Control-Flow", path: "/controlflow" },
    { label: "ExosBindings", path: "/exosbindings" },
    { label: "Signals", path: "/signals" },
    { label: "ExosSignals", path: "/exossignals" },
    { label: "Input", path: "/produits" },
    { label: "Output", path: "/votation" },
    { label: "ExosIO", path: "/exosio" },
    { label: "Pipes", path: "/pipes" },
    { label: "Material", path: "/produitsv2" },
    { label: "ExosMat", path: "/exosmat" },
    { label: "Produits HTTP", path: "/produitshttp" },
    { label: "SignalForm", path: "/signalform" }
  ]

  goToWelcome() {
    this.router.navigate(['welcome']);
  }
}
