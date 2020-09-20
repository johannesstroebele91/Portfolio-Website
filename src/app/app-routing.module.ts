import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ProjectsComponent} from './pages/projects/projects.component';
import {SkillsComponent} from "./pages/skills/skills.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {LegalDisclosureComponent} from "./pages/legal-disclosure/legal-disclosure.component";
import {DataProtectionDeclarationComponent} from "./pages/data-protection-declaration/data-protection-declaration.component";

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'search', component: ProjectsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'legal', component: LegalDisclosureComponent},
    {path: 'data', component: DataProtectionDeclarationComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
