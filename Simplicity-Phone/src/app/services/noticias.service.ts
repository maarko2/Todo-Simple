import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private apiKey = 'a73b27fc94edbd57b444a6394135d65c';
  private baseUrl = 'http://api.mediastack.com/v1/news'; // URL base de Mediastack

  constructor(private http: HttpClient) {}

  /**
   * Obtener noticias filtradas por país y categoría.
   * Mediastack no tiene un parámetro de categoría, por lo que filtrarás por país y/o idioma.
   */
  obtenerNoticias(pais: string): Observable<any> {
    const url = `${this.baseUrl}?access_key=${this.apiKey}&countries=${pais}&languages=es&limit=10`;
    return this.http.get(url);
  }

  /**
   * Obtener noticias generales (sin categoría específica).
   */
  getNoticiasGenerales(): Observable<any> {
    const url = `${this.baseUrl}?access_key=${this.apiKey}&languages=es&countries=cl&limit=10`;
    return this.http.get<any>(url);
  }
}
