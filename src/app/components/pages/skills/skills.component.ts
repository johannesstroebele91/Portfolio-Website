import {Component} from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['../about/about.component.scss']
})
export class SkillsComponent {

  showContentFrontend = false;
  showContentBackend = false;
  showContentUxDesign = false;
  showContentDSResearch = false;

  constructor(private viewportScroller: ViewportScroller, private router: Router, private title: Title, private meta: Meta) {
    this.title.setTitle('About page');
    this.meta.addTags([
      {
        name: 'author',
        content: 'Johannes Ströbele'
      },
      {
        name: 'description',
        content: 'My goal is to develop business applications that optimize the user experience and business value.' +
          'On this page, you can view my skills, working experience, and studies.'
      },
      {
        name: 'keywords',
        content: 'Johannes Ströbele, Johannes Stroebele, portfolio, about, full stack developer, software developer,' +
          'information design, front end development, back end development, business application'
      },
    ], true);
  }

  public onClick(elementId: string): void {
    this.router.navigate(['/about']).then(() => {
      this.viewportScroller.scrollToAnchor(elementId);
    });
  }

  openFile(filename: string) {
    window.open('../../assets/' + filename);
  }
}
