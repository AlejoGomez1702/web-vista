import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements AfterViewInit
{
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ){}

  ngAfterViewInit() {
    // Espera 2 segundos antes de ocultar el preloader y remover la clase loader
    setTimeout(() => {
      const preloader = this.elRef.nativeElement.querySelector('.preloader');
      this.renderer.setStyle(preloader, 'display', 'none');
      this.renderer.addClass(document.documentElement, 'overflow');
    }, 1000);
  }

}
