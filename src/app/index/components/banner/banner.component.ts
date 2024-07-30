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
      header: 'En servicio somos:',
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
      header: 'Nuestra imagen refleja:',
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
      header: 'El tiempo es todo',
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
  delayTime = 360;
  autoChangeSubscription: Subscription | null = null;
  canShowVideo: boolean = false;
  isReadyToAutoChange: boolean = false;


  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.canShowVideo = true;
      this.isReadyToAutoChange = true;
      this.startAutoSlide();
    }, 5000);
  }


  hasSolidez(text: string): boolean {
    return text.includes('Solidez');
  }
  animationClass = 'slide-in-from-right';
  intervalId: any;


  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextText(true);
    }, 7000);
  }

  nextText(isAuto = false) {
    this.animationClass = 'slide-out-to-left';
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      this.animationClass = 'slide-in-from-right';
      if (!isAuto) {
        clearInterval(this.intervalId);
        this.startAutoSlide();
      }
    }, 1000);
  }

  prevText() {
    this.animationClass = 'slide-out-to-right';
    setTimeout(() => {
      this.currentIndex = (this.currentIndex - 1 + this.texts.length) % this.texts.length;
      this.animationClass = 'slide-in-from-left';
      clearInterval(this.intervalId);
      this.startAutoSlide();
    }, 1000);
  }

}


