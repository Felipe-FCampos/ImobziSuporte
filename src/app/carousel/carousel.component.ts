import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  imagens: string[] = ['../../assets/banner_carousel_1 1.svg', '../../assets/banner_carousel_2 1.svg', '../../assets/banner_carousel_3 1.svg'];
  passing: string[] = ['../../assets/first.svg', '../../assets/second.svg', '../../assets/third.svg'];
  currentPassing: string = '';
  currentImage: string = '';
  intervalId: any;

  constructor() {};

  ngOnInit(){
    this.currentImage = this.imagens[0];
    this.currentPassing = this.passing[0];
    this.startInterval();
  }
    startInterval(){
      this.intervalId = setInterval(() => {
        this.avancarImagem();
      }, 4000);
    }

    stopInterval(){
      clearInterval(this.intervalId);
    }

    avancarImagem(){
      const currentIndex = this.imagens.indexOf(this.currentImage);
      const nextIndex = (currentIndex + 1) % this.imagens.length;

      this.currentImage = this.imagens[nextIndex];
    }

    voltarImagem(){
      const currentIndex = this.imagens.indexOf(this.currentImage);
      const prevIndex = (currentIndex - 1 + this.imagens.length) % this.imagens.length;

      this.currentImage = this.imagens[prevIndex];
    }

    avancarImagemManualmente(){
      this.stopInterval();
      this.avancarImagem();
      this.startInterval();
      console.log('WOrks');
    }

    voltarImagemManualmente(){
      this.stopInterval();
      this.voltarImagem();
      this.startInterval();
    }
}
