import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  currentIndex = 0;
  nextIndex = 0;
  texts = [
    {
      header: 'En Servicio Somos: Rápidos, Atentos Y Profesionales',
      subheader: '#lavidamasfacil',
      styles: {
        header: {
          'font-size': '80px',
          'font-weight': '550',
          'color': 'white',
          'text-align': 'center'
        },
        subheader: {
          'font-size': '30px',
          'font-weight': 'normal',
          'color': '#ffb600',
          'text-align': 'center'
        }
      }
    },
    {
      header: 'Nuestra Imagen Refleja Solidez, Modernismo Y Foco',
      subheader: '',
      styles: {
        header: {
          'font-size': '80px',
          'font-weight': '550',
          'color': 'white',
          'text-align': 'center'
        },
        subheader: {
          'font-size': '18px',
          'font-weight': 'normal',
          'color': 'black',
          'text-align': 'center'
        }
      }
    },
    {
      header: 'El Tiempo Es Todo',
      subheader: '',
      styles: {
        header: {
          'font-size': '80px',
          'font-weight': '550',
          'color': 'white',
          'text-align': 'center'
        },
        subheader: {
          'font-size': '18px',
          'font-weight': 'normal',
          'color': 'brown',
          'text-align': 'center'
        }
      }
    }
  ];
  delayTime = 360;

  constructor() {}

  async nextText() {
    this.nextIndex = (this.currentIndex < this.texts.length - 1 ? this.currentIndex + 1 : 0);
    await new Promise(resolve => setTimeout(resolve, this.delayTime));
    this.currentIndex = this.nextIndex;
  }

  async prevText() {
    this.nextIndex = (this.currentIndex > 0 ? this.currentIndex - 1 : this.texts.length - 1);
    await new Promise(resolve => setTimeout(resolve, this.delayTime));
    this.currentIndex = this.nextIndex;
  }
  public canShowVideo: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.canShowVideo = true;
    }, 5000);
  }
}
