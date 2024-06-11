import { Component } from '@angular/core';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrl: './top-toolbar.component.scss'
})
export class TopToolbarComponent {
  public cellphones = [
    {
      title: 'Arrendamientos',
      phone: '(+57) 300 341 9743',
      href: '+573003419743'
    },
    {
      title: 'Ventas',
      phone: '(+57) 312 733 8964',
      href: '+573127338964'
    },
    {
      title: 'Administrativo',
      phone: '(+57) 302 383 4987',
      href: '+573023834987'
    }
  ];
}
