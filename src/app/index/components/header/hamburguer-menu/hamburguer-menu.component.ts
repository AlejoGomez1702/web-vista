import { Component, output } from '@angular/core';

@Component({
  selector: 'app-hamburguer-menu',
  templateUrl: './hamburguer-menu.component.html',
  styleUrl: './hamburguer-menu.component.scss'
})
export class HamburguerMenuComponent {

  public onCloseMenu = output<void>();

  public saleOptions: boolean = false;
  public saleOptionsList = [
    { name: 'Apartaestudio', link: '/' },
    { name: 'Apartamento', link: '/' },
    { name: 'Bodega', link: '/' },
    { name: 'Cabaña', link: '/' },
    { name: 'Casa', link: '/' },
    { name: 'Casa Campestre', link: '/' },
    { name: 'Casa Comercial', link: '/' },
    { name: 'Casa con Renta', link: '/' },
  ];

  toggleMenu() {
    this.onCloseMenu.emit();
  }

  toggleSaleOptions() {
    this.saleOptions = !this.saleOptions;
  }

}
