import { Component, inject, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router: Router, private iab: InAppBrowser) {}

  hacerLlamada() {
    const numeroTelefono = ''; // Si quiero llamar algun numero en especifico
    this.iab.create(`tel:${numeroTelefono}`, '_system');
  }
  abrirWhatsApp() {
    this.iab.create('whatsapp://', '_system');
  }
  

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  signOut(){
    this.firebaseSvc.signOut();
  }
  
  // Este metodo se llama automaticamente cuando la aplicacion este funcionando, asi que aqui llamo a updateTime para que funcione siempre que la aplicacion este funcionando
  ngOnInit() {
    this.updateTime();
  }

  updateTime() {
    setInterval(() => {
      const timeElement = document.getElementById('time');
      const dateElement = document.getElementById('date');

      const now = new Date();

      // Formatear hora y minutos
      const hours = this.padZero(now.getHours());
      const minutes = this.padZero(now.getMinutes());

      if (timeElement) {
        timeElement.textContent = `${hours}:${minutes}`;
      }

      // Formatear día de la semana y fecha
      const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 
        'Octubre', 'Noviembre', 'Diciembre'
      ];
      const dayOfWeek = days[now.getDay()];
      const day = now.getDate();
      const month = months[now.getMonth()];
      const year = now.getFullYear();

      if (dateElement) {
        dateElement.textContent = `${dayOfWeek}, ${day} de ${month} del ${year}`;
      }
    }, 1000); // Actualizar cada 1 segundo

  }
  //Visualizar los numeros menores a 10 con un 0 a la izquierda
  padZero(num: number) {
    return num < 10 ? '0' + num : num.toString();
  }
}

