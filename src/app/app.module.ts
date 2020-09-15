import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavComponent} from './nav/nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {SkillsComponent} from "./skills/skills.component";
import {ProjectsComponent} from "./projects/projects.component";
import {DataProtectionDeclarationComponent} from "./data-protection-declaration/data-protection-declaration.component";
import {LegalDisclosureComponent} from "./legal-disclosure/legal-disclosure.component";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent,
    ProjectsComponent,
    DataProtectionDeclarationComponent,
    LegalDisclosureComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
