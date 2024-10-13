import { Component } from '@angular/core';

@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.component.html',
  styleUrls: ['./recordatorios.component.scss'],
})
export class RecordatoriosComponent {
  mostrarFormulario = false;

  diasSemana = [
    { nombre: 'Lunes', seleccionado: false },
    { nombre: 'Martes', seleccionado: false },
    { nombre: 'Miércoles', seleccionado: false },
    { nombre: 'Jueves', seleccionado: false },
    { nombre: 'Viernes', seleccionado: false },
    { nombre: 'Sábado', seleccionado: false },
    { nombre: 'Domingo', seleccionado: false },
  ];

  nuevoRecordatorio = {
    texto: '',
    hora: '',
    dias: [],
  };

  recordatorios = [
    { texto: 'Recordatorio 1', hora: '08:00', dias: ['Lunes', 'Miércoles'] },
    { texto: 'Recordatorio 2', hora: '10:00', dias: ['Martes', 'Jueves'] },
  ];

  constructor() {}

  toggleForm() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  agregarRecordatorio() {
    const diasSeleccionados = this.diasSemana.filter(dia => dia.seleccionado).map(dia => dia.nombre);
    this.nuevoRecordatorio.dias = diasSeleccionados;
    
    this.recordatorios.push({ ...this.nuevoRecordatorio });
    this.limpiarFormulario();
  }

  limpiarFormulario() {
    this.nuevoRecordatorio = { texto: '', hora: '', dias: [] };
    this.diasSemana.forEach(dia => dia.seleccionado = false);
    this.mostrarFormulario = false;
  }

  mostrarDiasSeleccionados(dias: string[]): string {
    return dias.join(', ');
  }
}
