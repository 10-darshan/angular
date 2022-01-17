import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects.component';
import { ServicesComponent } from './services.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { DefaultComponent } from './default.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ServicesComponent,
    ContactComponent,
    HomeComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
