import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user.component';
import { BigmodModule } from './bigmod/bigmod.module';
import { UpdateUserComponent } from './user/update-user.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users'},
  { path: 'users', component: UserComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'update', component: UpdateUserComponent },
  { path: 'ron', loadChildren: './bigmod/bigmod.module#BigmodModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
