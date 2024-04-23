import {Routes} from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {SkillsComponent} from './components/pages/skills/skills.component';
import {ProjectsComponent} from './components/pages/projects/projects.component';
import {AboutComponent} from './components/pages/about/about.component';
import {ContactComponent} from './components/pages/contact/contact.component';
import {LegalDisclosureComponent} from './components/pages/legal-disclosure/legal-disclosure.component';
import {DataProtectionDeclarationComponent} from './components/pages/data-protection-declaration/data-protection-declaration.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'search', component: ProjectsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'legal', component: LegalDisclosureComponent},
  {path: 'data', component: DataProtectionDeclarationComponent},
  {path: '**', component: HomeComponent},  // Wildcard route for a 404 page
];
