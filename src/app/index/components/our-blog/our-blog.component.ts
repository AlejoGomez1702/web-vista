import { Component } from '@angular/core';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html',
  styleUrls: ['./our-blog.component.scss']
})
export class OurBlogComponent {
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
