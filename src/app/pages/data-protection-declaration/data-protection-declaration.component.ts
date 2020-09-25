import { Component } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-data-protection-declaration',
  templateUrl: './data-protection-declaration.component.html',
  styleUrls: ['./data-protection-declaration.component.scss']
})
export class DataProtectionDeclarationComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
