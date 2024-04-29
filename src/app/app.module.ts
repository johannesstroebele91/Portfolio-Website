import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {UsersService} from '../services/users.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {ProjectsComponent} from './components/pages/projects/projects.component';
import {HomeComponent} from './components/pages/home/home.component';
import {AboutComponent} from './components/pages/about/about.component';
import {ContactComponent} from './components/pages/contact/contact.component';
import {DataProtectionDeclarationComponent} from './components/pages/data-protection-declaration/data-protection-declaration.component';
import {LegalDisclosureComponent} from './components/pages/legal-disclosure/legal-disclosure.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {FooterComponent} from './components/footer/footer.component';
import {NavComponent} from './components/nav/nav.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProjectsComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DataProtectionDeclarationComponent,
    LegalDisclosureComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule, MatInputModule,
    CdkTextareaAutosize, MatProgressSpinner
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {
}
