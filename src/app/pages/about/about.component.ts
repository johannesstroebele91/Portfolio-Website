import {Component} from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Meta, Title} from "@angular/platform-browser";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {

    showContentFrontend = false;
    showContentBackend = false;
    showContentUxDesign = false;
    showContentDSResearch = false;

    constructor(private viewportScroller: ViewportScroller, private route: ActivatedRoute, private title: Title, private meta: Meta) {
        this.title.setTitle('About page');
        this.meta.addTags([
            {
                name: 'author',
                content: 'Johannes Ströbele'
            },
            {
                name: 'description',
                content: 'My goal is to develop enterprise applications that optimize the user experience and business value.' +
                    'On this page, you can view my skills, working experience, and studies.'
            },
            {
                name: 'keywords',
                content: 'Johannes Ströbele, portfolio, about, full stack developer, software developer, information design, ' +
                    'front end development, back end development, enterprise application'
            },
        ], true);
    }

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    openFile(filename: string) {
        window.open('../../assets/' + filename);
    }
}
