import { Component } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-legal-disclosure',
  templateUrl: './legal-disclosure.component.html',
  styleUrls: ['./legal-disclosure.component.scss']
})
export class LegalDisclosureComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
