import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-predictions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.css'],
})
export class PredictionsComponent implements OnInit {
  estacion: string = '';
  fecha: string = '';
  hora: string = '';
  prediccionRealizada: boolean = false;
  numeroPredicho: number = 0;
  horas: string[] = [];
  stations: string[] = [
    'Villa el Salvador', 'Parque Industrial', 'Maria Auxiliadora', 'Villa Maria',
    'San Juan', 'Atocongo', 'Jorge Chavez', 'Ayacucho', 'Cabitos', 'Angamos',
    'San Borja Sur', 'La Cultura', 'Nicolas Arriola', 'Gamarra', 'Grau',
    'El Angel', 'Presbitero Maestro', 'Caja de Agua', 'Piramide del Sol',
    'Los Jardines', 'Los Postes', 'San Carlos', 'San Martin', 'Santa Rosa',
    'Bayovar', 'Pumacahua'
  ];

  constructor() {
    this.generateHours();
  }

  ngOnInit() {}

  generateHours() {
    for (let i = 5; i <= 23; i++) {
      const hour = i < 10 ? `0${i}` : `${i}`;
      this.horas.push(`${hour}:00`);
    }
  }

  mostrarPrediccion() {
    this.numeroPredicho = Math.floor(Math.random() * 1000) + 1;
    this.prediccionRealizada = true;
  }

  exportarCSV() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Hora,Pasajeros\n";
    csvContent += `${this.hora},${this.numeroPredicho}\n`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "prediccion.csv");
    document.body.appendChild(link);
    link.click();
  }
}

