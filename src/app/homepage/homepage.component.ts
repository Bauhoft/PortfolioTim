import { Component } from '@angular/core';
import { homepage } from '../../assets/text.json';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  text: any = homepage;
}
