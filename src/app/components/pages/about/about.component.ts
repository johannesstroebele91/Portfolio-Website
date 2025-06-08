import {Component} from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(private viewportScroller: ViewportScroller, private route: ActivatedRoute, private title: Title, private meta: Meta) {
    this.title.setTitle('About page');
    this.meta.addTags([
      {
        name: 'author',
        content: 'Johannes Ströbele'
      },
      {
        name: 'description',
        content: 'Turning code into customer value – digital experiences that inspire..' +
          'On this page, you can view working experiences, studies, and recommendations.'
      },
      {
        name: 'keywords',
        content: 'Johannes Ströbele, Johannes Stroebele, portfolio, about, full stack developer, software developer,' +
          'frontend development, backend development, business application'
      },
    ], true);
  }

  onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  /* TODO uncomment if want to open files in a new tab
  openFile(filename: string) {
     window.open('../../assets/' + filename);
   }*/
}
