import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html'
})
export class PreloaderComponent implements OnInit{
  
  public showPreloader: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.showPreloader = false;
    }, 2000);
  }

}
