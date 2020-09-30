import {Component} from '@angular/core';
import {ViewportScroller} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
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
        this.title.setTitle('About page of Johannes Ströbele');
        this.meta.addTags([
            {
                name: 'description',
                content: 'Welcome! I am Johannes, a full stack cloud developer. On my homepage you can view my two most recent projects, ' +
                    'the companies I worked with, and what others say about me.  other pages of my portfolio'
            },
            {
                name: 'author',
                content: 'Johannes Ströbele'
            },
            {
                name: 'keywords',
                content: 'Johannes Ströbele, portfolio, homepage, full stack developer, software development, information design, ' +
                    'front-end development, back-end development, enterprise application'
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
