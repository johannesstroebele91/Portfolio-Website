import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- mat-typography: will style all descendant native elements with Angular material typography -->
    <div class="main-container mat-app-background">
      <div id="top"></div>
      <app-nav></app-nav>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>

  `,
})
export class AppComponent {
}
