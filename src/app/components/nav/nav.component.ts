import {Component} from '@angular/core';

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
}
