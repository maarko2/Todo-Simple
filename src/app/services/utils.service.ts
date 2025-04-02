import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
//import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loadingCtrl = inject(LoadingController);
  router = inject(Router);
  toastCtrl = inject(ToastController);

  // =========== Loading ============
  loading(){
    return this.loadingCtrl.create({spinner: 'crescent'})
  }

  // =========== Enruta a cualquier página disponible ============
  routerLink(url: string){
    return this.router.navigateByUrl(url);
  }

  // =========== Guarda un elemento en localstorage ============
  saveInLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value))
  }

  // =========== Obtiene un elemento desde localstorage ============
  getFromLocalStorage(key: string){
    return JSON.parse(localStorage.getItem(key))
  }

  // =========== Presenta un Toast ============
  async presentToast(opts?: any) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }

}
