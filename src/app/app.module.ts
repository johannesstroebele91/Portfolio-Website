import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {UsersService} from '../services/users.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {ChartsModule} from 'ng2-charts';
// Components
import {HomeComponent} from './pages/home/home.component';
import {NavComponent} from './components/nav/nav.component';
import {FooterComponent} from './components/footer/footer.component';
import {AboutComponent} from './pages/about/about.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {ContactComponent} from './pages/contact/contact.component';
import {DataProtectionDeclarationComponent} from './pages/data-protection-declaration/data-protection-declaration.component';
import {LegalDisclosureComponent} from './pages/legal-disclosure/legal-disclosure.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [
        AppComponent,
        ProjectsComponent,
        HomeComponent,
        NavComponent,
        AboutComponent,
        ContactComponent,
        DataProtectionDeclarationComponent,
        LegalDisclosureComponent,
        FooterComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        FormsModule,
        ChartsModule,
        MatIconModule,
        MatTabsModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MDBBootstrapModule.forRoot()
    ],
    providers: [UsersService],
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {
}
