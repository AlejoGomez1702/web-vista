import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
})

export class OurTeamComponent implements OnInit {

  public employees: Employee[] = [
    {
      img_url: 'assets/images/vista/agentes/6.jpg',
      name: 'Florencia Puentes',
      role: 'Agente Inmobiliario',
      cellphone: '+57 322 263 9526'
    },
    {
      img_url: 'assets/images/vista/agentes/13.jpg',
      name: 'Luis Garcia',
      role: 'Agente Inmobiliario',
      cellphone: '+57 310 263 1464'
    },
    {
      img_url: 'assets/images/vista/agentes/23.jpg',
      name: 'Jhonatan Ramirez',
      role: 'Agente Inmobiliario',
      cellphone: '+57 301 467 1842'
    },
    {
      img_url: 'assets/images/vista/agentes/8.jpg',
      name: 'Kathery Murillo',
      role: 'Agente Inmobiliario',
      cellphone: '+57 322 263 9527'
    },
    {
      img_url: 'assets/images/vista/agentes/11.jpg',
      name: 'Natalia Lozano',
      role: 'Agente Inmobiliario',
      cellphone: '+57 313 339 2634'
    },
    {
      img_url: 'assets/images/vista/agentes/12.jpg',
      name: 'Olga Puentes',
      role: 'Agente Inmobiliario',
      cellphone: '+57 301 247 0202'
    },
    {
      img_url: 'assets/images/vista/agentes/14.png',
      name: 'Fabio Puentes',
      role: 'Gerente General',
      cellphone: '+57 301 757 0879'
    },
    {
      img_url: 'assets/images/vista/agentes/15.jpg',
      name: 'Wilson Ladino',
      role: 'Agente Inmobiliario',
      cellphone: '+57 301 375 5946'
    },
    {
      img_url: 'assets/images/vista/agentes/3.jpg',
      name: 'Sebastian Duque',
      role: 'Agente Audiovisual',
      cellphone: '+57 314 299 7669'
    },
    {
      img_url: 'assets/images/vista/agentes/18.jpg',
      name: 'César Sánchez Castañeda',
      role: 'Agente Inmobiliario',
      cellphone: '+57 305 815 9543'
    },
    {
      img_url: 'assets/images/vista/agentes/21.jpg',
      name: 'Jaime Hernan Roman',
      role: 'Agente de Captaciones',
      cellphone: '+57 302 243 3638'
    },
    {
      img_url: 'assets/images/vista/agentes/17.jpg',
      name: 'Ana María Perez',
      role: 'Auxiliar Administrativa',
      cellphone: '+57 302 383 4987'
    },
    {
      img_url: 'assets/images/vista/agentes/19.jpg',
      name: 'Paula Andrea Carvajal',
      role: 'Contadora',
      cellphone: '+57 310 370 9146'
    },
    {
      img_url: 'assets/images/vista/agentes/20.jpg',
      name: 'Caterine Ladino Galvis',
      role: 'Lider Administrativa',
      cellphone: '+57 302 460 1057'
    }
  ];

  public slider:any;
  public defaultTransform:any;


  constructor() { }

  ngOnInit(): void {
    this.slider = document.getElementById("slider");
    this.defaultTransform=0
  }

  goNext() {
    this.defaultTransform = this.defaultTransform - 319;
    if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 1.7) this.defaultTransform = 0;
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  }

  goPrev() {
    if (Math.abs(this.defaultTransform) === 0) this.defaultTransform = 0;
    else this.defaultTransform = this.defaultTransform + 319;
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  }
  getColWidth(): number {
    const gridColumns = 6;
    const totalWidth = window.innerWidth;
    const columnWidth = totalWidth / gridColumns;
    return columnWidth;
  }


}

