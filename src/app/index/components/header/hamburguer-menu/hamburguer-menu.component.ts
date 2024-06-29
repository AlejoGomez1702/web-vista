import { Component, output } from '@angular/core';

@Component({
  selector: 'app-hamburguer-menu',
  templateUrl: './hamburguer-menu.component.html',
  styleUrl: './hamburguer-menu.component.scss'
})
export class HamburguerMenuComponent {

  onCloseMenu = output<void>();

  toggleMenu() {
    this.onCloseMenu.emit();
  }

}
