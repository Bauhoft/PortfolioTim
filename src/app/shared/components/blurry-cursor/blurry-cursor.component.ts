import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-blurry-cursor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blurry-cursor.component.html',
  styleUrl: './blurry-cursor.component.scss',
})
export class BlurryCursorComponent implements OnInit, OnDestroy {
  @ViewChildren('circle') circles!: QueryList<ElementRef>;
  @Input() isVisible: boolean = false;
  @Input() isActive: boolean = false;

  get size(): number {
    return this.isActive ? 400 : 30;
  }

  get blurAmount(): number {
    return this.isActive ? 20 : 2;
  }

  get opacity(): number {
    return this.isVisible ? 1 : 0;
  }

  colors = ['#c32d27', '#f5c63f', '#457ec4', '#356fdb'];

  mouse = { x: 0, y: 0 };
  // Create multiple delayed mouse positions for different circles
  delayedPositions = Array(4).fill({ x: 0, y: 0 });
  private rafId: number | null = null;

  // Create array of 4 items for template iteration
  cursorCircles = [...Array(4)].map((_, i) => i);

  // Adjust the follow speed for each circle
  getFollowSpeed(index: number): number {
    // Make all circles follow at a similar base speed with small differences
    return 0.1 - index * 0.015;
  }

  ngOnInit(): void {
    window.addEventListener('mousemove', this.manageMouseMove);
    this.animate();
  }

  ngOnDestroy(): void {
    window.removeEventListener('mousemove', this.manageMouseMove);
    if (this.rafId) {
      window.cancelAnimationFrame(this.rafId);
    }
  }

  manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    this.mouse = {
      x: clientX,
      y: clientY,
    };
  };

  lerp(start: number, end: number, factor: number): number {
    return start + (end - start) * factor;
  }

  animate = () => {
    // Only animate when visible
    if (this.isVisible) {
      // Update each circle's position with different lerp speeds
      this.delayedPositions = this.delayedPositions.map((pos, index) => {
        return {
          x: this.lerp(pos.x, this.mouse.x, this.getFollowSpeed(index)),
          y: this.lerp(pos.y, this.mouse.y, this.getFollowSpeed(index)),
        };
      });

      this.moveCircles();
    }
    this.rafId = window.requestAnimationFrame(this.animate);
  };

  moveCircles(): void {
    if (!this.circles || this.circles.length < 1) return;

    this.circles.forEach((circle, i) => {
      const position = this.delayedPositions[i];
      gsap.set(circle.nativeElement, {
        x: position.x,
        y: position.y,
        xPercent: -50,
        yPercent: -50,
      });
    });
  }
}
