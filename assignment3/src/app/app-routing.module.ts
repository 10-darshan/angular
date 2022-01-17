import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
  { path : 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
