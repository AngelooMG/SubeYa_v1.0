import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  activeRoute: string = 'inicio'; // Inicializamos con la ruta de "Inicio"

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.urlAfterRedirects === '/') {
          this.activeRoute = 'inicio';
        } else if (event.urlAfterRedirects.includes('/predictions')) {
          this.activeRoute = 'predicciones';
        } else if (event.urlAfterRedirects.includes('/about')) {
          this.activeRoute = 'acerca-de';
        } else if (event.urlAfterRedirects.includes('/contact')) {
          this.activeRoute = 'contacto';
        } else {
          this.activeRoute = ''; // O algún valor por defecto si no coincide con ninguna ruta
        }
      });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToAbout(event: Event) {
    event?.preventDefault();
    this.router.navigate(['/about']);
  }

  navigateToContact(event: Event) {
    event?.preventDefault();
    this.router.navigate(['/contact']);
  }

  navigateToPredictions(event: Event) {
    event?.preventDefault();
    this.router.navigate(['/predictions']);
  }

  setActive(route: string) {
    this.activeRoute = route;
  }
}