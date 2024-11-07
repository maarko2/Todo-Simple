import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-nuevo-recordatorio',
  templateUrl: './nuevo-recordatorio.page.html',
  styleUrls: ['./nuevo-recordatorio.page.scss'],
})
export class NuevoRecordatorioPage implements OnInit {
  recordatorioForm: FormGroup;
  dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']; // Días de la semana

  constructor(private firebaseService: FirebaseService, private fb: FormBuilder) {
    this.recordatorioForm = this.fb.group({
      nombre: ['', Validators.required], // Nombre del medicamento
      dias: [[], Validators.required],   // Días seleccionados (como array)
      hora: ['', Validators.required],   // Hora del recordatorio
      foto: [null],                      // Foto del medicamento (si aplica)
    });
  }

  ngOnInit() {
    const user = getAuth().currentUser; // Obtiene el usuario logueado
    if (user) {
      // Establece el UID del usuario logueado cuando envíes los datos
      this.recordatorioForm.get('uid')?.setValue(user.uid);
    }
  }

  // Método para manejar la selección de días
  onDaySelect(day: string, event: any) {
    const selectedDays = this.recordatorioForm.get('dias')?.value || [];
    if (event.detail.checked) {
      selectedDays.push(day);  // Si está seleccionado, agrega el día al array
    } else {
      const index = selectedDays.indexOf(day);
      if (index !== -1) {
        selectedDays.splice(index, 1);  // Si está desmarcado, remueve el día
      }
    }
    this.recordatorioForm.get('dias')?.setValue(selectedDays);  // Actualiza el valor del formulario
  }

  // Verifica si un día está seleccionado
  isDaySelected(day: string): boolean {
    const selectedDays = this.recordatorioForm.get('dias')?.value || [];
    return selectedDays.includes(day);
  }

  async submit() {
    if (this.recordatorioForm.valid) {
      try {
        const user = getAuth().currentUser;
        if (user) {
          // Agrega el UID del usuario manualmente antes de guardar
          const recordatorioData = {
            ...this.recordatorioForm.value,
            uid: user.uid, // Asegúrate de que se incluye el UID aquí
          };
          
          // Guarda el recordatorio en Firestore con el UID del usuario
          await this.firebaseService.setRecordatorio(recordatorioData);
          console.log("Recordatorio agregado exitosamente");
        }
      } catch (error) {
        console.error("Error al guardar el recordatorio:", error);
      }
    }
  }
}
