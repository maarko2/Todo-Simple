import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { Reminder } from '../models/reminder.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.page.html',
  styleUrls: ['./recordatorios.page.scss'],
})
export class RecordatoriosPage implements OnInit {
  reminders: Reminder[] = [];
  userName: string = '';

  constructor(
    private firebaseService: FirebaseService,
    private afAuth: AngularFireAuth, // Inyectamos AngularFireAuth
    private router: Router
  ) {}

  ngOnInit() {
    this.verificarAutenticacion();
  }

  verificarAutenticacion() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        // Si el usuario está autenticado, obtener el nombre del usuario
        this.userName = user.displayName || 'Usuario';
        // Cargar los recordatorios
        this.cargarRecordatorios();
      } else {
        console.error("Usuario no autenticado.");
        // Opcional: redirigir a una página de inicio de sesión
      }
    });
  }

  cargarRecordatorios() {
    this.firebaseService.getReminders()?.subscribe(
      (reminders) => {
        if (reminders && reminders.length > 0) {
          console.log("Recordatorios obtenidos:", reminders);
          this.reminders = reminders; 
        } else {
          console.log("No se encontraron recordatorios.");
          this.reminders = []; 
        }
      },
      (error) => {
        console.error('Error al obtener recordatorios:', error);
      }
    );
  }

  crearNuevoRecordatorio() {
    this.router.navigate(['/nuevo-recordatorio']);
  }
}
