import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private router: Router) {}

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
}