import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-project-scroll',
  templateUrl: './project-scroll.component.html',
  styleUrls: ['./project-scroll.component.scss'],
})
export class ProjectScrollComponent implements AfterViewInit {
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    this.initHorizontalScroll();
  }

  private initHorizontalScroll(): void {
    const sections = gsap.utils.toArray('.panel');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.container',
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () =>
          '+=' +
          (document.querySelector('.container') as HTMLElement).offsetWidth,
      },
    });
  }
}
