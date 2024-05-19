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
        content: 'My goal is to develop business applications that the maximize customer and the business Value.' +
          'On this page, you can view working experience, studies, and recommendations.'
      },
      {
        name: 'keywords',
        content: 'Johannes Ströbele, Johannes Stroebele, portfolio, about, full stack developer, software developer,' +
          'information design, front end development, back end development, business application'
      },
    ], true);
  }

  onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  openFile(filename: string) {
    window.open('../../assets/' + filename);
  }
}
