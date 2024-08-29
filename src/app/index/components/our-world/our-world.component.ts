import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-our-world',
  templateUrl: './our-world.component.html',
  styleUrls: ['./our-world.component.scss']
})
export class OurWorldComponent implements AfterViewInit {

  ngAfterViewInit(): void {

    const carouselContainer = document.getElementById('carouselContainer') as HTMLElement;
    const prevButton = document.getElementById('carouselPrev') as HTMLElement;
    const nextButton = document.getElementById('carouselNext') as HTMLElement;


    const scrollStep = 240;


    const scrollPrev = () => {
      carouselContainer.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    };


    const scrollNext = () => {
      carouselContainer.scrollBy({ left: scrollStep, behavior: 'smooth' });
    };


    prevButton?.addEventListener('click', scrollPrev);
    nextButton?.addEventListener('click', scrollNext);
  }

}
