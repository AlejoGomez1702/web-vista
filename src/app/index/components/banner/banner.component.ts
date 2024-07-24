import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take, switchMap, takeWhile } from 'rxjs/operators';

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
      header: 'En Servicio Somos:',
      footheader: 'Rápidos, Atentos Y Profesionales',
      sth: '#lavidamasfacil',
      subheader: '',
      paragraph: 'Conócenos, te invitamos a vivir una historia + un café',
      styles: {
        header: {
          'font-size': '90px',
          'font-weight': '550',
          'color': 'white',
          'text-align': 'center',
          'margin-bottom': '20px',
        },
        sth: {
          'font-size': '40px',
          'font-weight': '600',
          'color': '#ffb600',
          'text-align': 'center',
          'margin-bottom': '20px',
        },
        paragraph:{
          'font-size': '20px',
          'font-weight': '400',
          'color': 'white',
          'text-align': 'center',
        },
        footheader:{
          'font-size': '70px',
          'font-weight': '550',
          'color': 'white',
          'text-align': 'center',
          'margin-bottom': '30px',
        }
      }
    },

    {
      header: 'Nuestra Imagen Refleja',
      subheader: 'Solidez,  Modernismo  Y  Foco',
      paragraph: 'Conócenos, te invitamos a vivir una historia + un café',
      styles: {
        header: {
          'font-size': '90px',
          'font-weight': '550',
          'color': 'white',
          'text-align': 'center',
          'margin-bottom': '10px',
        },
        subheader: {
          'font-size': '70px',
          'font-weight': '550',
          'color': 'white',
          'text-align': 'center',
          'margin-bottom': '20px',
        },
        paragraph:{
          'font-size': '20px',
          'font-weight': '400',
          'color': 'white',
          'text-align': 'center'
        },
      }
    },

    {
      header: 'El Tiempo Es Todo',
      subheader: '',
      paragraph: 'Conócenos, te invitamos a vivir una historia + un café',
      styles: {
        header: {
          'font-size': '80px',
          'font-weight': '550',
          'color': 'white',
          'text-align': 'center',
          'margin-bottom': '20px',
        },
        paragraph:{
          'font-size': '20px',
          'font-weight': '400',
          'color': 'white',
          'text-align': 'center'
        },
      }
    }
  ];
  delayTime = 360; // Tiempo de espera antes de cambiar automáticamente
  autoChangeSubscription: Subscription | null = null;
  canShowVideo: boolean = false;
  isReadyToAutoChange: boolean = false;


  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.canShowVideo = true;
      this.isReadyToAutoChange = true;
    }, 5000);
  }


  async nextText() {
    this.nextIndex = (this.currentIndex < this.texts.length - 1? this.currentIndex + 1 : 0);
    await new Promise(resolve => setTimeout(resolve, this.delayTime));
    this.currentIndex = this.nextIndex;
  }

  async prevText() {
    this.nextIndex = (this.currentIndex > 0? this.currentIndex - 1 : this.texts.length - 1);
    await new Promise(resolve => setTimeout(resolve, this.delayTime));
    this.currentIndex = this.nextIndex;
  }

  autoChange() {
    if (this.autoChangeSubscription) {
      this.autoChangeSubscription.unsubscribe();
    }
    this.autoChangeSubscription = interval(this.delayTime).pipe(
      switchMap(() => this.nextText())
    ).subscribe();
  }


  hasSolidez(text: string): boolean {
    return text.includes('Solidez');
  }

}


