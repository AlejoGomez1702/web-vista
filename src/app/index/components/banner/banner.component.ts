import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  currentIndex = 0;
  nextIndex = 0;
  texts = ['Texto 1', 'Texto 2', 'Texto 3'];
  delayTime = 360;

  constructor() {}

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
  public canShowVideo: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.canShowVideo = true;
    }, 5000);
  }


}
