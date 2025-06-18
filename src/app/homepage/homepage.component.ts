import { Component } from '@angular/core';
import { homepage } from '../../assets/text.json';
import { BlurryCursorComponent } from '../shared/components/blurry-cursor/blurry-cursor.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ProjectScrollComponent } from '../shared/components/project-scroll/project-scroll.component';

@Component({
  selector: 'app-homepage',
  imports: [FooterComponent, BlurryCursorComponent, ProjectScrollComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  text: any = homepage;
  isCursorVisible = false;
  isCursorActive = false;

  setCursorVisible(visible: boolean): void {
    this.isCursorVisible = visible;
    if (!visible) {
      this.isCursorActive = false; // Reset active state when not visible
    }
  }

  setCursorActive(active: boolean): void {
    if (this.isCursorVisible) {
      this.isCursorActive = active;
    }
  }
}
