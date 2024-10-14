import { Component } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.component.html',
  styleUrls: ['./recordatorios.component.scss'],
})
export class RecordatoriosComponent {
  mostrarFormulario = false;
  userName: string | null = null;

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

  constructor(private utilsSvc: UtilsService) {
    this.getUserName();
  }

  getUserName() {
    const user = this.utilsSvc.getFromLocalStorage('user');
    if (user) {
      this.userName = user.name;
    }
  }

  toggleForm() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  agregarRecordatorio() {
    const diasSeleccionados = this.diasSemana.filter(dia => dia.seleccionado).map(dia => dia.nombre);
    const fechas = this.generarFechasParaDias(diasSeleccionados);
    this.nuevoRecordatorio.dias = fechas;

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

  formatHora(hora: string): string {
    const date = new Date(`1970-01-01T${hora}:00`); // Usamos una fecha base
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  generarFechasParaDias(dias: string[]): string[] {
    const hoy = new Date();
    const diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    
    return dias.map(dia => {
      const diaIndex = diasDeLaSemana.indexOf(dia);
      const fecha = new Date(hoy);
      
      // Calcula el número de días hasta el día seleccionado
      const diasHasta = (diaIndex - hoy.getDay() + 7) % 7; // Usa getDay() para obtener el índice del día actual
      fecha.setDate(hoy.getDate() + (diasHasta === 0 ? 0 : diasHasta)); // Si es el mismo día, no añade días
  
      return fecha.toLocaleDateString(); // Ajusta el formato según lo necesites
    });
  }
  
}
