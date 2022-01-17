import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiquidityComponent } from './liquidity/liquidity.component';
import { ReportingComponent } from './reporting/reporting.component';


const routes: Routes = [
  { path: "", component: ReportingComponent},
  { path: "liquidity", component: LiquidityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
