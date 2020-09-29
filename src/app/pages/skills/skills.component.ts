import {Component} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

    showContentUxDesign = false;
    showContentUxResearch = false;
    showContentOthers = false;
    showContentFrontend = false;
    showContentBackend = false;

    constructor(private viewportScroller: ViewportScroller) {
    }

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    openFile(filename: string) {
        window.open('../../assets/' + filename);
    }
}
