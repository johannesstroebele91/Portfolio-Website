import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ProjectsComponent} from './projects/projects.component';
import {SkillsComponent} from "./skills/skills.component";
import {ContactComponent} from "./contact/contact.component";
import {LegalDisclosureComponent} from "./legal-disclosure/legal-disclosure.component";
import {DataProtectionDeclarationComponent} from "./data-protection-declaration/data-protection-declaration.component";

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
