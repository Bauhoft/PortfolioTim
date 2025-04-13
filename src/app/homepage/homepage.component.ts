import { Component, OnInit } from '@angular/core';
import { homepage } from '../../assets/text.json';
import { ProjectsComponent } from '../shared/components/projects/projects.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { BlurryCursorComponent } from '../shared/components/blurry-cursor/blurry-cursor.component';

@Component({
  selector: 'app-homepage',
  imports: [ProjectsComponent, FooterComponent, BlurryCursorComponent],
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
