import {NgModule} from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ProjectsComponent} from './pages/projects/projects.component';
import {ContactComponent} from "./pages/contact/contact.component";
import {LegalDisclosureComponent} from "./pages/legal-disclosure/legal-disclosure.component";
import {DataProtectionDeclarationComponent} from "./pages/data-protection-declaration/data-protection-declaration.component";
import {SkillsComponent} from "./pages/skills/skills.component";

export const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'search', component: ProjectsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'legal', component: LegalDisclosureComponent},
    {path: 'data', component: DataProtectionDeclarationComponent},
];

const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
};


@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
