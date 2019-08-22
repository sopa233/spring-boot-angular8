import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RonComponent } from './ron/ron.component';

const routes: Routes = [
  { path: 'ron', component: RonComponent }
];

@NgModule({
  declarations: [
    RonComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BigmodRoutingModule { }
