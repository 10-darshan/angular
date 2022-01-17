import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProjectsComponent } from './projects.component';
import { ServicesComponent } from './services.component';
import { ContactComponent } from './contact.component';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default.component';

const routes: Routes = [
  { path : '', component : DefaultComponent},
  { path : 'home', component : HomeComponent},
  { path : 'projects', component : ProjectsComponent},
  { path : 'services', component : ServicesComponent},
  { path : 'contact', component : ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
