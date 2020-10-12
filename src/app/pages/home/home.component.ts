import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {


    constructor(private route: ActivatedRoute, private title: Title, private meta: Meta) {
        this.title.setTitle('Johannes Ströbele');
        this.meta.addTags([
            {
                name: 'author',
                content: 'Johannes Ströbele'
            },
            {
                name: 'description',
                content: 'Welcome! I am Johannes, a full stack cloud developer. On my homepage you can view my two most recent projects, ' +
                    'the companies I worked with, and what others say about me.  other pages of my portfolio'
            },
            {
                name: 'keywords',
                content: 'Johannes Ströbele, Johannes Stroebele, portfolio, homepage, full stack developer, software developer,' +
                    'information design, front end development, back end development, enterprise application'
            },
        ], true);
    }

    openWebsite(url: string) {
        window.location.href = url;
    }
}
