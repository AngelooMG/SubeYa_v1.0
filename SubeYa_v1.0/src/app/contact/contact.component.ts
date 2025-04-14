import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  mensaje: string = '';

  onSubmit() {
    // Here you would typically handle the form submission
    console.log('Form submitted', { nombre: this.nombre, apellido: this.apellido, correo: this.correo, mensaje: this.mensaje });
  }
}