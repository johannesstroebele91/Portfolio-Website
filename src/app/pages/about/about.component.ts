import {Component} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {

    constructor(private viewportScroller: ViewportScroller) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    openFile(filename: string) {
        window.open('../../assets/' + filename);
    }

}
