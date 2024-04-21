import {Component} from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  constructor(private viewportScroller: ViewportScroller, public router: Router) {
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
