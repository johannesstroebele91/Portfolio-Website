import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {UsersService} from '../services/users.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
// Components
import {NavComponent} from './components/nav/nav.component';
import {FooterComponent} from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {ProjectsComponent} from './components/pages/projects/projects.component';
import {HomeComponent} from './components/pages/home/home.component';
import {AboutComponent} from './components/pages/about/about.component';
import {ContactComponent} from './components/pages/contact/contact.component';
import {DataProtectionDeclarationComponent} from './components/pages/data-protection-declaration/data-protection-declaration.component';
import {LegalDisclosureComponent} from './components/pages/legal-disclosure/legal-disclosure.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    DataProtectionDeclarationComponent,
    LegalDisclosureComponent,
    FooterComponent,
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    /* TODO fix later
    AppRoutingModule,
    FlexLayoutModule,
    ChartsModule,
    MDBBootstrapModule.forRoot() */
  ],
  providers: [UsersService],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
