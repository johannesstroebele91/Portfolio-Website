import { Component } from '@angular/core';
import {ViewportScroller} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-legal-disclosure',
  templateUrl: './legal-disclosure.component.html',
  styleUrls: ['./legal-disclosure.component.scss']
})
export class LegalDisclosureComponent {

  constructor(private viewportScroller: ViewportScroller, private route: ActivatedRoute, private title: Title, private meta: Meta) {
    this.title.setTitle('Legal disclosure page');
    this.meta.addTags([
      {
        name: 'author',
        content: 'Johannes Ströbele'
      },
      {
        name: 'description',
        content: 'This is the legal disclosure of this portfolio page.'
      },
      {
        name: 'keywords',
        content: 'Johannes Ströbele, portfolio, legal disclosure, legal'
      },
    ], true);
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
