import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service'; // Cambia según la ruta de tu servicio

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  noticias: any[] = [];
  cargando: boolean = false;
  error: string | null = null;
  categorias: string[] = ['general', 'tecnologia', 'deportes', 'salud'];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
    this.cargarNoticias(); // Cargar noticias generales al iniciar
  }

  cargarNoticias() {
    this.cargando = true;
    this.error = null; // Reiniciar error

    this.noticiasService.getNoticiasGenerales().subscribe(
      (response) => {
        console.log('Respuesta de la API:', response); // Verifica la respuesta
        if (response && response.data) {
          this.noticias = response.data; // Mediastack almacena las noticias en `data`
        } else {
          this.error = 'No se encontraron noticias';
        }
        this.cargando = false;
        console.log('Noticias:', this.noticias);
      },
      (error) => {
        console.error('Error al obtener las noticias:', error);
        this.error = 'Ocurrió un error al cargar las noticias.';
        this.cargando = false; // Asegúrate de desactivar el indicador de carga
      }
    );
  }

  cambiarCategoria(categoria: string) {
    // Mediastack no tiene soporte directo para categorías en su nivel gratuito.
    // Si necesitas categorías, puedes filtrar `this.noticias` en el frontend.
    this.error = 'La API actual no admite categorías específicas.';
    console.warn(this.error);
  }
}
