import { Component } from '@angular/core';
import { InAppBrowser} from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private iab: InAppBrowser) {}

  abrirWhatsApp() {
    this.iab.create('https://wa.me/','_system');
  }

  irAHome() {
    this.router.navigate(['/home'])
  }

  irANoticias() {
    this.router.navigate(['/noticias'])
  }
  
}
