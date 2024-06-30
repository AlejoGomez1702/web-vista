import { Component, output } from '@angular/core';

@Component({
  selector: 'app-header-desktop',
  templateUrl: './header-desktop.component.html',
  styleUrl: './header-desktop.component.scss'
})
export class HeaderDesktopComponent {

  onCloseMenu = output<void>();

  toggleMenu() {
    this.onCloseMenu.emit();
  }

}
