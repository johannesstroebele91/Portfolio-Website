import {Component} from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-data-protection-declaration',
    templateUrl: './data-protection-declaration.component.html',
    styleUrls: ['./data-protection-declaration.component.scss']
})
export class DataProtectionDeclarationComponent {

    constructor(private viewportScroller: ViewportScroller, private route: ActivatedRoute, private title: Title, private meta: Meta) {
        this.title.setTitle('Data protection declaration page');
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
                content: 'Johannes Ströbele, portfolio, data protection declaration, data protection'
            },
        ], true);
    }

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }
}
