import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add.component';
import { SearchComponent } from './search.component';
import { UpdateComponent } from './update.component';


const routes: Routes = [
  { path: "", component: AddComponent },
  { path: "search", component: SearchComponent },
  { path: "update/:e_id", component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
