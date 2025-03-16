import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Reminder } from 'src/app/models/reminder.model';

@Component({
  selector: 'app-nuevo-recordatorio',
  templateUrl: './nuevo-recordatorio.page.html',
  styleUrls: ['./nuevo-recordatorio.page.scss'],
})
export class NuevoRecordatorioPage implements OnInit {
  reminderForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.reminderForm = this.fb.group({
      name: ['', Validators.required],
      time: ['', Validators.required],
      days: [[], Validators.required],
    });
  }
  days = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];

  toggleDay(day: string) {
    const daysControl = this.reminderForm.get('days');
    const selectedDays = daysControl?.value || [];

    if (selectedDays.includes(day)) {
      daysControl?.setValue(selectedDays.filter((d) => d !== day));
    } else {
      daysControl?.setValue([...selectedDays, day]);
    }
  }

  async addReminder() {
    if (this.reminderForm.valid) {
      const reminder: Reminder = {
        ...this.reminderForm.value,
        userId: this.firebaseService.getAuth().currentUser?.uid || '',
      };

      try {
        await this.firebaseService.addReminder(reminder);
        console.log('Recordatorio guardado con éxito');
        this.reminderForm.reset(); // Limpiar formulario
      } catch (error) {
        console.error('Error al guardar recordatorio:', error);
      }
    }
  }
}
