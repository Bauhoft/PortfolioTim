import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Lenis from 'lenis';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  ngOnInit(): void {
    const lenis = new Lenis({
      autoRaf: true,
    });
    lenis.on('scroll', (e) => {
      console.log(e);
    });
  }
}
