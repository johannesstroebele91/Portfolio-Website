import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {

    showMobileMenu = false;

    showMenuMobile(): boolean {
        return this.showMobileMenu = !this.showMobileMenu;
    }

    /* TODO: fix fold out menu after resize
    //  https://www.digitalocean.com/community/tutorials/angular-breakpoints-angular-cdk
    matcher: MediaQueryList;

    constructor(public mediaMatcher: MediaMatcher) {
    }

    ngOnInit() {
        this.matcher = this.mediaMatcher.matchMedia('(min-width: 576px)');

        this.matcher.addEventListener('change', this.myListener);

    }

    ngOnDestroy() {
        this.matcher.removeEventListener('change', this.myListener);
    }

    myListener(event) {
        this.showMobileMenu = false;
        console.log(event.matches ? 'match' : 'no match');
    }
     */
    openCV() {
        window.open('../../assets/Stroebele_CV.pdf');
    }
}
