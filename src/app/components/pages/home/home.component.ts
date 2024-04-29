import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  constructor(private router: Router, private title: Title, private meta: Meta, private viewportScroller: ViewportScroller) {
    this.title.setTitle('Johannes Ströbele');
    this.meta.addTags([
      {
        name: 'author',
        content: 'Johannes Ströbele'
      },
      {
        name: 'description',
        content: 'Welcome! I am Johannes, a full stack cloud developer. On my homepage you can view my two most recent projects, ' +
          'the companies I worked with, and what others say about me.'
      },
      {
        name: 'keywords',
        content: 'Johannes Ströbele, Johannes Stroebele, portfolio, homepage, full stack developer, software developer,' +
          'information design, front end development, back end development, business application'
      },
    ], true);
  }

  openWebsite(url: string) {
    window.open(url, '_blank');
  }

  public navToAboutPageCompanySection(): void {
    this.router.navigate(['/about']).then(() => {
      this.viewportScroller.scrollToAnchor('company');
    });
  }

}
