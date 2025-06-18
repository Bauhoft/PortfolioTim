import {
  Component,
  ElementRef,
  ViewChild,
  QueryList,
  ViewChildren,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ProjectImage {
  src: string;
  scale: number;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('container') container!: ElementRef;
  @ViewChildren('imageElement') imageElements!: QueryList<ElementRef>;

  pictures: ProjectImage[] = [
    { src: 'project1.jpg', scale: 4 },
    { src: 'project2.jpg', scale: 5 },
    { src: 'project3.jpg', scale: 6 },
    { src: 'project4.jpg', scale: 5 },
    { src: 'project5.jpg', scale: 6 },
    { src: 'project6.jpg', scale: 8 },
    { src: 'project7.jpg', scale: 9 },
  ];

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    this.initParallax();
  }

  ngOnDestroy(): void {
    // Clean up ScrollTrigger instances
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }

  private initParallax(): void {
    if (!this.container || !this.imageElements.length) return;

    const containerEl = this.container.nativeElement;

    this.imageElements.forEach((el, index) => {
      const element = el.nativeElement;
      const scale = this.pictures[index].scale;

      gsap.fromTo(
        element,
        { scale: 1 },
        {
          scale: scale,
          ease: 'none',
          scrollTrigger: {
            trigger: containerEl,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        }
      );
    });
  }
}
