import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

    constructor(private route: ActivatedRoute, private title: Title, private meta: Meta) {
        this.title.setTitle('Contact page');
        this.meta.addTags([
            {
                name: 'author',
                content: 'Johannes Ströbele'
            },

            {
                name: 'description',
                content: 'Get in Touch if you need support developing an business application or just want to connect.'
            },
            {
                name: 'keywords',
                content: 'Johannes Ströbele, Johannes Stroebele, portfolio, contact, get in touch, email me, full stack developer,' +
                    'software developer, information design' +
                    'front end development, back end development, business application'
            },
        ], true);
    }
}
