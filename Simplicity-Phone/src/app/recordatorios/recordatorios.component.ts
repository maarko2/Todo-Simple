import { Component } from '@angular/core';

@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.component.html',
  styleUrls: ['./recordatorios.component.scss'],
})
export class RecordatoriosComponent {
  // Aquí tienes la lista de recordatorios que se va a iterar
  recordatorios = [
    { id: 1, texto: 'Recordatorio 1' },
    { id: 2, texto: 'Recordatorio 2' },
    { id: 3, texto: 'Recordatorio 3' },
    { id: 4, texto: 'Recordatorio 4' },
    { id: 5, texto: 'Recordatorio 5' },
  ];

  constructor() {}
}
