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
    this.applyAnimation('right', 'right'); // Muestra el próximo texto desde la derecha hacia la izquierda
  }

  async prevText() {
    this.nextIndex = (this.currentIndex > 0? this.currentIndex - 1 : this.texts.length - 1);
    await new Promise(resolve => setTimeout(resolve, this.delayTime));
    this.currentIndex = this.nextIndex;
    this.applyAnimation('left', 'left'); // Muestra el texto anterior desde la izquierda hacia la derecha
  }


  applyAnimation(direction: 'right' | 'left', from: 'right' | 'left') {
    const element = document.querySelector('.slide-in-from-' + direction) as HTMLElement;
    if (!element) {
      console.warn(`Elemento no encontrado con el selector.slide-in-from-${direction}`);
      return;
    }
    element.classList.remove('slide-in-from-' + direction);
    setTimeout(() => {
      if (from === 'right') {
        element.style.transform = 'translateX(100%)'; // Preparar para la animación desde la derecha
      } else {
        element.style.transform = 'translateX(-100%)'; // Preparar para la animación desde la izquierda
      }
      element.classList.add('slide-in-from-' + direction);
    }, 50); // Un pequeño retraso para asegurar que la animación se aplique correctamente
  }


  autoChange() {
    if (this.autoChangeSubscription) {
      this.autoChangeSubscription.unsubscribe();
    }
    this.autoChangeSubscription = interval(this.delayTime).pipe(
      takeWhile(() => this.isReadyToAutoChange), // Continuar hasta que isReadyToAutoChange sea falso
      switchMap(() => this.nextText())
    ).subscribe();
  }


  hasSolidez(text: string): boolean {
    return text.includes('Solidez');
  }
}
